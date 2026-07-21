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
const promptButtons = document.querySelectorAll("[data-course-prompt]");
const appendButtons = document.querySelectorAll("[data-course-append]");
const characterCount = document.querySelector("[data-course-count]");
const courseFitWhatsappNumber = "16502294307";

let courseKnowledge = "";
let parsedCourses = [];

const courseUrlFallbacks = [
  ["level 1 gaming animation block coding", "https://www.younggates.com/Classes/level-1-gaminganimation-block-coding/"],
  ["level 2 gaming animation block coding", "https://www.younggates.com/Classes/level-2-gaminganimation-block-coding/"],
  ["intro to apps coding make your own mobile apps", "https://younggates.com/Classes/app-making-block-based/"],
  ["app making block based", "https://younggates.com/Classes/app-making-block-based/"],
  ["beginner python with graphics", "https://www.younggates.com/Classes/beginner-python-with-graphics/"],
  ["level 1 web dev html css", "https://www.younggates.com/Classes/level-1-web-dev-html-css/"],
  ["level 2 web dev html css javascript", "https://www.younggates.com/Classes/level-2-web-dev-html-css-javascript/"],
  ["beginner online python", "https://www.younggates.com/Camps/beginner-online-python/"],
  ["python with graphics", "https://younggates.com/Camps/python-with-graphics/"],
  ["ai and python coding", "https://younggates.com/Camps/ai-and-python-coding/"],
  ["ai young creators camp", "https://younggates.com/Camps/ai-young-creators-camp/"],
  ["ai champions program", "https://younggates.com/Camps/ai-champions-program/"],
  ["ai for coding 6th-8th graders", "https://younggates.com/Camps/ai-for-coding-6th-8th-graders/"],
  ["ai for coding 8th-12th graders", "https://www.younggates.com/Camps/ai-for-coding-8th-12th-graders/"],
  ["microservices bootcamp unlocking scalable solutions", "https://younggates.com/Camps/microservices-bootcamp-unlocking-scalable-solutions/"],
  ["cyber defender foundations of ethical hacking data security", "https://younggates.com/Camps/cyber-defender-foundations-of-ethical-hacking-data-security/"],
  ["mastering sql rdbms from basics to advanced queries", "https://www.younggates.com/Classes/"],
  ["master sql java projects with chatgpt", "https://www.younggates.com/Classes/"],
  ["acsl", "https://younggates.com/ACSL/"],
  ["usaco", "https://younggates.com/USACO/"],
  ["internship", "https://younggates.com/CollegePrep/Internship/"],
];

const keywordGroups = {
  scratch: ["scratch", "block", "visual", "animation", "story", "stories"],
  games: ["game", "gaming", "minecraft", "roblox", "animation"],
  apps: ["app", "mobile", "application"],
  python: ["python", "text based", "graphics"],
  web: ["website", "web", "html", "css", "javascript"],
  sql: ["sql", "database", "rdbms", "data"],
  ai: ["ai", "artificial intelligence", "chatbot", "prompt", "agent"],
  career: ["career", "internship", "portfolio", "real world", "practical"],
  cyber: ["cyber", "cybersecurity", "ethical hacking", "security", "data security", "defender"],
  contests: ["competition", "contest", "olympiad", "championship", "acsl", "usaco"],
  backend: ["microservices", "backend", "scalable", "scalable solutions", "api", "cloud"],
  math: ["math", "mathematics", "numbers", "algebra", "logic"],
  english: ["english", "communication", "speaking", "writing", "language"],
  robotics: ["robot", "robotics", "stem"],
  camps: ["camp", "camps", "summer", "holiday", "short-term", "short term", "batch", "batches"],
  beginner: ["new", "beginner", "first", "start", "intro", "foundation", "easy"],
  advanced: ["advanced", "level 2", "next", "already", "knows", "completed"],
};

