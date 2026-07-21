const knowledgeBasePaths = [
  "https://www.tivoro.in/data/younggates_course_bot_knowledge_base.txt",
  "https://www.tivoro.in/api/younggates_course_bot_knowledge_base.txt",
  `${window.location.origin}/data/younggates_course_bot_knowledge_base.txt`,
  `${window.location.origin}/api/younggates_course_bot_knowledge_base.txt`,
  `${window.location.origin}/kidsverse-codelab/data/younggates_course_bot_knowledge_base.txt`,
  `${window.location.origin}/kidsverse-codelab/api/younggates_course_bot_knowledge_base.txt`,
  "data/younggates_course_bot_knowledge_base.txt",
];
const sourceStatus = document.querySelector("[data-course-source-status]");
const courseForm = document.querySelector(".course-fit-form");
const courseInput = document.querySelector("#courseRequirement");
const courseOutput = document.querySelector("[data-course-output]");
const courseEmpty = document.querySelector("[data-course-empty]");
const courseError = document.querySelector("[data-course-error]");
const exampleButton = document.querySelector("[data-course-example]");

let courseKnowledge = "";
let parsedCourses = [];

const keywordGroups = {
  scratch: ["scratch", "block", "visual", "animation", "story", "stories"],
  games: ["game", "gaming", "minecraft", "roblox", "animation"],
  apps: ["app", "mobile", "application"],
  python: ["python", "text based", "graphics"],
  web: ["website", "web", "html", "css", "javascript"],
  sql: ["sql", "database", "rdbms", "data"],
  ai: ["ai", "artificial intelligence", "chatbot", "prompt", "agent"],
  math: ["math", "mathematics", "numbers", "algebra", "logic"],
  english: ["english", "communication", "speaking", "writing", "language"],
  robotics: ["robot", "robotics", "stem"],
  beginner: ["new", "beginner", "first", "start", "intro", "foundation", "easy"],
  advanced: ["advanced", "level 2", "next", "already", "knows", "completed"],
};

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9+.#\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getField(block, label) {
  const pattern = new RegExp(`${label}:\\s*([^\\n]+)`, "i");
  return block.match(pattern)?.[1]?.trim() || "";
}

function getUrl(block) {
  return block.match(/https?:\/\/[^\s)]+/i)?.[0] || "";
}

function parseCourses(text) {
  return text
    .split(/-{20,}/)
    .map((block) => block.trim())
    .filter((block) => /COURSE ID:/i.test(block))
    .map((block) => {
      const name = getField(block, "COURSE NAME") || getField(block, "ALTERNATE PAGE TITLE FOUND") || "YoungGates Course";
      return {
        id: getField(block, "COURSE ID"),
        name,
        type: getField(block, "PROGRAM TYPE"),
        category: getField(block, "CATEGORY"),
        level: getField(block, "LEVEL"),
        age: getField(block, "AGE OR GRADE"),
        url: getUrl(block),
        block,
        searchable: normalizeText(block),
      };
    });
}

function getQuerySignals(query) {
  const normalized = normalizeText(query);
  return Object.entries(keywordGroups)
    .filter(([, words]) => words.some((word) => normalized.includes(word)))
    .map(([group]) => group);
}

function scoreCourse(course, query) {
  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(" ").filter((word) => word.length > 2);
  const signals = getQuerySignals(query);
  let score = 0;
  const reasons = [];

  queryWords.forEach((word) => {
    if (course.searchable.includes(word)) score += 2;
  });

  signals.forEach((signal) => {
    const groupWords = keywordGroups[signal];
    const matchCount = groupWords.filter((word) => course.searchable.includes(word)).length;
    if (matchCount) {
      score += matchCount * 8;
      reasons.push(signal);
    }
  });

  if (signals.includes("beginner") && /level 1|beginner|intro|first/i.test(course.block)) score += 18;
  if (signals.includes("advanced") && /level 2|advanced|next/i.test(course.block)) score += 18;
  if (/\bgrade\s*[3-8]\b|\bclass\s*[3-8]\b|child|kid|kids/i.test(query) && /scratch|block|gaming|animation|app/i.test(course.block)) score += 10;
  if (/\bgrade\s*(9|10|11|12)\b|\bclass\s*(9|10|11|12)\b|teen/i.test(query) && /python|javascript|web|sql|ai/i.test(course.block)) score += 10;

  return {
    ...course,
    score,
    reasons: [...new Set(reasons)].slice(0, 5),
  };
}