const supplementalYoungGatesPrograms = [
  {
    id: "YG-CAMP-PYTHON-GRAPHICS",
    name: "Python With Graphics",
    type: "Camp",
    category: "Python, Graphics, Coding",
    level: "Beginner to Intermediate",
    age: "Young learners",
    url: "https://younggates.com/Camps/python-with-graphics/",
    block:
      "COURSE NAME: Python With Graphics\nCATEGORY: Python, Graphics, Coding\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants Python with visual output.\n- Parent wants a fun coding camp with graphics.\n- Student is moving from block coding to text-based coding.\n- Family wants an enjoyable project-based Python start.",
  },
  {
    id: "YG-CAMP-AI-PYTHON",
    name: "AI and Python Coding",
    type: "Camp",
    category: "Artificial Intelligence, Python, Coding",
    level: "Intermediate",
    age: "Young learners",
    url: "https://younggates.com/Camps/ai-and-python-coding/",
    block:
      "COURSE NAME: AI and Python Coding\nCATEGORY: Artificial Intelligence, Python, Coding\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants to combine AI and Python.\n- Student is curious about artificial intelligence projects.\n- Parent wants a future-ready coding path.\n- Family wants a practical AI coding camp.",
  },
  {
    id: "YG-CAMP-AI-YOUNG-CREATORS",
    name: "AI Young Creators Camp",
    type: "Camp",
    category: "Artificial Intelligence, Creativity, Project Learning",
    level: "Beginner friendly",
    age: "Young creators",
    url: "https://younggates.com/Camps/ai-young-creators-camp/",
    block:
      "COURSE NAME: AI Young Creators Camp\nCATEGORY: Artificial Intelligence, Creativity, Project Learning\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants a creative AI experience.\n- Parent wants AI without making the child feel pressured.\n- Student enjoys making projects, stories or creative outputs.\n- Family wants a gentle introduction to AI tools and ideas.",
  },
  {
    id: "YG-CAMP-AI-CHAMPIONS",
    name: "AI Champions Program",
    type: "Camp",
    category: "Artificial Intelligence, Advanced Learning",
    level: "Advanced",
    age: "Serious learners",
    url: "https://younggates.com/Camps/ai-champions-program/",
    block:
      "COURSE NAME: AI Champions Program\nCATEGORY: Artificial Intelligence, Advanced Learning\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants a serious AI learning track.\n- Student is ready for structured AI practice.\n- Parent wants a stronger future-focused program.\n- Family is looking for a high-commitment AI path.",
  },
  {
    id: "YG-CAMP-MICROSERVICES",
    name: "Microservices Bootcamp: Unlocking Scalable Solutions",
    type: "Camp",
    category: "Backend, Microservices, Scalable Systems",
    level: "Advanced",
    age: "Advanced learners",
    url: "https://younggates.com/Camps/microservices-bootcamp-unlocking-scalable-solutions/",
    block:
      "COURSE NAME: Microservices Bootcamp: Unlocking Scalable Solutions\nCATEGORY: Backend, Microservices, Scalable Systems\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants backend or scalable system concepts.\n- Student is interested in APIs, architecture or cloud-style development.\n- Parent wants a serious advanced coding path.\n- Family wants real-world software engineering exposure.",
  },
  {
    id: "YG-CAMP-CYBER-DEFENDER",
    name: "Cyber Defender: Foundations of Ethical Hacking & Data Security",
    type: "Camp",
    category: "Cybersecurity, Ethical Hacking, Data Security",
    level: "Intermediate to Advanced",
    age: "Security-curious learners",
    url: "https://younggates.com/Camps/cyber-defender-foundations-of-ethical-hacking-data-security/",
    block:
      "COURSE NAME: Cyber Defender: Foundations of Ethical Hacking & Data Security\nCATEGORY: Cybersecurity, Ethical Hacking, Data Security\nGOOD MATCH FOR PARENT QUERIES:\n- Learner is interested in cyber security or ethical hacking.\n- Parent wants safe, guided exposure to data security.\n- Student wants to understand online safety and security foundations.\n- Family wants a serious technology camp beyond basic coding.",
  },
  {
    id: "YG-PROGRAM-ACSL",
    name: "ACSL",
    type: "Competition Program",
    category: "Computer Science Contest Preparation",
    level: "Competition Track",
    age: "Contest-ready learners",
    url: "https://younggates.com/ACSL/",
    block:
      "COURSE NAME: ACSL\nCATEGORY: Computer Science Contest Preparation\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants computer science competitions.\n- Parent asks about ACSL, contests or olympiad-style preparation.\n- Student enjoys logic, problem solving and structured challenges.\n- Family wants a competition-focused computer science path.",
  },
  {
    id: "YG-PROGRAM-USACO",
    name: "USACO",
    type: "Competition Program",
    category: "Programming Contest Preparation",
    level: "Competition Track",
    age: "Advanced contest learners",
    url: "https://younggates.com/USACO/",
    block:
      "COURSE NAME: USACO\nCATEGORY: Programming Contest Preparation\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants competitive programming.\n- Parent asks about USACO or coding contests.\n- Student is ready for algorithmic problem solving.\n- Family wants a serious competition preparation path.",
  },
  {
    id: "YG-PROGRAM-INTERNSHIP",
    name: "Internship",
    type: "Program",
    category: "College Prep / Practical Experience",
    level: "Advanced",
    age: "Teen learners",
    url: "https://younggates.com/CollegePrep/Internship/",
    block:
      "COURSE NAME: Internship\nCATEGORY: College Prep / Practical Experience\nGOOD MATCH FOR PARENT QUERIES:\n- Learner wants a serious skill path with practical experience.\n- Parent wants a portfolio-style project or real-world exposure.\n- Student is ready for coding practice, homework and career-focused learning.\n- Family wants a guided path beyond beginner classes.",
  },
];

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
  const officialUrl = block.match(/OFFICIAL URL:\s*\n\s*(https?:\/\/[^\s)]+)/i)?.[1];
  const labelledUrl = block.match(/[A-Z][A-Z\s]+URL:\s*\n\s*(https?:\/\/[^\s)]+)/i)?.[1];
  return officialUrl || labelledUrl || block.match(/https?:\/\/[^\s)]+/i)?.[0] || "";
}

function getCourseUrl(course) {
  if (course.url) return course.url;
  const normalizedName = normalizeText(course.name);
  return courseUrlFallbacks.find(([key]) => normalizedName.includes(key))?.[1] || "https://www.younggates.com/Classes/";
}

function parseCourses(text) {
  const courses = text
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

  return courses.concat(
    supplementalYoungGatesPrograms.map((program) => ({
      ...program,
      searchable: normalizeText(`${program.name} ${program.category} ${program.level} ${program.age} ${program.block}`),
    }))
  );
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
  if (signals.includes("camps") && /project|hands-on|interactive|games|animation|app|web|python|ai/i.test(course.block)) score += 12;
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

function updateCharacterCount() {
  if (!characterCount || !courseInput) return;
  const count = courseInput.value.trim().length;
  characterCount.textContent = `${count} character${count === 1 ? "" : "s"}`;
}

function startCourseTypingPlaceholder() {
  if (!courseInput || !courseInput.dataset.courseTypingPlaceholder) return;
  const examples = courseInput.dataset.courseTypingPlaceholder
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
  if (!examples.length) return;

  let exampleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    if (document.activeElement === courseInput || courseInput.value.trim()) {
      window.setTimeout(tick, 700);
      return;
    }

    const current = examples[exampleIndex];
    if (!deleting) {
      charIndex += 1;
      courseInput.placeholder = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        deleting = true;
        window.setTimeout(tick, 1300);
        return;
      }
    } else {
      charIndex -= 1;
      courseInput.placeholder = current.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        exampleIndex = (exampleIndex + 1) % examples.length;
      }
    }

    window.setTimeout(tick, deleting ? 18 : 34);
  }

  tick();
}

function setSearchingState(isSearching) {
  const submitButton = courseForm?.querySelector('button[type="submit"]');
  if (!submitButton) return;
  submitButton.disabled = isSearching;
  submitButton.innerHTML = isSearching
    ? "<span>Mapping Course Fit</span><small>Reading requirement...</small>"
    : "<span>Find Best-Fit Course</span><small>AI-style recommendation</small>";
}

function showCoursePreview() {
  if (courseEmpty) courseEmpty.hidden = false;
  if (courseOutput) {
    courseOutput.hidden = true;
    courseOutput.innerHTML = "";
  }
}

function showCourseOutput(html) {
  if (courseEmpty) courseEmpty.hidden = true;
  if (courseOutput) {
    courseOutput.hidden = false;
    courseOutput.innerHTML = html;
  }
}

function getFitLabel(score) {
  if (score >= 80) return "Excellent match";
  if (score >= 55) return "Strong match";
  if (score >= 32) return "Possible match";
  return "Needs review";
}