function extractUsefulLines(block) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const useful = lines.filter((line) =>
    /GOOD MATCH|STUDENTS CREATE|STATED LEARNING|OFFICIAL COURSE DESCRIPTION|BOT MATCHING|IMPORTANT|NOT THE BEST/i.test(line)
  );
  return useful.slice(0, 5);
}

function renderRecommendation(query) {
  if (!parsedCourses.length) {
    courseError.hidden = false;
    courseError.textContent = "Course knowledge is not loaded yet. Please try again after a moment.";
    return;
  }

  const matches = parsedCourses
    .map((course) => scoreCourse(course, query))
    .filter((course) => course.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!matches.length) {
    courseEmpty.hidden = true;
    courseOutput.hidden = false;
    courseOutput.innerHTML = `
      <article class="course-fit-card">
        <span>No clear match found</span>
        <h2>Ask for more detail before recommending.</h2>
        <p>I could not confidently map this requirement to the current course knowledge base. Ask for the learner's grade, current coding exposure, goal, and preferred project type.</p>
      </article>
    `;
    return;
  }

  const best = matches[0];
  const whatsappText = encodeURIComponent(
    `Hello Tivoro, I used the Course Fit Bot. Requirement: ${query}. Best fit: ${best.name}. Please help me finalize the right batch.`
  );

  courseEmpty.hidden = true;
  courseOutput.hidden = false;
  courseOutput.innerHTML = `
    <article class="course-fit-card is-best">
      <span>Best fit</span>
      <h2>${escapeHtml(best.name)}</h2>
      <p>${escapeHtml(best.category || "Recommended from the course knowledge base")}</p>
      <div class="course-fit-score"><strong>${Math.min(99, Math.round(best.score))}%</strong><small>match confidence</small></div>
      <div class="course-fit-tags">
        ${(best.reasons.length ? best.reasons : ["course match"]).map((reason) => `<em>${escapeHtml(reason)}</em>`).join("")}
      </div>
      <ul>
        ${extractUsefulLines(best.block).map((line) => `<li>${escapeHtml(line.replace(/^[A-Z ]+:/, "").trim())}</li>`).join("")}
      </ul>
      <div class="course-fit-links">
        ${best.url ? `<a class="secondary-button" href="${escapeHtml(best.url)}" target="_blank" rel="noopener noreferrer">Open Course Page</a>` : ""}
        <a class="primary-button" href="https://wa.me/918826758881?text=${whatsappText}" target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a>
      </div>
    </article>
    <div class="course-fit-alt-grid">
      ${matches
        .slice(1)
        .map(
          (match) => `
            <article class="course-fit-card">
              <span>Alternative</span>
              <h3>${escapeHtml(match.name)}</h3>
              <p>${escapeHtml(match.category || match.level || "Possible fit")}</p>
              <strong>${Math.min(99, Math.round(match.score))}% match</strong>
              ${match.url ? `<a href="${escapeHtml(match.url)}" target="_blank" rel="noopener noreferrer">View course</a>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

async function loadKnowledgeBase() {
  const attemptedPaths = [];
  try {
    let loadedResponse = null;
    for (const path of knowledgeBasePaths) {
      try {
        attemptedPaths.push(path);
        const response = await fetch(path, { cache: "no-store" });
        if (response.ok) {
          loadedResponse = response;
          break;
        }
      } catch (error) {
        // Try the next possible deployment path.
      }
    }
    if (!loadedResponse) throw new Error("Knowledge file not found");
    courseKnowledge = await loadedResponse.text();
    parsedCourses = parseCourses(courseKnowledge);
    sourceStatus.textContent = `${parsedCourses.length} courses loaded`;
  } catch (error) {
    sourceStatus.textContent = "Unable to load";
    courseError.hidden = false;
    courseError.textContent =
      `The course knowledge file could not be loaded by the bot script. Tried: ${attemptedPaths.join(", ")}. If the file opens directly, please hard refresh the bot page or redeploy course-fit-bot.js.`;
  }
}

courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  courseError.hidden = true;
  const query = courseInput.value.trim();
  if (!query) {
    courseError.hidden = false;
    courseError.textContent = "Please type the learner requirement first.";
    return;
  }
  renderRecommendation(query);
});

exampleButton?.addEventListener("click", () => {
  courseInput.value = "My child is in Grade 7, new to coding, likes games and animation, and wants a fun first course before moving to Python.";
  courseInput.focus();
});

loadKnowledgeBase();