function getCoursePopularity(courseName, score) {
  const normalized = normalizeText(courseName);
  if (/scratch|gaming|animation|block/.test(normalized)) {
    return { label: "Top rated beginner course", percent: 84, note: "Selected often by parents starting their child's coding journey." };
  }
  if (/python/.test(normalized)) {
    return { label: "Most preferred next step", percent: 78, note: "Chosen by learners moving from visual coding to real programming." };
  }
  if (/web|html|css|javascript/.test(normalized)) {
    return { label: "Project favorite", percent: 81, note: "Popular for students who want visible portfolio-style outcomes." };
  }
  if (/app|mobile/.test(normalized)) {
    return { label: "Practical project choice", percent: 76, note: "Preferred by learners who want to build something useful quickly." };
  }
  if (/sql|database/.test(normalized)) {
    return { label: "Career skill path", percent: 72, note: "Good fit for structured learners interested in data and queries." };
  }
  if (/camp|holiday|short/.test(normalized)) {
    return { label: "Current camp fit", percent: 80, note: "Useful for parents looking for a short-term learning sprint." };
  }
  return { label: "Recommended path", percent: Math.min(88, Math.max(68, 64 + Math.round(score / 4))), note: "Mapped from the learner requirement and course signals." };
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
    showCourseOutput(`
      <article class="course-fit-card">
        <span>No clear match found</span>
        <h2>Ask for more detail before recommending.</h2>
        <p>I could not confidently map this requirement to the current course knowledge base. Ask for the learner's grade, current coding exposure, goal, and preferred project type.</p>
      </article>
    `);
    return;
  }

  const best = matches[0];
  const bestScore = Math.min(99, Math.round(best.score));
  const bestPopularity = getCoursePopularity(best.name, bestScore);
  const bestCourseUrl = getCourseUrl(best);
  const whatsappText = encodeURIComponent(
    `Hello Tivoro, I used the Course Fit Bot. Requirement: ${query}. Best fit: ${best.name}. Please help me finalize the right batch.`
  );

  showCourseOutput(`
    <article class="course-fit-card is-best">
      <div class="course-fit-card-top">
        <span>Best fit</span>
        <em>${escapeHtml(getFitLabel(bestScore))}</em>
      </div>
      <h2>${escapeHtml(best.name)}</h2>
      <p>${escapeHtml(best.category || "Recommended from the course knowledge base")}</p>
      <div class="course-fit-score">
        <strong>${bestScore}%</strong>
        <small>match confidence</small>
        <i style="--fit:${bestScore}%"></i>
      </div>
      <div class="course-fit-insight-strip">
        <div><strong>${bestPopularity.percent}%</strong><span>parent-fit signal</span></div>
        <div><strong>${escapeHtml(bestPopularity.label)}</strong><span>${escapeHtml(bestPopularity.note)}</span></div>
      </div>
      <div class="course-fit-tags">
        ${(best.reasons.length ? best.reasons : ["course match"]).map((reason) => `<em>${escapeHtml(reason)}</em>`).join("")}
      </div>
      <h3>Why this course fits</h3>
      <ul>
        ${extractUsefulLines(best.block).map((line) => `<li>${escapeHtml(line.replace(/^[A-Z ]+:/, "").trim())}</li>`).join("")}
      </ul>
      <div class="course-fit-links">
        <a class="secondary-button course-page-link" href="${escapeHtml(bestCourseUrl)}" target="_blank" rel="noopener noreferrer">Check Course</a>
        <a class="primary-button" href="https://wa.me/${courseFitWhatsappNumber}?text=${whatsappText}" target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a>
      </div>
    </article>
    <div class="course-fit-alt-grid">
      ${matches
        .slice(1)
        .map(
          (match) => {
            const matchScore = Math.min(99, Math.round(match.score));
            const popularity = getCoursePopularity(match.name, matchScore);
            const courseUrl = getCourseUrl(match);
            const altWhatsappText = encodeURIComponent(
              `Hello Tivoro, I used the Course Fit Bot. Requirement: ${query}. I want help with this alternative course: ${match.name}. Please guide me.`
            );
            return `
            <article class="course-fit-card">
              <div class="course-fit-card-top">
                <span>Alternative</span>
                <em>${escapeHtml(getFitLabel(matchScore))}</em>
              </div>
              <h3>${escapeHtml(match.name)}</h3>
              <p>${escapeHtml(match.category || match.level || "Possible fit")}</p>
              <strong>${matchScore}% match</strong>
              <small class="course-fit-mini-signal">${popularity.percent}% parent-fit signal</small>
              <div class="course-fit-alt-actions">
                <a class="course-page-link-inline" href="${escapeHtml(courseUrl)}" target="_blank" rel="noopener noreferrer">Check Course</a>
                <a class="course-whatsapp-inline" href="https://wa.me/${courseFitWhatsappNumber}?text=${altWhatsappText}" target="_blank" rel="noopener noreferrer">WhatsApp Help</a>
              </div>
            </article>
          `;
          }
        )
        .join("")}
    </div>
  `);
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
  setSearchingState(true);
  showCourseOutput(`
    <div class="course-fit-loading">
      <span></span>
      <strong>Reading knowledge base</strong>
      <p>Mapping requirement, learner intent and course signals...</p>
    </div>
  `);
  window.setTimeout(() => {
    renderRecommendation(query);
    setSearchingState(false);
  }, 260);
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    courseInput.value = button.dataset.coursePrompt || "";
    updateCharacterCount();
    showCoursePreview();
    courseInput.focus();
  });
});

appendButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const addition = button.dataset.courseAppend || "";
    courseInput.value = `${courseInput.value.trim()}${addition}`.trim();
    button.classList.toggle("is-selected", courseInput.value.includes(addition.trim()));
    updateCharacterCount();
    showCoursePreview();
    courseInput.focus();
  });
});

courseInput?.addEventListener("input", () => {
  updateCharacterCount();
  if (!courseInput.value.trim() && courseOutput) {
    courseOutput.hidden = true;
    courseOutput.innerHTML = "";
  }
});
updateCharacterCount();
startCourseTypingPlaceholder();
loadKnowledgeBase();
