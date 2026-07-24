const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const bookingForm = document.querySelector(".booking-planner");
const bookingError = document.querySelector(".booking-error");
const finderForm = document.querySelector(".solution-finder");
const finderTabs = document.querySelectorAll("[data-audience]");
const finderStage = document.querySelector("[data-finder-stage]");
const finderGoal = document.querySelector("[data-finder-goal]");
const finderResult = document.querySelector("[data-finder-result]");
const guidedForms = document.querySelectorAll("[data-guided-form]");
const pathButtons = document.querySelectorAll("[data-path]");
const pathResult = document.querySelector("[data-path-result]");
const projectCards = document.querySelectorAll("[data-project]");
const projectPreview = document.querySelector("[data-project-preview]");
const builderStage = document.querySelector("[data-builder-stage]");
const builderGoal = document.querySelector("[data-builder-goal]");
const builderMode = document.querySelector("[data-builder-mode]");
const builderPace = document.querySelector("[data-builder-pace]");
const skillPicker = document.querySelector(".skill-picker");
const builderPreview = document.querySelector("[data-builder-preview]");
const builderWhatsapp = document.querySelector("[data-builder-whatsapp]");
const courseQuery = document.querySelector("[data-course-query]");
const courseMatchButton = document.querySelector("[data-course-match]");
const courseClearButton = document.querySelector("[data-course-clear]");
const courseMatchResult = document.querySelector("[data-course-result]");
const businessQuery = document.querySelector("[data-business-query]");
const businessMatchButton = document.querySelector("[data-business-match]");
const businessClearButton = document.querySelector("[data-business-clear]");
const businessMatchResult = document.querySelector("[data-business-result]");
const sampleCategory = document.querySelector("[data-sample-category]");
const sampleBudget = document.querySelector("[data-sample-budget]");
const samplePreview = document.querySelector("[data-sample-preview]");
const sampleWhatsapp = document.querySelector("[data-sample-whatsapp]");
const templateFilters = document.querySelectorAll("[data-template-filter]");
const templateBudget = document.querySelector("[data-template-budget]");
const templateCards = document.querySelectorAll("[data-template-card]");
const healthForm = document.querySelector("[data-health-form]");
const healthResult = document.querySelector("[data-health-result]");
const trustForm = document.querySelector("[data-trust-form]");
const trustResult = document.querySelector("[data-trust-result]");
const websitePricingBuilder = document.querySelector("[data-website-pricing]");
const websiteExtraPages = document.querySelector("[data-website-extra-pages]");
const websiteFeatureInputs = document.querySelectorAll("[data-website-feature]");
const websiteTotal = document.querySelector("[data-website-total]");
const websiteSummary = document.querySelector("[data-website-summary]");
const websiteBreakdown = document.querySelector("[data-website-breakdown]");
const websitePricingWhatsapp = document.querySelector("[data-website-pricing-whatsapp]");
const quotePresetButtons = document.querySelectorAll("[data-quote-preset]");
const mapperTotal = document.querySelector("[data-mapper-total]");
const mapperSummary = document.querySelector("[data-mapper-summary]");
const mapperSelected = document.querySelector("[data-mapper-selected]");
const roleMatcherForm = document.querySelector("[data-role-matcher]");
const roleSkillPicker = document.querySelector(".role-skill-picker");
const roleResult = document.querySelector("[data-role-result]");
const ambassadorForm = document.querySelector("[data-ambassador-form]");
const ambassadorResult = document.querySelector("[data-ambassador-result]");
const decisionForms = document.querySelectorAll("[data-decision-form]");
const profileTriggers = document.querySelectorAll("[data-profile-select]");
const profileSections = document.querySelectorAll("[data-profile-section]");
const profileNavLinks = document.querySelectorAll("[data-profile-nav]");
const profileTitle = document.querySelector("[data-profile-title]");
const profileText = document.querySelector("[data-profile-text]");
const whatsappNumber = "918826758881";
const profileStorageKey = "tivoroProfile";
const profileQueryKey = "profile";
let businessMapperTimer = null;
const tivoroSheetEndpoints = {
  parent: "",
  child: "",
  business: "",
  ...(window.tivoroSheetEndpoints || {}),
};
const defaultBookingGoogleForm = {
  endpoint: "",
  pendingKey: "tivoroPendingBookingLead",
  entries: {
    name: "",
    mobile: "",
    userType: "",
    requirement: "",
    support: "",
  },
};
const tivoroBookingGoogleForm = {
  ...defaultBookingGoogleForm,
  ...(window.tivoroGoogleForms?.booking || {}),
  entries: {
    ...defaultBookingGoogleForm.entries,
    ...(window.tivoroGoogleForms?.booking?.entries || {}),
  },
};
const defaultParentCourseGoogleForm = {
  endpoint: "",
  pendingKey: "tivoroPendingParentCourseLead",
  entries: {
    parentName: "",
    mobile: "",
    childName: "",
    stage: "",
    confidence: "",
    priority: "",
    support: "",
  },
};
const tivoroParentCourseGoogleForm = {
  ...defaultParentCourseGoogleForm,
  ...(window.tivoroGoogleForms?.parentCourseFinder || {}),
  entries: {
    ...defaultParentCourseGoogleForm.entries,
    ...(window.tivoroGoogleForms?.parentCourseFinder?.entries || {}),
  },
};
const defaultStudentCourseGoogleForm = {
  endpoint: "",
  pendingKey: "tivoroPendingStudentCourseLead",
  entries: {
    studentName: "",
    mobile: "",
    stage: "",
    skill: "",
    interest: "",
    goal: "",
    support: "",
  },
};
const tivoroStudentCourseGoogleForm = {
  ...defaultStudentCourseGoogleForm,
  ...(window.tivoroGoogleForms?.studentCourseFinder || {}),
  entries: {
    ...defaultStudentCourseGoogleForm.entries,
    ...(window.tivoroGoogleForms?.studentCourseFinder?.entries || {}),
  },
};
const defaultCollegeCareerGoogleForm = {
  endpoint: "",
  pendingKey: "tivoroPendingCollegeCareerLead",
  entries: {
    studentName: "",
    mobile: "",
    email: "",
    year: "",
    branch: "",
    confidence: "",
    interest: "",
    workStyle: "",
    strength: "",
    goal: "",
    selectedSkills: "",
    recommendedRole: "",
  },
};
const tivoroCollegeCareerGoogleForm = {
  ...defaultCollegeCareerGoogleForm,
  ...(window.tivoroGoogleForms?.collegeCareerMatcher || {}),
  entries: {
    ...defaultCollegeCareerGoogleForm.entries,
    ...(window.tivoroGoogleForms?.collegeCareerMatcher?.entries || {}),
  },
};
const defaultAmbassadorChallengeGoogleForm = {
  endpoint: "https://docs.google.com/forms/d/e/1FAIpQLSffo6lJVX3JwTV-0m4Z6S7RGYAOdfT_HAFTphi7jKrnl8GpxA/formResponse",
  pendingKey: "tivoroPendingAmbassadorChallengeLead",
  entries: {
    applicantName: "entry.1396932868",
    mobile: "entry.506451100",
    email: "entry.218040165",
    campusName: "entry.1353740430",
    motivation: "entry.1297112669",
    communication: "entry.209695107",
    initiative: "entry.1818290488",
    quality: "entry.1243999218",
    digital: "entry.474599241",
    task: "entry.342617103",
  },
};
const tivoroAmbassadorChallengeGoogleForm = {
  ...defaultAmbassadorChallengeGoogleForm,
  ...(window.tivoroGoogleForms?.ambassadorChallenge || {}),
  entries: {
    ...defaultAmbassadorChallengeGoogleForm.entries,
    ...(window.tivoroGoogleForms?.ambassadorChallenge?.entries || {}),
  },
};

function recommendedPathBlock({ title, copy, whatsappHref, detailHref, detailText }) {
  return `
    <div class="recommended-path-card">
      <div>
        <span>Recommended Path</span>
        <strong>${title || "Your path is ready. Choose the next step that feels right."}</strong>
        <p>${copy || "For personal guidance, move to WhatsApp. If you want to understand the options first, explore the detailed page."}</p>
      </div>
      <div class="recommended-path-actions">
        <a class="primary-button" href="${whatsappHref}" target="_blank" rel="noopener noreferrer">Move to WhatsApp</a>
        <a class="secondary-button" href="${detailHref || "index.html"}">${detailText || "Explore Programs"}</a>
      </div>
    </div>
  `;
}

function formDataToObject(data) {
  return [...data.entries()].reduce((payload, [key, value]) => {
    payload[key] = value;
    return payload;
  }, {});
}

function initTivoroMotion() {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  document.documentElement.classList.add("tivoro-motion-ready");
  if (reduceMotion) {
    document.documentElement.classList.add("tivoro-reduced-motion");
    return;
  }

  const loader = document.createElement("div");
  loader.className = "tivoro-page-loader";
  loader.innerHTML = '<div><span>T</span><strong>Tivoro</strong><small>Building your path</small></div>';
  document.body.prepend(loader);
  window.setTimeout(() => {
    loader.classList.add("is-done");
    window.setTimeout(() => loader.remove(), 520);
  }, 620);

  const revealTargets = document.querySelectorAll([
    ".section",
    ".page-hero",
    ".career-hero",
    ".profile-hero",
    ".ai-chat-hero",
    ".ai-return-card",
    ".codelab-route-grid a",
    ".tivoro-trust-grid article",
    ".career-role-grid article",
    ".career-proof-grid article",
    ".career-ascent-steps article",
    ".internship-outcome-grid article",
    ".internship-pricing-grid article",
    ".quote-home-flow article",
    ".choice-pricing-grid article",
    ".price-builder-steps article",
    ".feature-price-grid label"
  ].join(","));

  revealTargets.forEach((element, index) => {
    element.dataset.motionReveal = "";
    element.style.setProperty("--motion-delay", `${Math.min(index % 8, 6) * 55}ms`);
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-motion-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.02, rootMargin: "0px 0px -2% 0px" })
    : null;

  revealTargets.forEach((element) => {
    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-motion-visible");
    }
  });

  const glowTargets = document.querySelectorAll([
    ".codelab-ai-panel",
    ".ai-chat-card",
    ".career-hero-panel",
    ".business-mapper-hero",
    ".trust-score-panel",
    ".website-price-builder",
    ".ambassador-challenge",
    ".impact-slide",
    ".upcoming-project-card",
    ".recommended-path-card"
  ].join(","));

  glowTargets.forEach((element) => {
    element.classList.add("motion-pointer-glow");
    if (!element.querySelector(":scope > .tivoro-pointer-light")) {
      element.insertAdjacentHTML("afterbegin", '<span class="tivoro-pointer-light" aria-hidden="true"></span>');
    }
  });

  if (window.matchMedia?.("(pointer: fine)").matches) {
    glowTargets.forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
      });
    });
  }

  const countTargets = document.querySelectorAll(".web-stats-row strong, .speed-grid strong, .career-signal-grid strong");
  countTargets.forEach((element) => {
    const raw = element.textContent.trim();
    const match = raw.match(/^(\d+)(.*)$/);
    if (!match) return;
    element.dataset.motionCount = match[1];
    element.dataset.motionSuffix = match[2] || "";
    element.textContent = `0${element.dataset.motionSuffix}`;
  });

  const animateCount = (element) => {
    const target = Number(element.dataset.motionCount || 0);
    const suffix = element.dataset.motionSuffix || "";
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  document.querySelectorAll("[data-motion-count]").forEach((element, index) => {
    window.setTimeout(() => animateCount(element), 260 + index * 90);
  });
}

async function submitTivoroLead(type, payload) {
  const endpoint = tivoroSheetEndpoints[type];
  if (!endpoint) return false;
  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        leadType: type,
        sourcePage: window.location.pathname.split("/").pop() || "index.html",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });
    return true;
  } catch (error) {
    console.warn("Tivoro lead submission failed", error);
    return false;
  }
}

async function submitBookingToGoogleForm(data) {
  if (!tivoroBookingGoogleForm.endpoint) return false;

  const payload = new URLSearchParams();
  const entryValues = {
    name: data.get("bookingStudent"),
    mobile: data.get("bookingMobile"),
    userType: data.get("bookingLevel"),
    requirement: data.get("bookingInterest"),
    support: data.get("bookingMode"),
  };

  Object.entries(tivoroBookingGoogleForm.entries).forEach(([key, entryId]) => {
    if (!entryId) return;
    payload.set(entryId, String(entryValues[key] || "").trim());
  });

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(tivoroBookingGoogleForm.pendingKey, payload.toString());
    } catch (error) {
      console.warn("Tivoro booking lead could not be saved for later submission.", error);
    }
    return false;
  }

  try {
    await fetch(tivoroBookingGoogleForm.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    return true;
  } catch (error) {
    console.warn("Tivoro booking Google Form submission failed", error);
    return false;
  }
}

function submitPendingBookingGoogleForm() {
  if (!tivoroBookingGoogleForm.endpoint || window.location.protocol === "file:") return;
  const pendingPayload = localStorage.getItem(tivoroBookingGoogleForm.pendingKey);
  if (!pendingPayload) return;

  fetch(tivoroBookingGoogleForm.endpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(tivoroBookingGoogleForm.pendingKey))
    .catch((error) => {
      console.warn("Pending Tivoro booking lead could not be submitted.", error);
    });
}

async function submitParentCourseToGoogleForm(data) {
  if (!tivoroParentCourseGoogleForm.endpoint) return false;

  const payload = new URLSearchParams();
  Object.entries(tivoroParentCourseGoogleForm.entries).forEach(([key, entryId]) => {
    if (!entryId) return;
    payload.set(entryId, String(data.get(key) || "").trim());
  });

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(tivoroParentCourseGoogleForm.pendingKey, payload.toString());
    } catch (error) {
      console.warn("Tivoro parent course lead could not be saved for later submission.", error);
    }
    return false;
  }

  try {
    await fetch(tivoroParentCourseGoogleForm.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    return true;
  } catch (error) {
    console.warn("Tivoro parent course Google Form submission failed", error);
    return false;
  }
}

function submitPendingParentCourseGoogleForm() {
  if (!tivoroParentCourseGoogleForm.endpoint || window.location.protocol === "file:") return;
  const pendingPayload = localStorage.getItem(tivoroParentCourseGoogleForm.pendingKey);
  if (!pendingPayload) return;

  fetch(tivoroParentCourseGoogleForm.endpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(tivoroParentCourseGoogleForm.pendingKey))
    .catch((error) => {
      console.warn("Pending Tivoro parent course lead could not be submitted.", error);
    });
}

async function submitStudentCourseToGoogleForm(data) {
  if (!tivoroStudentCourseGoogleForm.endpoint) return false;

  const payload = new URLSearchParams();
  Object.entries(tivoroStudentCourseGoogleForm.entries).forEach(([key, entryId]) => {
    if (!entryId) return;
    payload.set(entryId, String(data.get(key) || "").trim());
  });

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(tivoroStudentCourseGoogleForm.pendingKey, payload.toString());
    } catch (error) {
      console.warn("Tivoro student course lead could not be saved for later submission.", error);
    }
    return false;
  }

  try {
    await fetch(tivoroStudentCourseGoogleForm.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    return true;
  } catch (error) {
    console.warn("Tivoro student course Google Form submission failed", error);
    return false;
  }
}

function submitPendingStudentCourseGoogleForm() {
  if (!tivoroStudentCourseGoogleForm.endpoint || window.location.protocol === "file:") return;
  const pendingPayload = localStorage.getItem(tivoroStudentCourseGoogleForm.pendingKey);
  if (!pendingPayload) return;

  fetch(tivoroStudentCourseGoogleForm.endpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(tivoroStudentCourseGoogleForm.pendingKey))
    .catch((error) => {
      console.warn("Pending Tivoro student course lead could not be submitted.", error);
    });
}

function careerRoleRecommendationForGoogleForm(data) {
  if (!Array.isArray(careerRoleData)) return "";
  const answers = {
    branch: String(data.get("branch") || ""),
    confidence: String(data.get("confidence") || ""),
    interest: String(data.get("interest") || ""),
    workStyle: String(data.get("workStyle") || ""),
    strength: String(data.get("strength") || ""),
    goal: String(data.get("goal") || ""),
  };
  const skills = selectedRoleSkills();
  const top = careerRoleData
    .map((role) => ({ ...role, score: scoreCareerRole(role, answers, skills) }))
    .sort((a, b) => b.score - a.score)[0];
  return top ? `${top.title} (${top.score}%)` : "";
}

async function submitCollegeCareerToGoogleForm(data) {
  if (!tivoroCollegeCareerGoogleForm.endpoint) return false;

  const entryValues = {
    ...formDataToObject(data),
    selectedSkills: selectedRoleSkills().join(", "),
    recommendedRole: careerRoleRecommendationForGoogleForm(data),
  };
  const payload = new URLSearchParams();
  Object.entries(tivoroCollegeCareerGoogleForm.entries).forEach(([key, entryId]) => {
    if (!entryId) return;
    payload.set(entryId, String(entryValues[key] || "").trim());
  });

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(tivoroCollegeCareerGoogleForm.pendingKey, payload.toString());
    } catch (error) {
      console.warn("Tivoro college career lead could not be saved for later submission.", error);
    }
    return false;
  }

  try {
    await fetch(tivoroCollegeCareerGoogleForm.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    return true;
  } catch (error) {
    console.warn("Tivoro college career Google Form submission failed", error);
    return false;
  }
}

function submitPendingCollegeCareerGoogleForm() {
  if (!tivoroCollegeCareerGoogleForm.endpoint || window.location.protocol === "file:") return;
  const pendingPayload = localStorage.getItem(tivoroCollegeCareerGoogleForm.pendingKey);
  if (!pendingPayload) return;

  fetch(tivoroCollegeCareerGoogleForm.endpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(tivoroCollegeCareerGoogleForm.pendingKey))
    .catch((error) => {
      console.warn("Pending Tivoro college career lead could not be submitted.", error);
    });
}

async function submitAmbassadorChallengeToGoogleForm(data) {
  if (!tivoroAmbassadorChallengeGoogleForm.endpoint) return false;

  const payload = new URLSearchParams();
  Object.entries(tivoroAmbassadorChallengeGoogleForm.entries).forEach(([key, entryId]) => {
    if (!entryId) return;
    payload.set(entryId, String(data.get(key) || "").trim());
  });

  if (window.location.protocol === "file:") {
    try {
      localStorage.setItem(tivoroAmbassadorChallengeGoogleForm.pendingKey, payload.toString());
    } catch (error) {
      console.warn("Tivoro ambassador challenge lead could not be saved for later submission.", error);
    }
    return false;
  }

  try {
    await fetch(tivoroAmbassadorChallengeGoogleForm.endpoint, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    return true;
  } catch (error) {
    console.warn("Tivoro ambassador challenge Google Form submission failed", error);
    return false;
  }
}

function submitPendingAmbassadorChallengeGoogleForm() {
  if (!tivoroAmbassadorChallengeGoogleForm.endpoint || window.location.protocol === "file:") return;
  const pendingPayload = localStorage.getItem(tivoroAmbassadorChallengeGoogleForm.pendingKey);
  if (!pendingPayload) return;

  fetch(tivoroAmbassadorChallengeGoogleForm.endpoint, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(tivoroAmbassadorChallengeGoogleForm.pendingKey))
    .catch((error) => {
      console.warn("Pending Tivoro ambassador challenge Google Form submission failed", error);
    });
}

function leadTypeForGuidedForm(type) {
  if (type === "business") return "business";
  if (type === "parent") return "parent";
  return "child";
}

function leadTypeForBooking(level) {
  if (String(level).toLowerCase().includes("business")) return "business";
  if (String(level).toLowerCase().includes("parent")) return "parent";
  return "child";
}

const tivoroBotQuickQuestions = [
  "Start Tivoro AI",
  "I am a parent",
  "I am a student",
  "I am a business owner",
  "Campus ambassador",
  "Website pricing",
  "Show detailed pages",
  "Talk on WhatsApp",
];

const tivoroBotAnswers = [
  {
    keywords: ["child", "parent", "kid", "grade", "school", "course", "coding", "scratch", "python", "app"],
    answer:
      "For parents, the cleanest start is Tivoro AI or the Parent Course Finder on the Parents page. It asks about the child, grade, confidence, priority and preferred class style, then suggests whether to start with Scratch, Python, AI, web apps, projects or counselling first.",
  },
  {
    keywords: ["start tivoro", "tivoro", "ai guide", "ai advisor", "where should i start", "not sure", "confused"],
    answer:
      "Start with Tivoro AI. It is the fastest route for parents, students and businesses: answer a few questions, get a personalized recommendation, then choose WhatsApp guidance or the detailed page.",
  },
  {
    keywords: ["student", "college", "internship", "project", "final year", "fyp", "resume", "interview", "career", "role", "python", "ai champions", "teen", "chatbot", "agent", "prompt", "gemini"],
    answer:
      "For students, use the Students page for coding, AI, Python, JavaScript, C/C++/Java, live projects, Future Role Finder and interview support. College students should open the Career page for AI-Powered Live Product Development Internships, campus ambassador roles, project internships and portfolio-building tracks.",
  },
  {
    keywords: ["career", "future leaders", "campus", "ambassador", "apply", "applicant", "challenge", "college captain", "student partner", "growth partner", "creator intern", "project intern", "business development intern"],
    answer:
      "Open the Career page for Tivoro Future Leaders Network. College students can apply as Campus Ambassador, Student Growth Partner, Workshop Coordinator, Content Creator Intern, Tech Project Intern or Business Development Intern. The page includes a 15-minute ambassador readiness challenge and a WhatsApp result flow.",
  },
  {
    keywords: ["business", "website", "site", "salon", "clinic", "store", "restaurant", "cafe", "real estate", "ngo", "startup"],
    answer:
      "For business owners, use Tivoro AI or the Business page. You can describe your business need, see recommended website features, build a live price estimate, view sample website categories, check website readiness and explore Digital Trust Score, SEO, WhatsApp leads and automation.",
  },
  {
    keywords: ["website checker", "readiness", "seo", "meta", "audit", "health", "score", "scan", "digital trust score", "trust score", "google review", "business trust"],
    answer:
      "The Business page has two useful tools: Website Readiness Checker for live website basics like SEO, headings, images and trust signals, and Digital Trust Score for understanding digital confidence before spending on marketing.",
  },
  {
    keywords: ["social", "instagram", "facebook", "marketing", "lead", "whatsapp", "ads", "growth"],
    answer:
      "For growth, we can support Instagram/Facebook handling, content planning, WhatsApp enquiry journeys, landing pages, basic SEO, lead forms and practical campaign ideas. We do not believe in pressure follow-ups; we move forward only when the customer feels the service is the right fit.",
  },
  {
    keywords: ["school", "college", "institution", "workshop", "camp", "hackathon", "club"],
    answer:
      "For schools and colleges, open the Institutions page. Tivoro can support AI clubs, coding workshops, hackathons, camps, project sprints, teacher/team upskilling, digital admission systems and student ambassador outreach.",
  },
  {
    keywords: ["price", "pricing", "cost", "budget", "package", "fee", "quote", "estimate", "add-on", "addon"],
    answer:
      "For school learning batches, 1:1 classes are Rs 4,000 for 8 sessions and group classes are Rs 2,000-Rs 3,000 for 8 sessions. For college internships, Career page tracks start from Rs 1,999-Rs 2,999 for Starter and go up to Rs 24,999-Rs 34,999 for Career Accelerator. For websites, the Business page has a live quote builder starting at Rs 7,999.",
  },
  {
    keywords: ["book", "call", "slot", "counselling", "guidance", "talk", "contact", "whatsapp"],
    answer:
      "Use Book Slot on the homepage to share your details and continue on WhatsApp. Tivoro supports course guidance, parent course finder, student path finder, college career matcher, ambassador applications, business websites, internships, workshops and custom digital growth plans.",
  },
  {
    keywords: ["india", "usa", "singapore", "middle east", "online", "location", "rehan"],
    answer:
      "Tivoro is powered by Kidsverse Private Limited, Rehan, Himachal Pradesh, and we already teach learners across India, the US, Singapore and the Middle East through online guidance, live classes and project support.",
  },
];

const pathData = {
  young: {
    label: "Recommended path",
    title: "Scratch, Scratch Jr & App Starter",
    text: "Start with block-based coding, creative logic, simple app thinking and a fun demo project.",
    tags: ["Scratch Jr", "Scratch", "App building"],
  },
  teen: {
    label: "Recommended path",
    title: "Python, JavaScript & AI Builder",
    text: "Move from coding foundations into websites, apps, chatbots, AI tools and presentation-ready projects.",
    tags: ["Python", "JavaScript", "AI"],
  },
  college: {
    label: "Career-focused path",
    title: "Internship & Live Project Lab",
    text: "Build portfolio projects, improve GitHub, prepare for interviews and learn to explain work with confidence.",
    tags: ["Live project", "GitHub", "Interview prep"],
  },
  business: {
    label: "Growth-focused path",
    title: "Digital Presence & AI Systems",
    text: "Create websites, social media systems, WhatsApp leads, dashboards, chatbots and automation for real business needs.",
    tags: ["Website", "Leads", "AI automation"],
  },
};

const profileCopy = {
  student: {
    title: "Your student decision journey is ready",
    text:
      "Start with Future Skill Mission Finder. Tivoro will recommend the right coding, AI, project, portfolio or internship path before you choose a course.",
  },
  parent: {
    title: "Your parent decision journey is ready",
    text:
      "Start with Child Growth Plan. Tivoro will understand your child’s age, need, learning style and time before recommending the right support.",
  },
  business: {
    title: "Your business decision journey is ready",
    text:
      "Start with Business Growth Roadmap. Tivoro will map your business type, goal and stage to the right website, lead and automation direction.",
  },
};

function isValidProfile(profile) {
  return Boolean(profileCopy[profile]);
}

function getProfileFromUrl() {
  try {
    const profile = new URLSearchParams(window.location.search).get(profileQueryKey) || "";
    return isValidProfile(profile) ? profile : "";
  } catch (error) {
    return "";
  }
}

function getStoredProfile() {
  try {
    const profile = localStorage.getItem(profileStorageKey) || "";
    return isValidProfile(profile) ? profile : "";
  } catch (error) {
    return "";
  }
}

function storeProfile(profile) {
  if (!isValidProfile(profile)) return;
  try {
    localStorage.setItem(profileStorageKey, profile);
  } catch (error) {
    // Local storage can be unavailable in some private browser contexts.
  }
}

function isInternalProfileLink(link) {
  if (!link || link.hasAttribute("download") || link.dataset.profileSelect || link.dataset.profileFixed) return false;
  const rawHref = link.getAttribute("href") || "";
  if (!rawHref || rawHref.startsWith("#")) return false;
  if (/^(tel|mailto|sms|whatsapp):/i.test(rawHref)) return false;
  try {
    const url = new URL(rawHref, window.location.href);
    if (!["file:", "http:", "https:"].includes(url.protocol)) return false;
    if (url.protocol === "file:" && window.location.protocol === "file:") return true;
    return url.origin === window.location.origin;
  } catch (error) {
    return false;
  }
}

function buildProfileUrl(href, profile) {
  if (!isValidProfile(profile)) return href;
  try {
    const url = new URL(href, window.location.href);
    url.searchParams.set(profileQueryKey, profile);
    if (url.protocol === "file:") return `${url.pathname}${url.search}${url.hash}`;
    return url.href;
  } catch (error) {
    return href;
  }
}

function syncProfileLinks(profile) {
  if (!isValidProfile(profile)) return;
  document.querySelectorAll("a[href]").forEach((link) => {
    if (!isInternalProfileLink(link)) return;
    link.href = buildProfileUrl(link.getAttribute("href") || link.href, profile);
  });
}

function inferProfileFromPage() {
  const page = window.location.pathname.split("/").pop();
  if (page === "students.html" || page === "students.txt" || page === "career.html" || page === "career.txt") return "student";
  if (page === "parents.html" || page === "parents.txt") return "parent";
  if (page === "business.html" || page === "business.txt" || page === "institutions.html" || page === "institutions.txt") return "business";
  return "";
}

function profileDestination(profile) {
  if (profile === "student") return "students.html";
  if (profile === "parent") return "parents.html";
  if (profile === "business") return "business.html";
  return "index.html";
}

function applyProfileNavigation(profile) {
  if (!isValidProfile(profile)) return;
  profileNavLinks.forEach((link) => {
    const allowed = (link.dataset.profileNav || "").split(/\s+/);
    link.hidden = !(allowed.includes("all") || allowed.includes(profile));
  });
}

function applyProfile(profile) {
  if (!isValidProfile(profile)) return;
  storeProfile(profile);
  document.body.dataset.activeProfile = profile;

  profileTriggers.forEach((trigger) => {
    trigger.classList.toggle("is-selected", trigger.dataset.profileSelect === profile);
  });

  applyProfileNavigation(profile);
  syncProfileLinks(profile);

  profileSections.forEach((section) => {
    const allowed = (section.dataset.profileSection || "").split(/\s+/);
    const shouldShow = allowed.includes("all") || allowed.includes(profile);
    section.hidden = !shouldShow;
  });

  if (profileTitle) profileTitle.textContent = profileCopy[profile].title;
  if (profileText) profileText.textContent = profileCopy[profile].text;
}

profileSections.forEach((section) => {
  section.hidden = true;
});
document.body.classList.add("profile-filter-ready");

const activeProfile = getProfileFromUrl() || getStoredProfile() || inferProfileFromPage();
if (activeProfile) {
  applyProfile(activeProfile);
}

profileTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const profile = trigger.dataset.profileSelect;
    const hasHomeProfilePanel = Boolean(document.querySelector("#profile-content"));
    const isHeaderToggle = trigger.closest(".top-profile-toggle");
    applyProfile(profile);
    if (hasHomeProfilePanel) {
      document.querySelector("#profile-content")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (isHeaderToggle) {
      window.location.href = buildProfileUrl(profileDestination(profile), profile);
    }
  });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || !isInternalProfileLink(link)) return;
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target) return;
  const profile = document.body.dataset.activeProfile || getStoredProfile() || getProfileFromUrl();
  if (!isValidProfile(profile)) return;
  const nextHref = buildProfileUrl(link.getAttribute("href") || link.href, profile);
  if (nextHref === link.getAttribute("href")) return;
  event.preventDefault();
  window.location.href = nextHref;
});

const projectData = {
  scratch: {
    title: "Game Builder",
    text: "Students design a simple game, add rules, scoring, characters and a short demo presentation.",
    bars: ["82%", "58%", "74%"],
  },
  app: {
    title: "Mini App",
    text: "Students plan screens, buttons, user flow and logic, then present how the app solves a small problem.",
    bars: ["64%", "86%", "70%"],
  },
  web: {
    title: "Portfolio Website",
    text: "Students build a personal website with sections, styling, interaction and a clear project story.",
    bars: ["78%", "66%", "92%"],
  },
  ai: {
    title: "AI Chatbot",
    text: "Students create a chatbot with prompt design, personality, memory ideas and a practical use case.",
    bars: ["88%", "72%", "80%"],
  },
};

const builderDurations = {
  "Light pace": "6-8 weeks",
  "Balanced pace": "8-10 weeks",
  "Intensive pace": "4-6 weeks",
};

const builderSkillOptions = {
  "Grade 3-5 student": ["Scratch Jr", "Scratch", "Block-based coding", "App building basics", "Logic games", "Creative coding"],
  "Grade 6-8 student": ["Scratch advanced", "App building", "Python basics", "JavaScript basics", "Web basics", "AI chatbot basics"],
  "Grade 9-12 student": ["Python", "JavaScript", "Web Development", "AI Chatbots", "AI Agents", "C", "C++", "Java"],
  "College student": ["C", "C++", "Java", "Python", "JavaScript", "Web Development", "AI Agents", "Live projects", "GitHub portfolio", "Interview prep"],
};

const defaultBuilderSkills = {
  "Grade 3-5 student": ["Scratch Jr", "Scratch"],
  "Grade 6-8 student": ["Python basics", "App building"],
  "Grade 9-12 student": ["Python", "AI Chatbots"],
  "College student": ["Live projects", "GitHub portfolio"],
};

const courseMapperCatalog = [
  {
    title: "Scratch Jr Creative Starter",
    stages: ["Grade 3-5 student"],
    skills: ["Scratch Jr", "Scratch", "Creative coding"],
    goal: "Build confidence with technology",
    keywords: ["scratch jr", "small child", "beginner", "first coding", "creative", "animation", "story", "grade 3", "class 3", "grade 4", "class 4", "grade 5", "class 5"],
    outcome: "A gentle starter path for young learners who need confidence, visual coding and creative digital projects.",
  },
  {
    title: "Block Coding & Game Builder",
    stages: ["Grade 3-5 student", "Grade 6-8 student"],
    skills: ["Block-based coding", "Scratch", "Logic games"],
    goal: "Build school-ready projects",
    keywords: ["scratch", "block", "game", "games", "logic", "puzzle", "animation", "screen time", "computer basics"],
    outcome: "Best for students who enjoy games and need a structured way to learn logic through visual coding.",
  },
  {
    title: "App Building Starter",
    stages: ["Grade 3-5 student", "Grade 6-8 student"],
    skills: ["App building basics", "App building", "Logic games"],
    goal: "Build school-ready projects",
    keywords: ["app", "mobile app", "application", "android", "build app", "app building", "buttons", "screens"],
    outcome: "Students learn app thinking, screen flow, buttons, logic and presentation through small app-style projects.",
  },
  {
    title: "Python Foundations Track",
    stages: ["Grade 6-8 student", "Grade 9-12 student", "College student"],
    skills: ["Python basics", "Python", "Logic games"],
    goal: "Create portfolio projects",
    keywords: ["python", "coding language", "programming", "automation", "problem solving", "logic"],
    outcome: "A practical Python path for syntax confidence, mini projects and step-by-step programming maturity.",
  },
  {
    title: "Python + AI Starter",
    stages: ["Grade 6-8 student"],
    skills: ["Python basics", "AI chatbot basics", "App building"],
    goal: "Build school-ready projects",
    keywords: ["python ai", "ai", "artificial intelligence", "chatbot", "gemini", "prompt", "class 6", "grade 6", "class 7", "grade 7", "class 8", "grade 8"],
    outcome: "A balanced middle-school path with Python basics, safe AI activities, chatbot ideas and small project demos.",
  },
  {
    title: "JavaScript & Web Builder",
    stages: ["Grade 6-8 student", "Grade 9-12 student", "College student"],
    skills: ["JavaScript basics", "JavaScript", "Web basics", "Web Development"],
    goal: "Create portfolio projects",
    keywords: ["javascript", "js", "website", "web", "html", "css", "frontend", "web development", "portfolio website"],
    outcome: "A web project path where students build interactive pages, responsive layouts and portfolio-ready work.",
  },
  {
    title: "AI Champions Program",
    stages: ["Grade 9-12 student"],
    skills: ["Python", "AI Chatbots", "AI Agents"],
    goal: "Create portfolio projects",
    keywords: ["ai", "artificial intelligence", "chatgpt", "gemini", "prompt", "prompt engineering", "chatbot", "agent", "llm", "teen"],
    outcome: "A teen-friendly AI path with Python basics, prompt engineering, chatbots, memory ideas, agents and Demo Day.",
  },
  {
    title: "Programming Foundation Track",
    stages: ["Grade 9-12 student", "College student"],
    skills: ["C", "C++", "Java"],
    goal: "Create portfolio projects",
    keywords: ["c language", "c++", "cpp", "java", "dsa", "data structure", "algorithm", "competitive coding", "school computer"],
    outcome: "Best for older students who need strong language foundations, syntax confidence and problem-solving practice.",
  },
  {
    title: "College Live Project & Internship Track",
    stages: ["College student"],
    skills: ["Live projects", "GitHub portfolio", "Interview prep"],
    goal: "Prepare for internship / interviews",
    keywords: ["college", "btech", "bca", "mca", "internship", "final year", "major project", "minor project", "resume", "interview", "placement", "github", "live project"],
    outcome: "A career-focused track with live project guidance, documentation, GitHub portfolio and interview explanation practice.",
  },
  {
    title: "AI App Developer Track",
    stages: ["College student", "Grade 9-12 student"],
    skills: ["Python", "AI Agents", "Web Development", "Live projects"],
    goal: "Create portfolio projects",
    keywords: ["ai app", "ai project", "automation", "api", "agent", "startup idea", "build product", "saas", "real project"],
    outcome: "A future-ready project path for learners who want to build AI-powered apps with practical use cases.",
  },
  {
    title: "Digital Growth & Website Starter",
    stages: ["College student"],
    skills: ["Web Development", "JavaScript", "Live projects"],
    goal: "Create portfolio projects",
    keywords: ["digital marketing", "website service", "client project", "freelancing", "business website", "social media", "seo", "lead generation"],
    outcome: "Good for college students who want practical website, digital growth and client-facing project skills.",
  },
];

const businessBudgetSamples = {
  "Starter Website": {
    label: "Starter website direction",
    scope: "A clean one-page website for trust, basic enquiries and Google sharing.",
    pages: "1 page",
    features: ["Mobile-friendly landing page", "WhatsApp enquiry button", "Google map / location", "Basic SEO setup"],
    timeline: "Quick launch",
  },
  "Growth Website": {
    label: "Growth website direction",
    scope: "A multi-section website made for enquiries, content, offers and social proof.",
    pages: "4-6 sections",
    features: ["Service / program pages", "Lead form and WhatsApp funnel", "Gallery or portfolio", "Google Business and local SEO support"],
    timeline: "Planned launch",
  },
  "Premium System": {
    label: "Premium digital system",
    scope: "A full website plus lead capture, booking, automation and AI-assisted support.",
    pages: "Website + system",
    features: ["Booking or admission flow", "AI FAQ / chatbot idea", "Lead tracking workflow", "Dashboard or automation plan"],
    timeline: "Custom build",
  },
};

const businessSampleData = {
  School: {
    accent: "#367cff",
    name: "Future-ready School Website",
    hero: "Admissions, campus story and parent trust in one place.",
    audience: "Parents looking for admissions, facilities, transport, fees, FAQs and school credibility.",
    nav: ["Admissions", "Campus", "Academics", "FAQ"],
    sections: ["Hero with admission enquiry", "Facilities and safety", "Founder message", "Parent FAQ"],
    conversion: "Admission enquiry and campus visit booking",
  },
  College: {
    accent: "#7d5cff",
    name: "Career-first College Website",
    hero: "Programs, placements, internships and student outcomes presented clearly.",
    audience: "Students and parents comparing courses, faculty, placements and campus life.",
    nav: ["Courses", "Placements", "Campus", "Apply"],
    sections: ["Program finder", "Placement highlights", "Student projects", "Online application"],
    conversion: "Course enquiry and application lead",
  },
  "Coaching institute": {
    accent: "#ff7c65",
    name: "Result-focused Coaching Website",
    hero: "Batches, results, demo classes and parent confidence.",
    audience: "Parents and students checking subjects, batch timing, results and teacher support.",
    nav: ["Courses", "Results", "Demo", "Fees"],
    sections: ["Batch cards", "Result proof", "Demo class form", "Doubt support"],
    conversion: "Demo class or counselling booking",
  },
  Salon: {
    accent: "#d946ef",
    name: "Premium Salon Booking Website",
    hero: "Services, styling, packages and appointment booking with a polished look.",
    audience: "Local customers comparing services, prices, bridal packages and availability.",
    nav: ["Services", "Looks", "Packages", "Book"],
    sections: ["Service menu", "Before-after gallery", "Bridal / event packages", "Appointment button"],
    conversion: "WhatsApp appointment request",
  },
  "Retail store": {
    accent: "#f59e0b",
    name: "Local Store Showcase Website",
    hero: "Products, offers and location made easy for nearby customers.",
    audience: "Customers who want to check products, offers, timing and directions before visiting.",
    nav: ["Products", "Offers", "Location", "Contact"],
    sections: ["Product categories", "Weekly offers", "Store trust badges", "Map and WhatsApp"],
    conversion: "Store visit or product enquiry",
  },
  Clinic: {
    accent: "#10b981",
    name: "Patient-friendly Clinic Website",
    hero: "Doctor profile, services, appointment flow and patient clarity.",
    audience: "Patients who need trust, timing, location, services and appointment support.",
    nav: ["Doctor", "Services", "Timing", "Book"],
    sections: ["Doctor introduction", "Treatment list", "Patient instructions", "Appointment request"],
    conversion: "Appointment booking enquiry",
  },
  "Cafe / restaurant": {
    accent: "#ef4444",
    name: "Cafe and Restaurant Website",
    hero: "Menu, ambience, offers and table enquiry in a warm visual style.",
    audience: "Customers looking for menu, photos, offers, location and table booking.",
    nav: ["Menu", "Gallery", "Offers", "Reserve"],
    sections: ["Signature menu", "Ambience gallery", "Party / catering section", "Reservation button"],
    conversion: "Table booking or food order enquiry",
  },
  "Chai stall / food stall": {
    accent: "#b45309",
    name: "Street Food Identity Page",
    hero: "Make a small food business look memorable, searchable and easy to contact.",
    audience: "Nearby customers, college students, office visitors and delivery enquiries.",
    nav: ["Menu", "Specials", "Location", "Order"],
    sections: ["Menu highlights", "Daily specials", "Customer reviews", "Map and WhatsApp order"],
    conversion: "WhatsApp order or location visit",
  },
  Tutor: {
    accent: "#2563eb",
    name: "Tutor Trust Website",
    hero: "Subjects, results, teaching style and demo class in a parent-friendly format.",
    audience: "Parents checking tutor credibility, class mode, subjects and student improvement.",
    nav: ["Subjects", "Results", "Method", "Demo"],
    sections: ["Subject cards", "Student progress proof", "Teaching method", "Demo class enquiry"],
    conversion: "Demo class booking",
  },
  "Real estate": {
    accent: "#0f766e",
    name: "Property Lead Website",
    hero: "Listings, site visits and buyer trust with simple lead capture.",
    audience: "Buyers and renters comparing properties, locations, pricing and site visit options.",
    nav: ["Listings", "Locations", "Site Visit", "Contact"],
    sections: ["Property cards", "Location highlights", "Site visit form", "WhatsApp lead flow"],
    conversion: "Site visit or property enquiry",
  },
  "NGO / trust": {
    accent: "#16a34a",
    name: "Impact and Donation Website",
    hero: "Mission, impact stories, volunteers and support requests.",
    audience: "Donors, volunteers, families and partners who want to understand the cause.",
    nav: ["Mission", "Impact", "Volunteer", "Support"],
    sections: ["Impact numbers", "Stories", "Volunteer form", "Donation / support CTA"],
    conversion: "Volunteer or support enquiry",
  },
  "Creator / personal brand": {
    accent: "#8b5cf6",
    name: "Creator Portfolio Website",
    hero: "Personal story, work, offers and collaboration enquiries.",
    audience: "Followers, brands, clients and students who want to know the creator better.",
    nav: ["About", "Work", "Services", "Collaborate"],
    sections: ["Profile hero", "Featured work", "Services / media kit", "Collaboration form"],
    conversion: "Collaboration or service enquiry",
  },
  Startup: {
    accent: "#06b6d4",
    name: "Startup Launch Website",
    hero: "Product story, problem-solution, waitlist and investor-ready clarity.",
    audience: "Early customers, partners, investors and hiring candidates.",
    nav: ["Product", "Use Cases", "Team", "Waitlist"],
    sections: ["Problem-solution hero", "Product features", "Use cases", "Waitlist / demo form"],
    conversion: "Demo request or waitlist signup",
  },
  "Local service business": {
    accent: "#ea580c",
    name: "Local Service Lead Website",
    hero: "Services, service area, trust proof and quick WhatsApp enquiries.",
    audience: "Nearby customers looking for reliable local help and quick response.",
    nav: ["Services", "Area", "Proof", "Call"],
    sections: ["Service packages", "Before-after proof", "Service area", "Call / WhatsApp CTA"],
    conversion: "Call or WhatsApp service enquiry",
  },
};

const businessVisualData = {
  School: {
    image: "assets/computer-lab.png",
    caption: "Admissions and campus trust",
    headline: "Parents should understand the school within the first visit.",
    story: "The sample focuses on admission clarity, campus confidence, parent FAQs and a strong enquiry path.",
    hooks: ["Campus visit CTA", "Facilities story", "Admission FAQ"],
  },
  College: {
    image: "assets/robotics-lab.png",
    caption: "Courses and career outcomes",
    headline: "Students compare colleges by outcomes, not only buildings.",
    story: "The sample highlights courses, placements, internships, projects and application support in a clean journey.",
    hooks: ["Program finder", "Placement proof", "Apply online"],
  },
  "Coaching institute": {
    image: "assets/computer-lab.png",
    caption: "Batch and result confidence",
    headline: "Parents want proof that the coaching can improve performance.",
    story: "The sample makes demo classes, results, batch timings and doubt support easy to understand.",
    hooks: ["Demo class CTA", "Result section", "Batch cards"],
  },
  Salon: {
    image: "assets/salon.png",
    caption: "Premium service presentation",
    headline: "A salon website should feel stylish before the customer even visits.",
    story: "The sample presents services, packages, looks, bridal offers and WhatsApp appointment booking.",
    hooks: ["Look gallery", "Package cards", "Book appointment"],
  },
  "Retail store": {
    image: "assets/retail.png",
    caption: "Products, offers and location",
    headline: "Local customers should know what is available before they visit.",
    story: "The sample shows products, offers, timing, store trust and directions in a simple customer flow.",
    hooks: ["Product categories", "Offer banners", "Map CTA"],
  },
  Clinic: {
    image: "assets/clinic.png",
    caption: "Patient trust and appointment clarity",
    headline: "Patients need confidence, timing and appointment guidance quickly.",
    story: "The sample focuses on doctor introduction, services, timings, instructions and appointment enquiry.",
    hooks: ["Doctor profile", "Service list", "Appointment CTA"],
  },
  "Cafe / restaurant": {
    image: "assets/cafe.png",
    caption: "Menu, ambience and bookings",
    headline: "Food businesses need appetite, location and easy ordering.",
    story: "The sample brings menu highlights, ambience, offers, party bookings and WhatsApp ordering together.",
    hooks: ["Menu preview", "Gallery", "Reserve table"],
  },
  "Chai stall / food stall": {
    image: "assets/circuit-campus.png",
    caption: "Small food brand identity",
    headline: "Even a small food stall can look memorable and searchable.",
    story: "The sample turns menu, daily specials, location and quick WhatsApp orders into a simple page.",
    hooks: ["Daily special", "Location pin", "Order on WhatsApp"],
  },
  Tutor: {
    image: "assets/computer-lab.png",
    caption: "Teaching trust and demo class",
    headline: "Parents choose tutors when they understand method and results.",
    story: "The sample explains subjects, class style, progress proof, testimonials and demo class booking.",
    hooks: ["Subject cards", "Progress proof", "Demo class"],
  },
  "Real estate": {
    image: "assets/realestate.png",
    caption: "Property lead experience",
    headline: "Buyers want listings, location clarity and site visit options.",
    story: "The sample presents properties, neighbourhood highlights, site visit booking and WhatsApp lead capture.",
    hooks: ["Listing cards", "Site visit CTA", "Lead form"],
  },
  "NGO / trust": {
    image: "assets/ngo.png",
    caption: "Impact and support journey",
    headline: "Supporters should understand the cause and how to help.",
    story: "The sample brings mission, impact numbers, stories, volunteer flow and support enquiries together.",
    hooks: ["Impact numbers", "Volunteer form", "Support CTA"],
  },
  "Creator / personal brand": {
    image: "assets/blog.png",
    caption: "Portfolio and collaboration",
    headline: "A personal brand needs a home beyond social media.",
    story: "The sample shows profile, work, offers, media kit and collaboration enquiries in one polished place.",
    hooks: ["Featured work", "Services", "Collaborate"],
  },
  Startup: {
    image: "assets/startup.png",
    caption: "Launch and demo request",
    headline: "A startup page should explain the product before the first call.",
    story: "The sample focuses on problem, solution, features, use cases, demo requests and waitlist capture.",
    hooks: ["Product story", "Use cases", "Demo CTA"],
  },
  "Local service business": {
    image: "assets/Localservice.png",
    caption: "Local trust and fast enquiries",
    headline: "Local service customers want proof, area and quick contact.",
    story: "The sample highlights services, service area, before-after proof and WhatsApp enquiry.",
    hooks: ["Service area", "Proof section", "Call button"],
  },
};

const businessMapperCatalog = [
  {
    category: "School",
    budget: "Growth Website",
    keywords: ["school", "admission", "campus", "students", "parents", "principal", "facilities", "school tour", "fees", "faq"],
    reason: "Schools need admission clarity, trust-building, parent FAQs, campus highlights and visit enquiries.",
  },
  {
    category: "College",
    budget: "Growth Website",
    keywords: ["college", "campus", "placement", "course", "department", "students", "admission", "internship", "training"],
    reason: "Colleges need course pages, placement proof, admission flow, student outcomes and enquiry capture.",
  },
  {
    category: "Coaching institute",
    budget: "Growth Website",
    keywords: ["coaching", "tuition", "academy", "batch", "result", "demo class", "competitive exam", "classes"],
    reason: "Coaching businesses need results, batch details, demo class flow and strong trust proof.",
  },
  {
    category: "Salon",
    budget: "Starter Website",
    keywords: ["salon", "beauty", "makeup", "bridal", "hair", "spa", "appointment", "styling", "service menu"],
    reason: "Salons need a stylish service showcase, package visibility, gallery and WhatsApp appointment flow.",
  },
  {
    category: "Retail store",
    budget: "Starter Website",
    keywords: ["retail", "store", "shop", "products", "offers", "inventory", "near me", "timing", "catalog"],
    reason: "Retail stores need products, offers, location, timing and quick customer enquiry actions.",
  },
  {
    category: "Clinic",
    budget: "Growth Website",
    keywords: ["clinic", "doctor", "dentist", "patient", "appointment", "health", "medical", "treatment", "timing"],
    reason: "Clinics need doctor trust, services, timings, patient instructions and appointment enquiries.",
  },
  {
    category: "Cafe / restaurant",
    budget: "Starter Website",
    keywords: ["cafe", "restaurant", "food", "menu", "table", "order", "party", "ambience", "delivery"],
    reason: "Food businesses need menu highlights, ambience, location, offers and easy order or table enquiries.",
  },
  {
    category: "Chai stall / food stall",
    budget: "Starter Website",
    keywords: ["chai", "food stall", "stall", "snacks", "tea", "small food", "local food", "quick order"],
    reason: "Small food businesses need memorable branding, location, daily specials and WhatsApp ordering.",
  },
  {
    category: "Tutor",
    budget: "Starter Website",
    keywords: ["tutor", "teacher", "home tuition", "online class", "subject", "demo class", "student results"],
    reason: "Tutors need subject clarity, teaching style, demo class CTA and parent confidence.",
  },
  {
    category: "Real estate",
    budget: "Growth Website",
    keywords: ["real estate", "property", "plot", "flat", "house", "site visit", "listing", "broker", "builder"],
    reason: "Real estate needs listings, location highlights, lead forms and site visit requests.",
  },
  {
    category: "NGO / trust",
    budget: "Starter Website",
    keywords: ["ngo", "trust", "donation", "volunteer", "impact", "mission", "charity", "social work"],
    reason: "NGOs need mission clarity, impact stories, volunteer flow and support enquiries.",
  },
  {
    category: "Creator / personal brand",
    budget: "Starter Website",
    keywords: ["creator", "personal brand", "portfolio", "blog", "influencer", "consultant", "speaker", "profile"],
    reason: "Personal brands need portfolio, profile, services, media proof and collaboration enquiries.",
  },
  {
    category: "Startup",
    budget: "Premium System",
    keywords: ["startup", "app", "product", "saas", "mvp", "waitlist", "demo", "investor", "launch"],
    reason: "Startups need product story, use cases, demo request, waitlist and launch-ready conversion flow.",
  },
  {
    category: "Local service business",
    budget: "Starter Website",
    keywords: ["local service", "repair", "electrician", "plumber", "cleaning", "service area", "call", "whatsapp leads", "leads"],
    reason: "Local services need service area, proof, quick call buttons and WhatsApp lead capture.",
  },
];

const careerRoleData = [
  {
    title: "AI App Developer",
    tags: ["Coding", "AI", "Problem solving"],
    signals: ["AI", "automation", "Coding and app building", "building practical projects", "Fast learning", "Build portfolio", "internship"],
    project: "Build an AI chatbot or assistant that answers college, business or customer questions.",
    skills: ["Python basics", "Prompt engineering", "API usage", "Project documentation"],
    action: "30-day mission: Week 1 learn AI prompts and Python basics, Week 2 build a working chatbot, Week 3 add memory or real data, Week 4 record a demo and present it like an internship project.",
    support: "Tivoro can guide you through an AI app project, GitHub portfolio and demo presentation.",
  },
  {
    title: "Web Developer",
    tags: ["Coding", "Design", "Problem solving"],
    signals: ["Coding and app building", "building practical projects", "Design", "Built small projects", "GitHub", "interviews"],
    project: "Build a responsive business website with enquiry form, WhatsApp action and admin-ready content.",
    skills: ["HTML/CSS", "JavaScript", "Responsive design", "Deployment"],
    action: "30-day mission: Week 1 design a homepage, Week 2 build mobile-first pages, Week 3 add forms and interactions, Week 4 deploy the website and turn it into a portfolio case study.",
    support: "Tivoro can help you build live websites, polish your portfolio and prepare for developer interviews.",
  },
  {
    title: "Data Analyst",
    tags: ["Data", "Problem solving"],
    signals: ["Data and analytics", "analyzing information", "Logical thinking", "Detail orientation", "Commerce", "MBA"],
    project: "Create a dashboard from sales, admission, attendance or social media data with clear insights.",
    skills: ["Excel/Sheets", "SQL basics", "Python data basics", "Dashboard storytelling"],
    action: "30-day mission: Week 1 clean real data, Week 2 create charts and insights, Week 3 build a dashboard, Week 4 explain findings like a business analyst in a mock interview.",
    support: "Tivoro can train you on practical dashboards, data projects and interview explanation.",
  },
  {
    title: "UI/UX Designer",
    tags: ["Design", "Communication"],
    signals: ["Design and user experience", "designing screens", "Creativity", "Communication", "Arts", "Humanities"],
    project: "Design a mobile app prototype for salon booking, school enquiry or student study planning.",
    skills: ["User research", "Wireframes", "Figma basics", "Presentation"],
    action: "30-day mission: Week 1 research users, Week 2 create wireframes, Week 3 design a polished app prototype, Week 4 present the user journey as a UI/UX case study.",
    support: "Tivoro can help you create a UI case study and present your design like a professional portfolio.",
  },
  {
    title: "Digital Growth Specialist",
    tags: ["Marketing", "Communication", "Business"],
    signals: ["Digital marketing", "presenting and talking", "Communication", "Business", "Commerce", "MBA"],
    project: "Create a growth plan for a local business with landing page, Instagram content and WhatsApp enquiry flow.",
    skills: ["Content planning", "SEO basics", "Ads basics", "WhatsApp funnel thinking"],
    action: "30-day mission: Week 1 choose a real business, Week 2 plan content and offers, Week 3 build a landing page funnel, Week 4 present a growth report with next campaign ideas.",
    support: "Tivoro can train you on real digital campaigns, website funnels and client-ready reporting.",
  },
  {
    title: "Business Analyst / Product Associate",
    tags: ["Business", "Communication", "Problem solving"],
    signals: ["Business and product", "planning business ideas", "Leadership", "Communication", "researching", "Start my own idea"],
    project: "Plan a product or service app with problem statement, features, user journey and launch plan.",
    skills: ["Requirement gathering", "User stories", "Market research", "Presentation"],
    action: "30-day mission: Week 1 identify a real problem, Week 2 map users and features, Week 3 create product screens and requirements, Week 4 pitch the product with a launch plan.",
    support: "Tivoro can help you convert business thinking into product documents, prototypes and startup planning.",
  },
  {
    title: "QA Tester / Automation Starter",
    tags: ["Problem solving", "Coding"],
    signals: ["Detail orientation", "Logical thinking", "researching", "Coding", "Beginner", "Know basics"],
    project: "Test a website or app, create bug reports and automate simple checks for important pages.",
    skills: ["Manual testing", "Bug reporting", "Basic automation", "Quality mindset"],
    action: "30-day mission: Week 1 learn testing mindset, Week 2 test a real website, Week 3 prepare bug reports and checklists, Week 4 add basic automation and explain your QA process.",
    support: "Tivoro can guide you from testing basics to project-based QA practice and interview preparation.",
  },
  {
    title: "Startup Builder",
    tags: ["Business", "AI", "Communication"],
    signals: ["Start my own idea", "planning business ideas", "Leadership", "AI", "Digital marketing", "Fast learning"],
    project: "Create a simple MVP plan with landing page, customer problem, first offer and launch checklist.",
    skills: ["Idea validation", "No-code/AI tools", "Landing page", "Customer discovery"],
    action: "30-day mission: Week 1 select one idea, Week 2 validate it with target users, Week 3 build a landing page or prototype, Week 4 pitch the MVP with pricing and launch steps.",
    support: "Tivoro can help you shape the idea, build the first digital presence and prepare a pitch.",
  },
];

const finderData = {
  student: {
    stages: ["Grade 3-5", "Grade 6-8", "Grade 9-12", "College student"],
    goals: ["Block coding / Scratch", "App building", "Python", "JavaScript", "C / C++ / Java", "Learn AI", "Build websites", "Live project training", "Internship / career support"],
    result(stage, goal) {
      if (goal.includes("Scratch") || stage.includes("3-5")) return ["Scratch, Scratch Jr & App Starter", "Block-based coding, app building, logic, games and digital confidence for young learners."];
      if (goal.includes("App")) return ["App Building Track", "Students learn app thinking, screens, logic, interactions and project demos."];
      if (goal.includes("C / C++ / Java")) return ["Programming Foundation Track", "C, C++, Java foundations with problem solving, syntax confidence and project practice."];
      if (goal.includes("JavaScript")) return ["JavaScript & Web Builder", "JavaScript, websites, interactions, mini apps and project presentations."];
      if (stage.includes("6-8")) return ["Python, JavaScript & Web Basics", "Python foundation, JavaScript, mini websites, games and project presentations."];
      if (stage.includes("9-12") && goal.includes("AI")) return ["AI Champions Program", "Python, prompt engineering, chatbots, memory bots, AI agents and Demo Day."];
      if (stage.includes("College")) return ["Internship & Career Lab", "Final year project, GitHub portfolio, resume, interview prep and mentor review."];
      return ["Language, Web & AI Builder", "A guided path covering Python, JavaScript, C/C++/Java options, APIs, AI tools and live projects."];
    },
  },
  parent: {
    stages: ["Child in Grade 3-5", "Child in Grade 6-8", "Child in Grade 9-12", "College-going child", "Not sure"],
    goals: ["Find right course", "Reduce random screen time", "Build confidence", "Prepare for future careers", "Need counselling call"],
    result(stage, goal) {
      if (goal.includes("screen")) return ["Creative Coding Starter", "A structured path that converts screen interest into logic, creativity and projects."];
      if (stage.includes("9-12")) return ["AI Champions or Web App Builder", "Strong for teens who need future-ready skills and project outcomes."];
      if (stage.includes("College")) return ["CareerHub Project Plan", "Project, internship, portfolio and interview support for college learners."];
      if (stage.includes("Not sure")) return ["Book a Course Counselling Slot", "We will understand the child and suggest a learning path based on interest and grade."];
      return ["Guided Course Recommendation", "Start with a short counselling call and choose between 1:1, group or bootcamp format."];
    },
  },
  business: {
    stages: ["School", "College", "Coaching institute", "Salon", "Retail store", "Clinic", "Cafe / restaurant", "Tutor", "Creator / personal brand", "Local business"],
    goals: ["Website / branding", "Social media handling", "More leads", "AI chatbot / automation", "Booking system", "Complete digital growth"],
    result(stage, goal) {
      if (goal.includes("Website")) return ["Digital Presence Package", `Website, branding, Google Business and local SEO for ${stage}.`];
      if (goal.includes("Social")) return ["Social Growth Package", "Instagram, Facebook, captions, content calendar, reels ideas and campaign planning."];
      if (goal.includes("leads")) return ["Growth & Lead Gen Package", "Landing page, WhatsApp funnel, lead form and follow-up system."];
      if (goal.includes("chatbot") || goal.includes("automation")) return ["AI Systems Package", "AI chatbot, dashboard, automation and simple workflow consulting."];
      return ["Business Growth Consultation", "We will map your online presence, leads and automation needs before suggesting a package."];
    },
  },
  institution: {
    stages: ["School", "College", "Training institute", "Corporate team"],
    goals: ["AI workshop", "Coding club", "Hackathon", "Student project support", "Digital admission system", "Teacher / team upskilling"],
    result(stage, goal) {
      if (goal.includes("project")) return ["College Project Sprint", "Mini project, final year project, GitHub portfolio and viva preparation support."];
      if (goal.includes("admission")) return ["Digital Admission System", "Admission page, enquiry forms, FAQ, chatbot and lead tracking."];
      if (goal.includes("Hackathon")) return ["Hackathon or Build Day", "A structured challenge format with mentoring, demo and certificates."];
      return ["Tivoro Workshop Program", `${goal} for ${stage} with live sessions, practical activities and certificate options.`];
    },
  },
};

let activeAudience = "student";

function setMenu(open) {
  if (!mobileMenu || !menuButton) return;
  mobileMenu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
}

function fillSelect(select, values) {
  if (!select) return;
  select.innerHTML = values.map((value) => `<option>${value}</option>`).join("");
}

function renderFinderOptions() {
  const data = finderData[activeAudience];
  fillSelect(finderStage, data.stages);
  fillSelect(finderGoal, data.goals);
  if (finderResult) finderResult.hidden = true;
}

function normalizeQuery(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9\s.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function detectLearnerStage(text) {
  const query = normalizeQuery(text);
  if (/\b(college|btech|bca|mca|degree|university|final year|placement|internship)\b/.test(query)) return "College student";

  const gradeMatch = query.match(/\b(?:class|grade|std|standard)\s*([0-9]{1,2})\b/);
  const grade = gradeMatch ? Number(gradeMatch[1]) : null;
  if (grade >= 3 && grade <= 5) return "Grade 3-5 student";
  if (grade >= 6 && grade <= 8) return "Grade 6-8 student";
  if (grade >= 9 && grade <= 12) return "Grade 9-12 student";

  const ageMatch = query.match(/\b(?:age\s*)?([0-9]{1,2})\s*(?:year|years|yr|yrs|old)\b/);
  const age = ageMatch ? Number(ageMatch[1]) : null;
  if (age >= 7 && age <= 10) return "Grade 3-5 student";
  if (age >= 11 && age <= 13) return "Grade 6-8 student";
  if (age >= 14 && age <= 17) return "Grade 9-12 student";
  if (age >= 18) return "College student";

  if (/\b(teen|teenager|board|class x|class xi|class xii)\b/.test(query)) return "Grade 9-12 student";
  if (/\b(child|kid|son|daughter|school student)\b/.test(query)) return "Grade 6-8 student";
  return "";
}

function stageSafeSkills(stage, requestedSkills) {
  const options = builderSkillOptions[stage] || builderSkillOptions["Grade 3-5 student"];
  const normalizedOptions = new Map(options.map((skill) => [normalizeQuery(skill), skill]));
  const selected = [];

  requestedSkills.forEach((skill) => {
    const direct = normalizedOptions.get(normalizeQuery(skill));
    if (direct && !selected.includes(direct)) selected.push(direct);
  });

  if (!selected.length) {
    const defaults = defaultBuilderSkills[stage] || options.slice(0, 2);
    defaults.forEach((skill) => {
      if (options.includes(skill) && !selected.includes(skill)) selected.push(skill);
    });
  }

  return selected.slice(0, 4);
}

function scoreCourseMatch(course, query, stage) {
  let score = 0;
  if (stage && course.stages.includes(stage)) score += 36;
  if (stage && !course.stages.includes(stage)) score -= 24;
  if (!stage) score += 8;

  course.keywords.forEach((keyword) => {
    const cleanKeyword = normalizeQuery(keyword);
    if (cleanKeyword && query.includes(cleanKeyword)) score += cleanKeyword.includes(" ") ? 14 : 9;
  });

  course.skills.forEach((skill) => {
    const cleanSkill = normalizeQuery(skill);
    if (cleanSkill && query.includes(cleanSkill)) score += 12;
  });

  if (/\b(project|portfolio|build|create|demo)\b/.test(query) && /project|portfolio|builder|developer/i.test(course.title)) score += 10;
  if (/\b(parent|son|daughter|child|kid)\b/.test(query) && course.stages.some((item) => item.includes("Grade"))) score += 5;
  if (/\b(not sure|confused|guide|recommend|suggest)\b/.test(query)) score += 5;

  return score;
}

function renderCourseMapperResult(match, alternatives, needsMoreDetail) {
  if (!courseMatchResult) return;
  if (needsMoreDetail) {
    courseMatchResult.innerHTML = `
      <span>Need a little more detail</span>
      <h4>Please add grade/age and interest.</h4>
      <p>Example: "Class 7 student wants Python and AI" or "College student needs internship project support".</p>
    `;
    courseMatchResult.hidden = false;
    return;
  }

  const ctaText = encodeURIComponent(
    `Hello Tivoro, I used the AI Course Finder. Recommended course: ${match.title}. Learner: ${match.stage}. Skills: ${match.skills.join(", ")}. Please help me finalize the best batch.`
  );
  const courseWhatsapp = `https://wa.me/${whatsappNumber}?text=${ctaText}`;

  courseMatchResult.innerHTML = `
    <span>Recommended match</span>
    <h4>${match.title}</h4>
    <p>${match.outcome}</p>
    <div class="course-match-chips">
      <strong>${match.stage}</strong>
      <strong>${match.confidence}% confidence</strong>
      <strong>${match.skills.join(" + ")}</strong>
    </div>
    ${alternatives.length ? `<div class="course-alternatives"><span>Also suitable</span>${alternatives.map((item) => `<button type="button" data-course-alt="${item.title}">${item.title}</button>`).join("")}</div>` : ""}
    ${recommendedPathBlock({
      title: "Your learning path is ready. Choose the next step that feels right.",
      copy: "For personal guidance, move to WhatsApp. If you want to compare age-wise programs first, explore the student programs page.",
      whatsappHref: courseWhatsapp,
      detailHref: "students.html?profile=student",
      detailText: "Explore Student Programs",
    })}
  `;
  courseMatchResult.hidden = false;
}

function applyCourseMatch(course, stage) {
  if (builderStage) builderStage.value = stage;
  renderBuilderSkills();

  const safeSkills = stageSafeSkills(stage, course.skills);
  document.querySelectorAll("[data-builder-skill]").forEach((button) => {
    button.classList.toggle("is-selected", safeSkills.includes(button.dataset.builderSkill));
  });

  if (builderGoal) builderGoal.value = course.goal;
  if (builderMode && stage === "College student") builderMode.value = "Project mentorship";
  if (builderPace && stage === "College student") builderPace.value = "Balanced pace";
  renderBuilderPreview();
}

function matchCourseFromText(text, preferredTitle = "") {
  const query = normalizeQuery(text);
  if (!query || query.length < 8) {
    renderCourseMapperResult(null, [], true);
    return;
  }

  const stage = detectLearnerStage(query);
  const ranked = courseMapperCatalog
    .map((course) => ({ ...course, score: scoreCourseMatch(course, query, stage) + (course.title === preferredTitle ? 50 : 0) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  const needsMoreDetail = !stage && best.score < 28;
  if (!best || needsMoreDetail) {
    renderCourseMapperResult(null, [], true);
    return;
  }

  const safeStage = stage || best.stages[0];
  const safeSkills = stageSafeSkills(safeStage, best.skills);
  const confidence = Math.max(62, Math.min(96, best.score + 34));
  applyCourseMatch(best, safeStage);
  renderCourseMapperResult({ ...best, stage: safeStage, skills: safeSkills, confidence }, ranked.filter((item) => item.title !== best.title && (!safeStage || item.stages.includes(safeStage))).slice(0, 2), false);
}

function parentDecisionPlan(data) {
  const age = data.get("age");
  const need = data.get("need");
  const style = data.get("style");
  const time = data.get("time");
  const budget = data.get("budget");
  let path = "Foundation Growth Path";
  let outcome = "confidence, routine and visible learning progress";
  let projects = ["Confidence activity", "Weekly practice challenge", "Parent progress review"];

  if (String(need).includes("Coding")) {
    path = age === "3-5 years" || age === "6-10 years" ? "Creative Coding Starter" : "Python and AI Starter";
    outcome = "technology confidence, logic and project presentation";
    projects = ["Scratch or app mini project", "Logic challenge", "Demo presentation"];
  } else if (String(need).includes("AI")) {
    path = "AI Curiosity Path";
    outcome = "safe AI awareness, prompt thinking and creative project confidence";
    projects = ["AI idea board", "Chatbot concept", "Future skills demo"];
  } else if (String(need).includes("English") || String(need).includes("Reading")) {
    path = "Communication Confidence Path";
    outcome = "reading comfort, speaking confidence and better expression";
    projects = ["Reading habit tracker", "Speaking activity", "Story presentation"];
  } else if (String(need).includes("Math")) {
    path = "Academic Confidence Path";
    outcome = "homework routine, concept clarity and exam confidence";
    projects = ["Concept practice plan", "Weekly revision mission", "Doubt-clearing cycle"];
  } else if (String(need).includes("Career")) {
    path = "Future Direction Path";
    outcome = "career awareness, skill choices and project roadmap";
    projects = ["Interest map", "Career mini research", "Skill mission plan"];
  }

  const format = budget === "1:1 mentorship" || style === "Live mentor-led classes" ? "1:1 mentorship" : budget === "Group batch" ? "small group batch" : "guided discussion first";
  return {
    title: path,
    subtitle: `${age} • ${format}`,
    outcome: `Expected 6-month outcome: ${outcome}.`,
    timeline: `${time} with ${style.toLowerCase()}.`,
    projects,
    next: "Review this plan with Tivoro before selecting the exact batch.",
  };
}

function studentDecisionPlan(data) {
  const stage = data.get("stage");
  const interest = data.get("interest");
  const goal = data.get("goal");
  const time = data.get("time");
  let title = "Future Skill Mission";
  let missions = ["Mission 1: Build foundation", "Mission 2: Create mini project", "Mission 3: Present your work"];

  if (String(interest).includes("Scratch")) {
    title = "Game and Creative Coding Mission";
    missions = ["Mission 1: Visual logic", "Mission 2: Game rules and scoring", "Mission 3: Demo your game"];
  } else if (String(interest).includes("Python")) {
    title = "Python Builder Mission";
    missions = ["Mission 1: Python basics", "Mission 2: Mini automation or game", "Mission 3: Project presentation"];
  } else if (String(interest).includes("AI")) {
    title = "AI App Mission";
    missions = ["Mission 1: Prompt engineering", "Mission 2: Python chatbot", "Mission 3: AI project demo"];
  } else if (String(interest).includes("Websites")) {
    title = "Web and App Builder Mission";
    missions = ["Mission 1: Web basics", "Mission 2: Interactive page", "Mission 3: Portfolio launch"];
  } else if (String(interest).includes("C / C++ / Java")) {
    title = "Programming Foundation Mission";
    missions = ["Mission 1: Syntax confidence", "Mission 2: Problem solving", "Mission 3: Coding practice routine"];
  } else if (String(interest).includes("Internship")) {
    title = "Live Project and Internship Mission";
    missions = ["Mission 1: Project selection", "Mission 2: GitHub portfolio", "Mission 3: Interview explanation"];
  }

  return {
    title,
    subtitle: `${stage} • ${time}`,
    outcome: `Goal: ${goal}.`,
    timeline: "Recommended path: learn, build, present, then review with a mentor.",
    projects: missions,
    next: "Discuss this mission with Tivoro and finalize the right course mode.",
  };
}

function renderDecisionResult(form, plan) {
  const result = form.querySelector("[data-decision-result]");
  if (!result) return;
  const type = form.dataset.decisionForm;
  const ctaText = encodeURIComponent(
    `Hello Tivoro, I created a ${type === "parent" ? "Child Growth Plan" : "Future Skill Mission"}. Recommended path: ${plan.title}. ${plan.subtitle}. Please help me finalize the next step.`
  );
  const decisionWhatsapp = `https://wa.me/${whatsappNumber}?text=${ctaText}`;
  const isParent = type === "parent";
  result.innerHTML = `
    <span>${isParent ? "Child Growth Blueprint" : "Future Skill Mission"}</span>
    <h3>${plan.title}</h3>
    <p>${plan.subtitle}</p>
    <div class="decision-result-grid">
      <article><strong>Outcome</strong><p>${plan.outcome}</p></article>
      <article><strong>Timeline</strong><p>${plan.timeline}</p></article>
      <article><strong>What they will build</strong><p>${plan.projects.join(" • ")}</p></article>
    </div>
    ${recommendedPathBlock({
      title: "Your suggested path is ready. Choose the next step that feels comfortable.",
      copy: isParent
        ? "Move to WhatsApp if you want us to understand your child personally. Or explore parent guidance first at your own pace."
        : "Move to WhatsApp if you want a mentor to confirm the path. Or explore student programs before deciding.",
      whatsappHref: decisionWhatsapp,
      detailHref: isParent ? "parents.html?profile=parent" : "students.html?profile=student",
      detailText: isParent ? "Explore Parent Guidance" : "Explore Student Programs",
    })}
  `;
  result.hidden = false;
}

function startTypingPlaceholder(field, fallbackText) {
  if (!field || !field.dataset.typingPlaceholder) return;
  const examples = field.dataset.typingPlaceholder.split("|").map((item) => item.trim()).filter(Boolean);
  if (!examples.length) return;

  let exampleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let paused = false;

  function tick() {
    if (document.activeElement === field || field.value.trim()) {
      field.placeholder = fallbackText;
      window.setTimeout(tick, 900);
      return;
    }

    const current = examples[exampleIndex];
    if (!deleting && charIndex <= current.length) {
      field.placeholder = current.slice(0, charIndex);
      charIndex += 1;
      if (charIndex > current.length) paused = true;
    } else if (deleting && charIndex >= 0) {
      field.placeholder = current.slice(0, charIndex);
      charIndex -= 1;
      if (charIndex < 0) {
        deleting = false;
        exampleIndex = (exampleIndex + 1) % examples.length;
        charIndex = 0;
      }
    }

    if (paused) {
      paused = false;
      deleting = true;
      window.setTimeout(tick, 1400);
      return;
    }

    window.setTimeout(tick, deleting ? 28 : 42);
  }

  tick();
}

function startCoursePlaceholderTyping() {
  startTypingPlaceholder(courseQuery, "Type your child's grade, interest and goal...");
}

function startBusinessPlaceholderTyping() {
  startTypingPlaceholder(businessQuery, "Type your business type, goal and expected website features...");
}

function setBookingError(message) {
  if (!bookingError) return;
  bookingError.textContent = message;
  bookingError.hidden = !message;
}

function renderPath(pathKey) {
  if (!pathResult || !pathData[pathKey]) return;
  const item = pathData[pathKey];
  pathResult.innerHTML = `<span>${item.label}</span><h3>${item.title}</h3><p>${item.text}</p><div class="path-tags">${item.tags.map((tag) => `<strong>${tag}</strong>`).join("")}</div>`;
}

function renderProject(projectKey) {
  if (!projectPreview || !projectData[projectKey]) return;
  const item = projectData[projectKey];
  projectPreview.innerHTML = `<span>Project preview</span><h3>${item.title}</h3><p>${item.text}</p><div class="preview-bars" aria-hidden="true">${item.bars.map((width) => `<i style="--bar-width:${width}"></i>`).join("")}</div>`;
}

function selectedBuilderSkills() {
  return [...document.querySelectorAll("[data-builder-skill]")].filter((button) => button.classList.contains("is-selected")).map((button) => button.dataset.builderSkill);
}

function builderCourseName(skills) {
  const has = (text) => skills.some((skill) => skill.includes(text));
  if (has("AI") && has("Python")) return "Python + AI Project Track";
  if (has("AI")) return "AI + Coding Project Track";
  if (skills.includes("Live projects") || skills.includes("GitHub portfolio") || skills.includes("Interview prep")) return "Career Project Track";
  if (skills.includes("C") || skills.includes("C++") || skills.includes("Java")) return "Programming Foundation Track";
  if (has("Python") && has("App building")) return "Python + App Builder Track";
  if (has("Python")) return "Python Foundations Track";
  if (skills.includes("Web Development") || has("JavaScript") || skills.includes("Web basics")) return "Web App Builder Track";
  if (has("App building")) return "App Builder Track";
  if (skills.includes("Block-based coding")) return "Block-Based Coding Starter";
  if (skills.includes("Logic games")) return "Logic & Game Coding Starter";
  if (skills.includes("Creative coding")) return "Creative Coding Starter";
  if (skills.includes("Scratch advanced")) return "Scratch Advanced Project Track";
  if (skills.includes("Scratch") || skills.includes("Scratch Jr")) return "Scratch + Scratch Jr Confidence Track";
  return "Scratch + Scratch Jr Confidence Track";
}

function builderOutcomes(skills, goal) {
  const outcomes = [];
  if (skills.some((skill) => skill.includes("Scratch")) || skills.includes("Block-based coding")) outcomes.push("Logic games and visual coding activities");
  if (skills.some((skill) => skill.includes("App building"))) outcomes.push("Simple app screens, buttons and user-flow thinking");
  if (skills.some((skill) => skill.includes("Python"))) outcomes.push("Python basics with mini automation or game tasks");
  if (skills.some((skill) => skill.includes("JavaScript")) || skills.includes("Web Development") || skills.includes("Web basics")) outcomes.push("Interactive website or portfolio-style web project");
  if (skills.includes("C") || skills.includes("C++") || skills.includes("Java")) outcomes.push("Syntax confidence and problem-solving practice");
  if (skills.some((skill) => skill.includes("AI"))) outcomes.push("AI chatbot or agent with prompt design and demo use case");
  if (skills.includes("Live projects")) outcomes.push("Live project workflow with mentor review");
  if (skills.includes("GitHub portfolio")) outcomes.push("GitHub portfolio setup and project documentation");
  if (goal.includes("interview")) outcomes.push("Project explanation, resume talking points and interview practice");
  if (!outcomes.length) outcomes.push("Personalized starter tasks based on learner confidence");
  outcomes.push("Mini project with demo presentation");
  outcomes.push("Parent-friendly progress discussion");
  return outcomes.slice(0, 5);
}

function renderBuilderSkills() {
  const picker = document.querySelector(".skill-picker");
  if (!picker || !builderStage) return;
  const stage = builderStage.value;
  const options = builderSkillOptions[stage] || builderSkillOptions["Grade 3-5 student"];
  const defaults = defaultBuilderSkills[stage] || options.slice(0, 2);
  picker.innerHTML = options
    .map((skill) => `<button class="${defaults.includes(skill) ? "is-selected" : ""}" type="button" data-builder-skill="${skill}">${skill}</button>`)
    .join("");
}

function renderBuilderPreview() {
  if (!builderPreview) return;
  const stage = builderStage?.value || "Grade 3-5 student";
  const goal = builderGoal?.value || "Build confidence with technology";
  const mode = builderMode?.value || "1:1 live class";
  const pace = builderPace?.value || "Light pace";
  const skills = selectedBuilderSkills();
  const safeSkills = skills.length ? skills : ["Scratch Jr", "Scratch"];
  const duration = builderDurations[pace] || "8-10 weeks";
  const title = builderCourseName(safeSkills);
  const skillText = safeSkills.join(" + ");
  const outcomes = builderOutcomes(safeSkills, goal);
  builderPreview.innerHTML = `<span>Your custom course plan</span><h3>${title}</h3><p>A personalized ${skillText} course for ${stage} focused on ${goal.toLowerCase()}.</p><div class="builder-plan-grid"><strong>${duration}</strong><strong>${mode}</strong><strong>${pace}</strong></div><ul>${outcomes.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function sendBuilderPlan() {
  const stage = builderStage?.value || "Grade 3-5 student";
  const goal = builderGoal?.value || "Build confidence with technology";
  const mode = builderMode?.value || "1:1 live class";
  const pace = builderPace?.value || "Light pace";
  const skills = selectedBuilderSkills();
  const safeSkills = skills.length ? skills : ["Scratch Jr", "Scratch"];
  const title = builderCourseName(safeSkills);
  const duration = builderDurations[pace] || "8-10 weeks";
  const message = encodeURIComponent(
    `Hello Tivoro, I created a custom coding course plan. Plan: ${title}. Learner: ${stage}. Skills: ${safeSkills.join(", ")}. Goal: ${goal}. Class style: ${mode}. Pace: ${pace}. Suggested duration: ${duration}. Please help me finalize this course.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
}

function renderBusinessSample() {
  if (!samplePreview) return;
  const category = sampleCategory?.value || "School";
  const budget = sampleBudget?.value || "Starter Website";
  const sample = businessSampleData[category] || businessSampleData.School;
  const visual = businessVisualData[category] || businessVisualData.School;
  const budgetPlan = businessBudgetSamples[budget] || businessBudgetSamples["Starter Website"];
  samplePreview.style.setProperty("--sample-accent", sample.accent);
  samplePreview.innerHTML = `
    <div class="sample-browser">
      <div class="sample-browser-top">
        <span></span><span></span><span></span>
        <strong>${category.toLowerCase().replaceAll(" ", "-")}.preview</strong>
      </div>
      <div class="sample-website-shell">
        <nav class="sample-nav">
          <strong>${sample.name}</strong>
          <div>${sample.nav.map((item) => `<span>${item}</span>`).join("")}</div>
        </nav>
        <div class="sample-showcase">
          <div class="sample-hero">
            <span>${budgetPlan.label}</span>
            <h3>${sample.name}</h3>
            <p>${sample.hero}</p>
            <button type="button">Enquire now</button>
          </div>
          <figure class="sample-image-card">
            <img src="${visual.image}" alt="${visual.caption}" />
            <figcaption>
              <strong>${visual.caption}</strong>
              <span>${visual.headline}</span>
            </figcaption>
          </figure>
        </div>
        <div class="sample-customer-story">
          <span>What your customer will understand</span>
          <p>${visual.story}</p>
          <div>${visual.hooks.map((hook) => `<strong>${hook}</strong>`).join("")}</div>
        </div>
        <div class="sample-mini-grid">
          ${sample.sections.map((section) => `<article><span></span><strong>${section}</strong></article>`).join("")}
        </div>
      </div>
    </div>
    <div class="sample-detail-grid">
      <article>
        <span>Target visitor</span>
        <p>${sample.audience}</p>
      </article>
      <article>
        <span>Budget scope</span>
        <p>${budgetPlan.scope}</p>
      </article>
      <article>
        <span>Main conversion</span>
        <p>${sample.conversion}</p>
      </article>
      <article>
        <span>Build size</span>
        <p>${budgetPlan.pages} • ${budgetPlan.timeline}</p>
      </article>
    </div>
    <div class="sample-feature-list">
      ${budgetPlan.features.map((feature) => `<span>${feature}</span>`).join("")}
    </div>
  `;
}

function sendBusinessSampleRequest() {
  const category = sampleCategory?.value || "School";
  const budget = sampleBudget?.value || "Starter Website";
  const sample = businessSampleData[category] || businessSampleData.School;
  const budgetPlan = businessBudgetSamples[budget] || businessBudgetSamples["Starter Website"];
  const message = encodeURIComponent(
    `Hello Tivoro, I selected a business website sample. Category: ${category}. Budget level: ${budget}. Sample direction: ${sample.name}. Main conversion: ${sample.conversion}. Suggested scope: ${budgetPlan.scope}. Please guide me with the next step.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
}

function scoreBusinessMatch(item, query) {
  let score = 0;
  item.keywords.forEach((keyword) => {
    const cleanKeyword = normalizeQuery(keyword);
    if (query.includes(cleanKeyword)) score += cleanKeyword.includes(" ") ? 16 : 10;
  });
  if (/\b(website|site|landing page|online presence)\b/.test(query)) score += 12;
  if (/\b(lead|leads|enquiry|whatsapp|booking|appointment)\b/.test(query)) score += item.budget === "Starter Website" ? 8 : 12;
  if (/\b(automation|dashboard|chatbot|ai|system|crm)\b/.test(query)) score += item.budget === "Premium System" ? 18 : 6;
  if (/\b(grow|growth|seo|ads|social media|instagram|facebook)\b/.test(query)) score += item.budget === "Growth Website" ? 14 : 6;
  return score;
}

function renderBusinessMapperResult(match, alternatives, needsMoreDetail) {
  if (!businessMatchResult) return;
  if (needsMoreDetail) {
    businessMatchResult.innerHTML = `
      <span>Need a little more detail</span>
      <h4>Please add business type and goal.</h4>
      <p>Example: "I run a salon and want appointment enquiries" or "We need a school website for admissions".</p>
    `;
    businessMatchResult.hidden = false;
    return;
  }

  const ctaText = encodeURIComponent(
    `Hello Tivoro, I used the Smart Website Mapper. Recommended direction: ${match.category} - ${match.budget}. Reason: ${match.reason}. Please connect with me and guide the next step.`
  );
  const businessWhatsapp = `https://wa.me/${whatsappNumber}?text=${ctaText}`;

  businessMatchResult.innerHTML = `
    <span>Business Growth Roadmap</span>
    <h4>${match.category} • ${match.budget}</h4>
    <p>${match.reason}</p>
    <div class="course-match-chips">
      <strong>${match.confidence}% match</strong>
      <strong>${businessSampleData[match.category]?.conversion || "Enquiry flow"}</strong>
    </div>
    <p class="business-price-sync-note">Recommended website features are selected in the Price Builder. Tivoro can share matching client websites or upcoming project examples after reviewing your requirement.</p>
    ${alternatives.length ? `<div class="course-alternatives"><span>Also suitable</span>${alternatives.map((item) => `<button type="button" data-business-alt="${item.category}">${item.category}</button>`).join("")}</div>` : ""}
    ${recommendedPathBlock({
      title: "Your business direction is ready. Choose the next step that feels right.",
      copy: "Move to WhatsApp if you want us to review your requirement personally. Or review the selected website price and features first.",
      whatsappHref: businessWhatsapp,
      detailHref: "#website-price-builder",
      detailText: "Review Selected Price",
    })}
  `;
  businessMatchResult.hidden = false;
}

function matchBusinessFromText(text, preferredCategory = "") {
  const query = normalizeQuery(text);
  if (!query || query.length < 8) {
    renderBusinessMapperResult(null, [], true);
    return;
  }

  const ranked = businessMapperCatalog
    .map((item) => ({ ...item, score: scoreBusinessMatch(item, query) + (item.category === preferredCategory ? 50 : 0) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked[0];
  if (!best || best.score < 16) {
    renderBusinessMapperResult(null, [], true);
    return;
  }

  applyWebsiteFeatureRecommendation(query, best);
  renderBusinessMapperResult({ ...best, confidence: Math.max(62, Math.min(96, best.score + 44)) }, ranked.filter((item) => item.category !== best.category).slice(0, 2), false);
}

function setWebsiteFeatureByName(name, checked = true) {
  const input = [...websiteFeatureInputs].find((item) => item.dataset.featureName === name);
  if (input) input.checked = checked;
}

function clearWebsiteFeatureSelection() {
  websiteFeatureInputs.forEach((input) => {
    input.checked = false;
  });
  if (websiteExtraPages) websiteExtraPages.value = "0";
}

function revealSelectedFeatureCategories() {
  document.querySelectorAll(".feature-category-stack details").forEach((group) => {
    group.open = Boolean(group.querySelector("[data-website-feature]:checked"));
  });
}

function applyWebsiteFeatureRecommendation(query, match = {}) {
  if (!websitePricingBuilder) return;
  clearWebsiteFeatureSelection();
  const selected = new Set();
  const add = (name) => selected.add(name);
  const category = match.category || "";
  const budget = match.budget || "";

  if (budget === "Growth Website") {
    add("Services / pricing menu section");
    add("Local SEO starter setup");
    add("Analytics and enquiry tracking");
  }
  if (budget === "Premium System") {
    add("Services / pricing menu section");
    add("Local SEO starter setup");
    add("Analytics and enquiry tracking");
    add("Google Sheet integration");
  }

  if (/\b(gallery|portfolio|photo|image|images|work|projects|looks|listing|property|menu)\b/.test(query)) add("Advanced image gallery / portfolio");
  if (/\b(service|services|pricing|price|menu|package|packages|product|products|course|courses|program|programs)\b/.test(query)) add("Services / pricing menu section");
  if (/\b(faq|question|questions|admission|admissions|parent|parents|doubt|doubts)\b/.test(query)) add("FAQ section / FAQ page");
  if (/\b(appointment|booking|book|slot|reserve|reservation|visit|consultation|demo)\b/.test(query)) add("Appointment or booking flow");
  if (/\b(payment|pay|online payment|order|checkout|razorpay)\b/.test(query)) add("Payment collection setup");
  if (/\b(blog|blogs|update|updates|news|article|articles|story|stories)\b/.test(query)) add("Blog or updates section");
  if (/\b(seo|google|ranking|rank|search|local seo|near me|map|maps)\b/.test(query)) add("Local SEO starter setup");
  if (/\b(analytics|tracking|track|report|reports|dashboard|insight|insights)\b/.test(query)) add("Analytics and enquiry tracking");
  if (/\b(ai|bot|chatbot|assistant|faq bot)\b/.test(query)) add("AI Bot / AI FAQ chatbot");
  if (/\b(sheet|sheets|excel|google sheet|google form|data|database|records)\b/.test(query)) add("Google Sheet integration");
  if (/\b(lead|leads|enquiry|enquiries|funnel|customer|customers|ads|campaign)\b/.test(query)) add("Lead generation tools");
  if (/\b(certificate|certificates)\b/.test(query)) add("Certificate generation");
  if (/\b(pdf|download|report|brochure|invoice)\b/.test(query)) add("PDF generation");
  if (/\b(whatsapp|automation|label|labels|follow up|followup)\b/.test(query)) add("WhatsApp automation / lead labels");
  if (/\b(instagram|facebook|social|social media|reel|reels|post|posts)\b/.test(query)) add("Social media launch kit");

  if (/School|College|Coaching/.test(category)) {
    add("FAQ section / FAQ page");
    add("Lead generation tools");
    add("Google Sheet integration");
    add("Blog or updates section");
  }
  if (/Salon|Clinic/.test(category)) {
    add("Services / pricing menu section");
    add("Appointment or booking flow");
    add("Advanced image gallery / portfolio");
    add("WhatsApp automation / lead labels");
  }
  if (/Cafe|Chai|Retail/.test(category)) {
    add("Services / pricing menu section");
    add("Advanced image gallery / portfolio");
    add("Payment collection setup");
    add("WhatsApp automation / lead labels");
  }
  if (/Real estate/.test(category)) {
    add("Advanced image gallery / portfolio");
    add("Lead generation tools");
    add("Analytics and enquiry tracking");
    add("Appointment or booking flow");
  }
  if (/NGO/.test(category)) {
    add("Blog or updates section");
    add("PDF generation");
    add("Google Sheet integration");
  }
  if (/Startup|Creator/.test(category)) {
    add("Analytics and enquiry tracking");
    add("Lead generation tools");
    add("Social media launch kit");
  }

  selected.forEach((name) => setWebsiteFeatureByName(name, true));

  if (websiteExtraPages) {
    let pages = budget === "Premium System" ? 5 : budget === "Growth Website" ? 3 : 1;
    if (/School|College|Coaching|Real estate/.test(category)) pages = Math.max(pages, 4);
    if (/Salon|Clinic|Cafe|Retail|NGO|Startup/.test(category)) pages = Math.max(pages, 2);
    if (/\b(1 page|one page|single page|basic|starter)\b/.test(query)) pages = 0;
    websiteExtraPages.value = String(Math.max(0, Math.min(20, pages)));
  }

  revealSelectedFeatureCategories();
  updateWebsitePriceBuilder();
}

function formatIndianPrice(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

function selectedWebsiteFeatures() {
  return [...websiteFeatureInputs]
    .filter((input) => input.checked)
    .map((input) => ({
      id: input.dataset.featureName || "Selected feature",
      name: input.dataset.featureName || "Selected feature",
      price: Number(input.dataset.featurePrice || 0),
    }));
}

function updateWebsitePriceBuilder() {
  if (!websitePricingBuilder) return;
  const basePrice = 7999;
  const extraPages = Math.max(0, Math.min(20, Number(websiteExtraPages?.value || 0)));
  if (websiteExtraPages && String(extraPages) !== websiteExtraPages.value) websiteExtraPages.value = String(extraPages);
  const extraPagePrice = extraPages * 1000;
  const features = selectedWebsiteFeatures();
  const featureTotal = features.reduce((sum, item) => sum + item.price, 0);
  const total = basePrice + extraPagePrice + featureTotal;

  if (websiteTotal) websiteTotal.textContent = formatIndianPrice(total);
  if (mapperTotal) mapperTotal.textContent = formatIndianPrice(total);
  if (websiteSummary) {
    const featureCount = features.length;
    websiteSummary.textContent = `${featureCount ? `${featureCount} add-on${featureCount > 1 ? "s" : ""}` : "Base website"} selected${extraPages ? ` with ${extraPages} extra page${extraPages > 1 ? "s" : ""}` : ""}.`;
  }
  if (mapperSummary) {
    const featureCount = features.length;
    mapperSummary.textContent = featureCount || extraPages
      ? `${featureCount} add-on${featureCount === 1 ? "" : "s"}${extraPages ? ` + ${extraPages} page${extraPages > 1 ? "s" : ""}` : ""} recommended.`
      : "Base website selected. Type requirement to auto-select features.";
  }
  if (mapperSelected) {
    mapperSelected.innerHTML = features.length
      ? features.slice(0, 5).map((feature) => `<span>${feature.name}</span>`).join("") + (features.length > 5 ? `<strong>+${features.length - 5} more</strong>` : "")
      : `<em>Base website selected</em>`;
  }
  if (websiteBreakdown) {
    const addonChips = features.length
      ? features
          .map(
            (feature) => `
              <span class="selected-addon-chip" title="${feature.name}">
                <span>${feature.name}</span>
                <strong>${formatIndianPrice(feature.price)}</strong>
                <button type="button" data-remove-website-feature="${feature.id}" aria-label="Remove ${feature.name}">X</button>
              </span>
            `
          )
          .join("")
      : `<em>No add-ons selected yet</em>`;
    websiteBreakdown.innerHTML = `
      <div class="price-core-lines">
        <article><span>Base website</span><strong>${formatIndianPrice(basePrice)}</strong></article>
        ${extraPages ? `<article><span>${extraPages} extra page${extraPages > 1 ? "s" : ""}</span><strong>${formatIndianPrice(extraPagePrice)}</strong></article>` : ""}
      </div>
      <div class="selected-addon-cloud">
        <small>Selected add-ons</small>
        <div>${addonChips}</div>
      </div>
    `;
  }
  if (websitePricingWhatsapp) {
    const featureText = features.length ? features.map((item) => `${item.name} (${formatIndianPrice(item.price)})`).join(", ") : "No add-ons selected";
    const message = encodeURIComponent(
      `Hello Tivoro, I used the Website Price Builder. Estimated cost: ${formatIndianPrice(total)}. Base: 1-page website with business details, Google Map, basic images and WhatsApp lead form. Extra pages: ${extraPages}. Selected add-ons: ${featureText}. Please review my selection and suggest the best deal / smartest cost-saving option.`
    );
    websitePricingWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  }
}

function applyWebsiteQuotePreset(preset) {
  if (!websitePricingBuilder) return;
  clearWebsiteFeatureSelection();
  quotePresetButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.quotePreset === preset));

  const presetFeatures = {
    starter: [],
    leads: [
      "Services / pricing menu section",
      "Appointment or booking flow",
      "Local SEO starter setup",
      "Analytics and enquiry tracking",
      "Lead generation tools",
    ],
    automation: [
      "FAQ section / FAQ page",
      "AI Bot / AI FAQ chatbot",
      "Google Sheet integration",
      "PDF generation",
      "WhatsApp automation / lead labels",
    ],
  };

  (presetFeatures[preset] || []).forEach((name) => setWebsiteFeatureByName(name, true));
  if (websiteExtraPages) {
    websiteExtraPages.value = preset === "leads" ? "2" : preset === "automation" ? "3" : "0";
  }
  revealSelectedFeatureCategories();
  updateWebsitePriceBuilder();
}

function filterTemplateCards() {
  if (!templateCards.length) return;
  const activeFilter = document.querySelector("[data-template-filter].is-active")?.dataset.templateFilter || "all";
  const activeBudget = templateBudget?.value || "all";
  templateCards.forEach((card) => {
    const industryMatch = activeFilter === "all" || card.dataset.industry === activeFilter;
    const budgetMatch = activeBudget === "all" || card.dataset.budget === activeBudget;
    card.hidden = !(industryMatch && budgetMatch);
  });
}

function normalizeWebsiteUrl(value) {
  const trimmed = value.trim();
  if (!trimmed || /\s/.test(trimmed)) {
    throw new Error("Website URL cannot contain spaces.");
  }
  if (/[@]/.test(trimmed)) {
    throw new Error("Please enter a website, not an email address.");
  }
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
  const labels = hostname.split(".");
  const tld = labels[labels.length - 1] || "";
  const hasValidLabels = labels.length >= 2 && labels.every((label) => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
  const hasValidTld = /^[a-z]{2,24}$/i.test(tld);
  if (!hasValidLabels || !hasValidTld) {
    throw new Error("Please enter a real website domain.");
  }
  return url;
}

function withTimeout(task, ms) {
  const controller = new AbortController();
  let timeout;
  const timeoutPromise = new Promise((_, reject) => {
    timeout = setTimeout(() => {
      controller.abort();
      reject(new Error("request-timeout"));
    }, ms);
  });
  return {
    signal: controller.signal,
    run: Promise.race([task(controller.signal), timeoutPromise]).finally(() => clearTimeout(timeout)),
  };
}

function renderHealthError(title, message) {
  if (!healthResult) return;
  healthResult.innerHTML = `<div class="health-error"><strong>${title}</strong><span>${message}</span></div>`;
  healthResult.hidden = false;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTrustError(title, message, action = null) {
  if (!trustResult) return;
  const actionMarkup = action?.href
    ? `<a class="primary-button trust-error-action" href="${escapeHtml(action.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(action.label || "Continue on WhatsApp")}</a>`
    : "";
  trustResult.innerHTML = `<div class="health-error trust-error"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>${actionMarkup}</div>`;
  trustResult.hidden = false;
}

function trustManualReviewLink({ businessName, city, state }) {
  const text = encodeURIComponent(
    `Hello Tivoro, I tried the Digital Trust Score. Please review my business manually. Business: ${businessName}. Location: ${city}, ${state}.`
  );
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

function prefillTrustFormFromUrl() {
  if (!trustForm) return;
  const params = new URLSearchParams(window.location.search);
  ["businessName", "city", "state"].forEach((name) => {
    const value = params.get(name);
    const input = trustForm.querySelector(`[name="${name}"]`);
    if (value && input && !input.value) input.value = value;
  });
}

function correctTrustScoreAnchorOffset() {
  if (window.location.hash !== "#digital-trust-score") return;
  const section = document.querySelector("#digital-trust-score");
  if (!section) return;
  window.setTimeout(() => {
    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 0;
    const y = window.scrollY + section.getBoundingClientRect().top - headerHeight - 14;
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  }, 80);
}

function clampScore(score) {
  return Math.max(0, Math.min(100, Math.round(Number(score) || 0)));
}

async function runServerWebsiteCheck(url) {
  if (window.location.protocol === "file:") {
    throw new Error("local-server-required");
  }
  const endpoint = new URL("/api/website-check", window.location.origin);
  endpoint.searchParams.set("url", url.href);
  const request = withTimeout((signal) => fetch(endpoint, { cache: "no-store", signal }), 50000);
  const response = await request.run;
  const data = await response.json().catch(() => null);
  if (!response.ok || data?.error) {
    throw new Error(data?.message || "Website could not be checked.");
  }
  return data;
}

function scoreLabel(score) {
  if (score >= 88) return "Excellent";
  if (score >= 74) return "Good";
  if (score >= 60) return "Needs attention";
  return "Priority fix";
}

function scoreTone(score) {
  if (score >= 88) return "is-excellent";
  if (score >= 74) return "is-good";
  if (score >= 60) return "is-attention";
  return "is-critical";
}

function renderHealthScanning(domain) {
  if (!healthResult) return;
  healthResult.innerHTML = `
    <div class="health-scanning">
      <div class="scan-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div>
        <span>Checking ${domain}</span>
        <h3>Running Tivoro website readiness check...</h3>
        <p>This may take a little time because Tivoro is inspecting live website HTML, SEO basics, headings, images and enquiry-readiness signals.</p>
      </div>
      <div class="scan-step-list">
        <span>Live website check</span>
        <span>Meta tag review</span>
        <span>Heading structure</span>
        <span>Image alt check</span>
        <span>Contact readiness</span>
      </div>
      <div class="scan-progress"><i></i></div>
    </div>
  `;
  healthResult.hidden = false;
}

function renderHealthResult(audit, rawUrl) {
  if (!healthResult) return;
  const scores = [
    ["Mobile Readiness", audit.mobile, "Viewport, language, image and mobile-friendly page signals"],
    ["Response Speed", audit.speed, "Initial HTML response time and page size signals"],
    ["SEO Readiness", audit.seo, "Meta tags, structured data, headings and image health"],
    ["Trust & Contact", audit.security, "HTTPS, WhatsApp, phone, form, map and enquiry signals"],
  ];
  const seoHealth = audit.seoHealth || {};
  healthResult.innerHTML = `
    <div class="health-result-head">
      <span>Website readiness preview</span>
      <h3>${audit.domain}</h3>
      <p>${audit.leadPotential}</p>
      <div class="health-overall"><strong>${audit.overall}</strong><span>${audit.priority}</span></div>
    </div>
    <div class="seo-health-overview">
      <div>
        <span>SEO Health Overview</span>
        <strong>Overall: ${seoHealth.overall ?? audit.seo}</strong>
      </div>
      <article><small>Meta Tags</small><b>${seoHealth.metaTags ?? 0}</b></article>
      <article><small>Structured Data</small><b>${seoHealth.structuredData ?? 0}</b></article>
      <article><small>Headings</small><b>${seoHealth.headings ?? 0}</b></article>
      <article><small>Images</small><b>${seoHealth.images ?? 0}</b></article>
    </div>
    <div class="health-score-grid">
      ${scores
        .map(
          ([label, score, help]) => `<article class="health-score-card ${scoreTone(score)}" style="--score:${score}%"><div class="health-score-top"><span>${label}</span><small>${scoreLabel(score)}</small></div><div class="health-score-value"><strong>${score}</strong><em>/100</em></div><p>${help}</p><div class="health-score-bar" aria-hidden="true"><i></i></div></article>`
        )
        .join("")}
    </div>
    <div class="health-insight-grid">
      <div class="health-gbp-card">
        <span>Google Business Profile Status</span>
        <strong>${audit.googleStatus}</strong>
        <p>A complete Google profile helps local customers find directions, reviews, opening hours and direct call buttons.</p>
      </div>
      <div class="health-gbp-card">
        <span>Lead Readiness</span>
        <strong>Manual journey check recommended</strong>
        <p>Automated checks can detect contact signals, but we still review the actual WhatsApp, booking, call, map or enquiry journey manually for business growth.</p>
      </div>
    </div>
    <div class="health-missing-card">
      <span>Issues found</span>
      <ul>${audit.missing.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="health-missing-card health-recommend-card">
      <span>Recommendations</span>
      <ul>${(audit.recommendations || []).map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="health-action-plan">
      <span>Suggested Tivoro action plan</span>
      <div><strong>Step 1</strong><p>Fix SEO foundation: title, description, robots, canonical, heading order and image alt text.</p></div>
      <div><strong>Step 2</strong><p>Improve trust and enquiry flow with WhatsApp, phone, map, form, reviews and visible call-to-action buttons.</p></div>
      <div><strong>Step 3</strong><p>Add structured data, local service pages and social sharing tags so the website becomes easier to understand and share.</p></div>
    </div>
    ${recommendedPathBlock({
      title: "Your website improvement path is ready. Choose the next step that feels right.",
      copy: "Move to WhatsApp if you want us to review the website personally. Or explore business services and pricing before deciding.",
      whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hello Tivoro, I checked my website readiness. Website: ${rawUrl}. Source: ${audit.source || "Tivoro Website Readiness Checker"}. Scores - Mobile: ${audit.mobile}, Speed: ${audit.speed}, SEO: ${audit.seo}, Trust: ${audit.security}. Google Business: ${audit.googleStatus}. Please suggest improvements.`
      )}`,
      detailHref: "business.html?profile=business#website-price-builder",
      detailText: "Explore Business Services",
    })}
  `;
  healthResult.hidden = false;
}

function renderTrustScanning(name, city, state) {
  if (!trustResult) return;
  trustResult.innerHTML = `
    <div class="health-scanning trust-scanning">
      <div class="scan-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div>
        <span>Checking ${escapeHtml(name)} in ${escapeHtml(city)}, ${escapeHtml(state)}</span>
        <h3>Generating live Digital Trust Score...</h3>
        <p>Tivoro is inspecting matching live website signals from the server, just like Website Checker.</p>
      </div>
      <div class="scan-step-list">
        <span>Website lookup</span>
        <span>Brand and location match</span>
        <span>Website presence</span>
        <span>Social proof signals</span>
        <span>Trust recommendations</span>
      </div>
      <div class="scan-progress"><i></i></div>
    </div>
  `;
  trustResult.hidden = false;
}

async function runServerTrustScore({ businessName, city, state }) {
  if (window.location.protocol === "file:") {
    throw new Error("local-server-required");
  }
  const endpoint = new URL("/api/trust-score", window.location.origin);
  endpoint.searchParams.set("businessName", businessName);
  endpoint.searchParams.set("city", city);
  endpoint.searchParams.set("state", state);
  const request = withTimeout((signal) => fetch(endpoint, { cache: "no-store", signal }), 60000);
  const response = await request.run;
  const data = await response.json().catch(() => null);
  if (data?.error === "missing-google-places-key") {
    const error = new Error("The local preview is still serving the older Google lookup response.");
    error.code = "stale-google-endpoint";
    throw error;
  }
  if (!response.ok || data?.error) {
    const error = new Error(data?.message || "Live Trust Score could not be generated.");
    error.code = data?.error || "trust-score-error";
    throw error;
  }
  return data;
}

function renderTrustScoreReport(report, formValues) {
  if (!trustResult) return;
  const factors = report.factors || [];
  const business = report.business || {};
  const match = report.match || {};
  const facts = report.facts || {};
  const matchedLocation = Array.isArray(match.matchedLocationTokens) ? match.matchedLocationTokens.join(", ") : "";
  const overall = clampScore(report.overall);
  trustResult.innerHTML = `
    <div class="trust-score-meter trust-live-meter">
      <div class="trust-score-ring" style="--score-angle: ${overall * 3.6}deg">
        <strong>${overall}</strong>
        <span>/100</span>
      </div>
      <div>
        <span>Live report</span>
        <h3>${escapeHtml(business.name || formValues.businessName)}</h3>
        <p>${escapeHtml(report.summary || "Digital Trust Score generated from public signals.")}</p>
        <div class="trust-business-facts">
          ${business.address ? `<strong>${escapeHtml(business.address)}</strong>` : ""}
          ${match.confidence ? `<strong>${match.verified ? `Location evidence found: ${matchedLocation || "Matched"}` : "Manual verification needed"} (${escapeHtml(match.confidence)}%)</strong>` : ""}
          ${typeof facts.supportPagesChecked === "number" ? `<strong>Contact/About pages checked: ${escapeHtml(facts.supportPagesChecked)}</strong>` : ""}
          ${business.website ? `<a href="${escapeHtml(business.website)}" target="_blank" rel="noopener noreferrer">Website</a>` : ""}
          ${business.googleUrl ? `<a href="${escapeHtml(business.googleUrl)}" target="_blank" rel="noopener noreferrer">Google Profile</a>` : ""}
        </div>
      </div>
    </div>
    <div class="trust-factor-table" role="table" aria-label="Live Digital Trust Score breakdown">
      <div class="trust-factor-head" role="row">
        <span role="columnheader">Trust factor</span>
        <span role="columnheader">Weight</span>
        <span role="columnheader">Score</span>
        <span role="columnheader">Observation</span>
      </div>
      ${factors
        .map(
          (factor) => `
            <div role="row">
              <strong>${escapeHtml(factor.label)}</strong>
              <span>${escapeHtml(factor.weight)}</span>
              <b>${escapeHtml(factor.score)}/${escapeHtml(factor.weight)}</b>
              <p>${escapeHtml(factor.observation)}</p>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="health-missing-card health-recommend-card">
      <span>Recommendations</span>
      <ul>${(report.recommendations || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("") || "<li>Maintain your current digital trust signals and keep improving proof content.</li>"}</ul>
    </div>
    <div class="trust-score-services">
      <span>Natural next steps</span>
      ${(report.services || ["Website development", "Branding", "SEO", "AI automation", "CRM", "Digital marketing"]).map((item) => `<strong>${escapeHtml(item)}</strong>`).join("")}
    </div>
    ${recommendedPathBlock({
      title: "Your Digital Trust Score is ready. Choose the next step that feels right.",
      copy: "Move to WhatsApp if you want us to review this report personally. Or explore website pricing if you already know what you want to improve.",
      whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Hello Tivoro, I generated my Digital Trust Score. Business: ${business.name || formValues.businessName}, Location: ${formValues.city}, ${formValues.state}, Score: ${overall}/100. Please review and suggest improvements.`
      )}`,
      detailHref: "business.html?profile=business#website-price-builder",
      detailText: "Explore Website Pricing",
    })}
  `;
  trustResult.hidden = false;
}

function guidedRecommendation(type, data) {
  if (type === "student") {
    const stage = data.get("stage");
    const interest = data.get("interest");
    const goal = data.get("goal");
    if (interest.includes("Scratch") || interest.includes("Block")) return ["Scratch, Scratch Jr & App Starter", "Start with block-based logic, visual coding, app thinking, games and digital creativity. Best outcome: confidence with computers and a mini project demo."];
    if (interest.includes("App building")) return ["App Building Track", "Learn app screens, logic, interactions and simple project demos before moving deeper into coding."];
    if (interest.includes("C programming") || interest.includes("C++") || interest.includes("Java programming")) return ["Programming Foundation Track", "Build syntax confidence, problem solving and project practice through C, C++ or Java based on the student's goal."];
    if (interest.includes("JavaScript")) return ["JavaScript & Web Builder", "Build websites, browser interactions, mini apps and project demos with JavaScript foundations."];
    if (stage.includes("3-5")) return ["Scratch, Scratch Jr & App Starter", "Start with visual logic, puzzles, games, app building and digital creativity. Best outcome: confidence with computers and a mini game/project demo."];
    if (stage.includes("6-8")) return ["Python, JavaScript & Web Basics", "Build Python foundations, JavaScript basics, small games and simple websites. Best outcome: 3-4 mini projects and presentation confidence."];
    if (stage.includes("9-12") && interest.includes("AI")) return ["AI Champions Program", "Learn Python basics, prompt engineering, memory chatbots, AI agents and present an AI app on Demo Day."];
    if (stage.includes("College")) return ["Internship & Career Lab", "Focus on final year project, GitHub, resume, interview preparation and internship-style live project work."];
    if (goal.includes("Portfolio")) return ["Portfolio Builder Track", "Build websites, apps and GitHub projects that can be shown in interviews or college reviews."];
    return ["Language, Web & AI Builder", "A balanced path covering Python, JavaScript, C/C++/Java options, websites, AI tools and live project training."];
  }

  if (type === "parent") {
    const stage = data.get("stage");
    const confidence = data.get("confidence");
    const priority = data.get("priority");
    if (priority.includes("screen")) return ["Creative Coding Starter", "This converts screen interest into structured logic, creativity and project-based learning."];
    if (confidence.includes("Needs confidence")) return ["Beginner Confidence Track", "Start with gentle 1:1 guidance, basic computer confidence, creative coding and small wins."];
    if (stage.includes("9-12")) return ["AI Champions or Web App Builder", "Good fit for teens who need future skills, project outcomes and demo confidence."];
    if (stage.includes("College")) return ["CareerHub Project Plan", "Best for project, internship, resume, GitHub and interview preparation."];
    return ["Guided Course Recommendation", "A counselling call will help confirm the best course mode: 1:1, group or bootcamp."];
  }

  if (type === "business") {
    const category = data.get("category");
    const presence = data.get("presence");
    const goal = data.get("goal");
    if (presence.includes("No website") || goal.includes("Online identity")) return ["Digital Presence Package", `For ${category}, start with website, branding starter kit, Google Business Profile and local SEO.`];
    if (goal.includes("leads")) return ["Growth & Lead Gen Package", `For ${category}, build a landing page, WhatsApp funnel, lead form and follow-up process.`];
    if (goal.includes("Instagram")) return ["Social Growth Package", "Instagram/Facebook handling, captions, content calendar, reel ideas and campaign planning."];
    if (goal.includes("Booking")) return ["Booking + Lead System", `Create a booking planner and enquiry flow for ${category}, connected to WhatsApp and lead tracking.`];
    if (goal.includes("AI")) return ["AI Systems Package", "AI chatbot, automation, Google Sheet workflow and dashboard consulting."];
    return ["Complete Digital Growth Package", "Website, social, Google Business, lead funnel and automation planning together."];
  }

  if (type === "institution") {
    const category = data.get("category");
    const goal = data.get("goal");
    const size = data.get("size");
    if (goal.includes("project")) return ["College Project Sprint", "Final year project, GitHub, portfolio, viva preparation and internship readiness support."];
    if (goal.includes("admission")) return ["Digital Admission System", "Admission page, enquiry form, FAQ, chatbot, WhatsApp flow and lead tracking."];
    if (goal.includes("Hackathon")) return ["Hackathon / Build Day", `A practical event format for ${category} with mentoring, demo day and certificates.`];
    if (goal.includes("Coding club")) return ["Tivoro Coding Club", `Monthly coding, AI and project sessions for ${size}.`];
    return ["Institution Workshop Program", `${goal} for ${category}, planned as a practical program with activities, certificates and follow-up guidance.`];
  }

  return ["Book a Guidance Slot", "We will understand the requirement and suggest the right plan."];
}

function createTivoroBot() {
  const bot = document.createElement("div");
  bot.className = "tivoro-bot";
  bot.innerHTML = `
    <button class="tivoro-bot-toggle" type="button" aria-expanded="false" aria-label="Open assistant">
      <span class="tivoro-bot-robot" aria-hidden="true">
        <span class="tivoro-bot-cloud"></span>
        <span class="tivoro-bot-face">
          <span class="tivoro-bot-eye"></span>
          <span class="tivoro-bot-eye"></span>
          <span class="tivoro-bot-mouth"></span>
        </span>
        <span class="tivoro-bot-body">
          <span class="tivoro-bot-body-light"></span>
        </span>
        <span class="tivoro-bot-arm is-left"></span>
        <span class="tivoro-bot-arm is-right"></span>
        <span class="tivoro-bot-leg is-left"></span>
        <span class="tivoro-bot-leg is-right"></span>
      </span>
    </button>
    <section class="tivoro-bot-panel" hidden aria-label="Assistant">
      <div class="tivoro-bot-head">
        <div><span>Quick Help</span><strong>Tell me what you need. I will guide you to the right path.</strong></div>
        <button type="button" aria-label="Close Tivoro AI">X</button>
      </div>
      <div class="tivoro-bot-messages" aria-live="polite"></div>
      <div class="tivoro-bot-quick" aria-label="Quick Tivoro questions"></div>
      <form class="tivoro-bot-form">
        <input type="text" placeholder="Ask: parent, student or business..." aria-label="Ask Tivoro AI a question" />
        <button type="submit">Ask</button>
      </form>
      <a class="tivoro-bot-whatsapp" href="https://wa.me/${whatsappNumber}?text=Hello%20Tivoro%2C%20I%20want%20help%20choosing%20the%20right%20Tivoro%20AI%20path." target="_blank" rel="noopener noreferrer">Talk to Tivoro on WhatsApp</a>
    </section>
  `;
  document.body.appendChild(bot);

  const toggle = bot.querySelector(".tivoro-bot-toggle");
  const panel = bot.querySelector(".tivoro-bot-panel");
  const closeButton = bot.querySelector(".tivoro-bot-head button");
  const messages = bot.querySelector(".tivoro-bot-messages");
  const quick = bot.querySelector(".tivoro-bot-quick");
  const form = bot.querySelector(".tivoro-bot-form");
  const input = bot.querySelector(".tivoro-bot-form input");
  const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");

  if (!motionQuery?.matches) {
    let lastScrollY = window.scrollY;
    let targetY = 0;
    let currentY = 0;
    let targetTilt = 0;
    let currentTilt = 0;
    let followFrame = 0;

    const renderScrollFollow = () => {
      currentY += (targetY - currentY) * 0.12;
      currentTilt += (targetTilt - currentTilt) * 0.14;
      bot.style.setProperty("--tivoro-bot-follow-y", `${currentY.toFixed(2)}px`);
      bot.style.setProperty("--tivoro-bot-tilt", `${currentTilt.toFixed(2)}deg`);

      if (Math.abs(targetY - currentY) > 0.15 || Math.abs(targetTilt - currentTilt) > 0.08) {
        followFrame = window.requestAnimationFrame(renderScrollFollow);
      } else {
        followFrame = 0;
      }
    };

    const startScrollFollow = () => {
      if (!followFrame) followFrame = window.requestAnimationFrame(renderScrollFollow);
    };

    window.addEventListener(
      "scroll",
      () => {
        if (bot.classList.contains("is-open")) return;
        const delta = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        targetY = Math.max(-18, Math.min(18, delta * 0.35));
        targetTilt = Math.max(-5, Math.min(5, delta * 0.08));
        startScrollFollow();
        window.clearTimeout(bot.scrollFollowTimer);
        bot.scrollFollowTimer = window.setTimeout(() => {
          targetY = 0;
          targetTilt = 0;
          startScrollFollow();
        }, 160);
      },
      { passive: true }
    );

    const mascotMoods = ["is-working", "is-excited", "is-dancing"];
    let moodIndex = 0;
    window.setInterval(() => {
      if (bot.classList.contains("is-open")) return;
      bot.classList.remove(...mascotMoods);
      bot.classList.add(mascotMoods[moodIndex % mascotMoods.length]);
      moodIndex += 1;
      window.setTimeout(() => bot.classList.remove(...mascotMoods), 2400);
    }, 6800);
  }

  function addMessage(text, type = "bot") {
    const message = document.createElement("div");
    message.className = `tivoro-bot-message is-${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function answerQuestion(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    addMessage(cleanQuestion, "user");
    const query = cleanQuestion.toLowerCase();
    if (query.includes("start tivoro") || query === "i am a parent" || query === "i am a student" || query === "i am a business owner" || query.includes("show detailed")) {
      if (query.includes("parent")) {
        addMessage("Best next step: open Tivoro AI in Parent mode for a quick recommendation, or use the Parents page if you already want the detailed course finder.", "bot");
        return;
      }
      if (query.includes("student")) {
        addMessage("Best next step: open Tivoro AI in Student mode for a skill mission, use the Students page for coding, AI, projects and Future Role Finder, or open Career for campus ambassador and student role opportunities.", "bot");
        return;
      }
      if (query.includes("business")) {
        addMessage("Best next step: open Tivoro AI in Business mode for a growth roadmap, or use the Business page for website pricing, demos, checker and automation options.", "bot");
        return;
      }
      if (query.includes("show detailed")) {
        addMessage("Detailed pages: Students for courses and career matcher, Career for campus ambassador and student roles, Parents for child course guidance, Business for websites and digital growth tools, About for founders, FAQ for common questions, and Book Slot for WhatsApp discussion.", "bot");
        return;
      }
      addMessage("Start with the Tivoro AI button on the homepage. It gives the shortest path: choose Student, Parent or Business, answer a few questions, then move to WhatsApp or explore the detailed page.", "bot");
      return;
    }
    if (query.includes("whatsapp") || query.includes("talk")) {
      addMessage("You can use the WhatsApp button below. We will understand your need first and guide only if the service genuinely fits.", "bot");
      return;
    }
    const ranked = tivoroBotAnswers
      .map((item) => ({
        item,
        score: item.keywords.reduce((score, keyword) => score + (query.includes(keyword) ? 1 : 0), 0),
      }))
      .sort((a, b) => b.score - a.score);
    const best = ranked[0];
    addMessage(
      best?.score
        ? best.item.answer
        : "The cleanest path is to start with Tivoro AI. It will ask whether you are a student, parent or business owner, then create a simple roadmap. You can also use the Explore links on the homepage for detailed pages.",
      "bot"
    );
  }

  function setBotOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    bot.classList.toggle("is-open", open);
    if (open) input.focus({ preventScroll: true });
  }

  addMessage("Hi, I am Tivoro AI. I can help you choose the right path without browsing the full website.");

  tivoroBotQuickQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => answerQuestion(question));
    quick.appendChild(button);
  });

  toggle.addEventListener("click", () => setBotOpen(panel.hidden));
  closeButton.addEventListener("click", () => setBotOpen(false));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    answerQuestion(input.value);
    input.value = "";
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setBotOpen(false);
  });
}

function scoreAmbassadorChallenge(data) {
  const scoring = {
    motivation: {
      "I want to build leadership experience": 22,
      "I want to help students learn future skills": 24,
      "I want internship and project exposure": 20,
      "I want to grow my personal brand": 16,
    },
    communication: {
      "Listen first, then suggest a simple starting path": 25,
      "Send them every course link": 10,
      "Ask them to decide later": 8,
      "Tell them coding is only for experts": 0,
    },
    initiative: {
      "Create a student list and plan outreach": 25,
      "Wait for someone to tell me what to do": 4,
      "Post once and stop": 8,
      "Only invite close friends": 10,
    },
    quality: {
      "Trustworthy communication": 18,
      "Only social media followers": 8,
      "Speaking loudly": 6,
      "Working without updates": 4,
    },
    digital: {
      "I can use Canva, forms, WhatsApp and basic social tools": 18,
      "I use WhatsApp only": 9,
      "I avoid digital tools": 2,
      "I need support but can learn fast": 14,
    },
    task: {
      "Explain Tivoro to 5 students and collect genuine feedback": 20,
      "Forward one message randomly": 5,
      "Ask someone else to promote": 2,
      "Only share if someone pays first": 0,
    },
  };
  const total = Object.entries(scoring).reduce((sum, [key, values]) => sum + (values[data.get(key)] || 0), 0);
  return Math.min(100, Math.round((total / 130) * 100));
}

function ambassadorBand(score) {
  if (score >= 86) return ["Strong ambassador profile", "You show strong initiative, communication maturity and campus leadership potential."];
  if (score >= 72) return ["Promising applicant", "You have a good starting profile. A short interview can help us understand your campus reach and confidence."];
  if (score >= 58) return ["Needs guided onboarding", "You may be suitable after a short training task focused on communication, planning and reporting."];
  return ["Training recommended first", "Start with a guided Tivoro task before applying for an active ambassador role."];
}

async function renderAmbassadorResult(data) {
  if (!ambassadorResult) return;
  const score = scoreAmbassadorChallenge(data);
  const [title, description] = ambassadorBand(score);
  const applicantName = String(data.get("applicantName") || "Applicant").trim();
  const task = data.get("task");
  const whatsappText = encodeURIComponent(
    `Hello Tivoro, I completed the Campus Ambassador assessment. Name: ${applicantName}. Institution: ${data.get("campusName")}. Mobile: ${data.get("mobile")}. Score: ${score}%. Result: ${title}. Please guide me for the next step.`
  );
  ambassadorResult.innerHTML = `
    <div class="ambassador-result-head">
      <div class="ambassador-result-copy">
        <span>Assessment result</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <div class="ambassador-score-card">
        <strong>${score}%</strong>
        <small>Readiness score</small>
      </div>
    </div>
    <div class="ambassador-next-grid">
      <article><span>Recommended task</span><p>${task}</p></article>
      <article><span>What we will check next</span><p>Communication clarity, honesty, campus reach, reporting discipline and willingness to learn.</p></article>
      <article><span>Next step</span><p>Share your result on WhatsApp so our team can review your ambassador application.</p></article>
    </div>
    <a class="primary-button role-whatsapp" href="https://wa.me/${whatsappNumber}?text=${whatsappText}" target="_blank" rel="noopener noreferrer">Send Ambassador Result on WhatsApp</a>
  `;
  ambassadorResult.hidden = false;
  await submitTivoroLead("child", {
    formType: "Campus Ambassador Challenge",
    score,
    result: title,
    ...formDataToObject(data),
  });
  submitAmbassadorChallengeToGoogleForm(data);
}

function selectedRoleSkills() {
  return [...document.querySelectorAll("[data-role-skill].is-selected")].map((button) => button.dataset.roleSkill);
}

function scoreCareerRole(role, answers, selectedSkills) {
  const combined = `${answers.branch} ${answers.confidence} ${answers.interest} ${answers.workStyle} ${answers.strength} ${answers.goal} ${selectedSkills.join(" ")}`.toLowerCase();
  let score = 48;
  role.signals.forEach((signal) => {
    if (combined.includes(signal.toLowerCase())) score += 8;
  });
  role.tags.forEach((tag) => {
    if (selectedSkills.includes(tag)) score += 9;
  });
  if (answers.confidence.includes("Built small projects") || answers.confidence.includes("Preparing")) score += 5;
  if (answers.goal.includes("confused")) score -= 2;
  return Math.max(54, Math.min(96, score));
}

function roleFitLabel(score) {
  if (score >= 86) return "Strong direction";
  if (score >= 74) return "Good starting fit";
  return "Explore with guidance";
}

function renderRoleMatcherResult(data) {
  if (!roleResult) return;
  const answers = {
    studentName: String(data.get("studentName") || "Student").trim(),
    year: String(data.get("year") || ""),
    branch: String(data.get("branch") || ""),
    confidence: String(data.get("confidence") || ""),
    interest: String(data.get("interest") || ""),
    workStyle: String(data.get("workStyle") || ""),
    strength: String(data.get("strength") || ""),
    goal: String(data.get("goal") || ""),
  };
  const skills = selectedRoleSkills();
  const ranked = careerRoleData
    .map((role) => ({ ...role, score: scoreCareerRole(role, answers, skills) }))
    .sort((a, b) => b.score - a.score);
  const top = ranked[0];
  const alternates = ranked.slice(0, 3);
  const skillFocus = top.skills.slice(0, 3);
  const whatsappText = encodeURIComponent(
    `Hello Tivoro, I used Future Role Finder. Name: ${answers.studentName}. Year: ${answers.year}. Branch: ${answers.branch}. Suggested role: ${top.title}. Goal: ${answers.goal}. Please guide me for the next step.`
  );
  const roleWhatsapp = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  roleResult.innerHTML = `
    <div class="role-result-head">
      <span>Future role direction</span>
      <h3>${top.title}</h3>
      <p>${answers.studentName}, your answers suggest this can be a strong starting direction. This is not a final career decision, but a practical path to begin projects, portfolio and interviews.</p>
      <div><strong>${top.score}%</strong><em>${roleFitLabel(top.score)}</em></div>
    </div>
    <div class="role-match-grid">
      ${alternates
        .map((role) => `<article><span>${role.score}%</span><strong>${role.title}</strong><p>${roleFitLabel(role.score)}</p></article>`)
        .join("")}
    </div>
    <div class="role-plan-grid">
      <article><span>Suggested project</span><p>${top.project}</p></article>
      <article><span>Skill focus</span><p>${skillFocus.join(", ")}</p></article>
      <article class="role-mission-card"><span>30-day mission</span><p>${top.action}</p></article>
      <article><span>How Tivoro can help</span><p>${top.support}</p></article>
    </div>
    ${recommendedPathBlock({
      title: "Your career direction is ready. Choose the next step that feels right.",
      copy: "Move to WhatsApp if you want a mentor to review your role direction. Or explore student programs and project support first.",
      whatsappHref: roleWhatsapp,
      detailHref: "students.html?profile=student",
      detailText: "Explore Student Programs",
    })}
  `;
  roleResult.hidden = false;
}

menuButton?.addEventListener("click", () => {
  setMenu(mobileMenu.hidden);
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

finderTabs.forEach((button) => {
  button.addEventListener("click", () => {
    activeAudience = button.dataset.audience;
    finderTabs.forEach((item) => item.classList.toggle("is-active", item === button));
    renderFinderOptions();
  });
});

finderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(finderForm);
  const stage = data.get("stage");
  const goal = data.get("goal");
  const support = data.get("support");
  const [title, description] = finderData[activeAudience].result(stage, goal);
  finderResult.innerHTML = `<strong>${title}</strong><span>Recommended for ${stage}</span><p>${description}</p><p>Preferred support: ${support}. Next step: book a slot so we can confirm details and suggest the right plan.</p>`;
  finderResult.hidden = false;
});

pathButtons.forEach((button) => {
  button.addEventListener("click", () => {
    pathButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderPath(button.dataset.path);
  });
});

projectCards.forEach((button) => {
  button.addEventListener("click", () => {
    projectCards.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProject(button.dataset.project);
  });
});

skillPicker?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-builder-skill]");
  if (!button || !skillPicker.contains(button)) return;
  button.classList.toggle("is-selected");
  if (!selectedBuilderSkills().length) button.classList.add("is-selected");
  renderBuilderPreview();
});

[builderStage, builderGoal, builderMode, builderPace].forEach((control) => {
  control?.addEventListener("change", () => {
    if (control === builderStage) renderBuilderSkills();
    renderBuilderPreview();
  });
});

courseMatchButton?.addEventListener("click", () => {
  matchCourseFromText(courseQuery?.value || "");
});

document.querySelectorAll("[data-course-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    if (courseQuery) courseQuery.value = button.dataset.coursePrompt || "";
    matchCourseFromText(courseQuery?.value || "");
  });
});

courseQuery?.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    matchCourseFromText(courseQuery.value);
  }
});

courseClearButton?.addEventListener("click", () => {
  if (courseQuery) courseQuery.value = "";
  if (courseMatchResult) {
    courseMatchResult.hidden = true;
    courseMatchResult.innerHTML = "";
  }
});

courseMatchResult?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-course-alt]");
  if (!button) return;
  matchCourseFromText(courseQuery?.value || "", button.dataset.courseAlt);
});

builderWhatsapp?.addEventListener("click", sendBuilderPlan);

roleSkillPicker?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-role-skill]");
  if (!button || !roleSkillPicker.contains(button)) return;
  button.classList.toggle("is-selected");
});

roleMatcherForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(roleMatcherForm);
  renderRoleMatcherResult(data);
  submitTivoroLead("child", {
    formType: "Future Role Finder",
    selectedSkills: selectedRoleSkills().join(", "),
    ...formDataToObject(data),
  });
  submitCollegeCareerToGoogleForm(data);
});

ambassadorForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  await renderAmbassadorResult(new FormData(ambassadorForm));
});

decisionForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const plan = form.dataset.decisionForm === "parent" ? parentDecisionPlan(data) : studentDecisionPlan(data);
    renderDecisionResult(form, plan);
    await submitTivoroLead(form.dataset.decisionForm === "parent" ? "parent" : "child", {
      formType: form.dataset.decisionForm === "parent" ? "Child Growth Plan" : "Future Skill Mission",
      recommendation: plan.title,
      ...formDataToObject(data),
    });
  });
});

[sampleCategory, sampleBudget].forEach((control) => {
  control?.addEventListener("change", renderBusinessSample);
});

sampleWhatsapp?.addEventListener("click", sendBusinessSampleRequest);

businessMatchButton?.addEventListener("click", () => {
  matchBusinessFromText(businessQuery?.value || "");
});

businessQuery?.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    matchBusinessFromText(businessQuery.value);
  }
});

businessQuery?.addEventListener("input", () => {
  window.clearTimeout(businessMapperTimer);
  businessMapperTimer = window.setTimeout(() => {
    const value = businessQuery.value.trim();
    if (!value) {
      clearWebsiteFeatureSelection();
      document.querySelectorAll(".feature-category-stack details").forEach((group, index) => {
        group.open = index === 0;
      });
      if (businessMatchResult) {
        businessMatchResult.hidden = true;
        businessMatchResult.innerHTML = "";
      }
      updateWebsitePriceBuilder();
      return;
    }
    if (value.length >= 18) matchBusinessFromText(value);
  }, 450);
});

businessClearButton?.addEventListener("click", () => {
  if (businessQuery) businessQuery.value = "";
  if (businessMatchResult) {
    businessMatchResult.hidden = true;
    businessMatchResult.innerHTML = "";
  }
  clearWebsiteFeatureSelection();
  document.querySelectorAll(".feature-category-stack details").forEach((group, index) => {
    group.open = index === 0;
  });
  updateWebsitePriceBuilder();
});

businessMatchResult?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-business-alt]");
  if (!button) return;
  matchBusinessFromText(businessQuery?.value || "", button.dataset.businessAlt);
});

websiteFeatureInputs.forEach((input) => {
  input.addEventListener("change", updateWebsitePriceBuilder);
});

websiteBreakdown?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-website-feature]");
  if (!removeButton) return;
  const featureName = removeButton.dataset.removeWebsiteFeature;
  const featureInput = [...websiteFeatureInputs].find((input) => input.dataset.featureName === featureName);
  if (!featureInput) return;
  featureInput.checked = false;
  updateWebsitePriceBuilder();
});

quotePresetButtons.forEach((button) => {
  button.addEventListener("click", () => applyWebsiteQuotePreset(button.dataset.quotePreset));
});

websiteExtraPages?.addEventListener("input", updateWebsitePriceBuilder);

websitePricingBuilder?.addEventListener("click", (event) => {
  const stepButton = event.target.closest("[data-page-step]");
  if (!stepButton || !websiteExtraPages) return;
  const nextValue = Number(websiteExtraPages.value || 0) + Number(stepButton.dataset.pageStep || 0);
  websiteExtraPages.value = String(Math.max(0, Math.min(20, nextValue)));
  updateWebsitePriceBuilder();
});

templateFilters.forEach((button) => {
  button.addEventListener("click", () => {
    templateFilters.forEach((item) => item.classList.toggle("is-active", item === button));
    filterTemplateCards();
  });
});

templateBudget?.addEventListener("change", filterTemplateCards);

prefillTrustFormFromUrl();
correctTrustScoreAnchorOffset();

trustForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(trustForm);
  const businessName = String(formData.get("businessName") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const state = String(formData.get("state") || "").trim();
  const submitButton = trustForm.querySelector('button[type="submit"]');

  if (!businessName || !city || !state) {
    renderTrustError("Please complete business details", "Enter business name, city and state to generate a live Digital Trust Score.");
    return;
  }

  try {
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Generating Trust Score...";
    }
    renderTrustScanning(businessName, city, state);
    const report = await runServerTrustScore({ businessName, city, state });
    renderTrustScoreReport(report, { businessName, city, state });
    await submitTivoroLead("business", {
      formType: "Digital Trust Score",
      enteredBusinessName: businessName,
      city,
      state,
      matchedBusinessName: report.business?.name || "",
      matchedAddress: report.business?.address || "",
      website: report.business?.website || "",
      trustScore: report.overall,
      recommendations: (report.recommendations || []).join(" | "),
      source: report.source || "",
    });
  } catch (error) {
    const code = error?.code || "";
    const message = error instanceof Error ? error.message : "";
    if (message === "local-server-required") {
      renderTrustError(
        "Open the deployed website to run this check",
        "Digital Trust Score needs the Tivoro server because browser-only pages cannot safely inspect live website data.",
        { href: trustManualReviewLink({ businessName, city, state }), label: "Send for Manual Review" }
      );
    } else if (code === "website-not-found") {
      renderTrustError(
        "Official local website could not be verified",
        "Tivoro checked possible homepage/contact/about page signals but did not find a website matching both the business name and entered city/location. Same-name websites from other cities/countries are not counted as official.",
        { href: trustManualReviewLink({ businessName, city, state }), label: "Send for Manual Review" }
      );
    } else if (code === "stale-google-endpoint" || code === "missing-google-places-key") {
      renderTrustError(
        "Trust Score now works without Google API",
        "This preview is still serving an older lookup response. Refresh the page or restart the local preview server, then try again. Tivoro now checks live website signals from the business name and location.",
        { href: trustManualReviewLink({ businessName, city, state }), label: "Send for Manual Review" }
      );
    } else if (code === "invalid-url") {
      renderTrustError(
        "Trust Score could not be generated",
        "Tivoro could not inspect matching live website signals from the business details. Send the details for manual review.",
        { href: trustManualReviewLink({ businessName, city, state }), label: "Send for Manual Review" }
      );
    } else {
      renderTrustError(
        "Trust Score could not be generated",
        message || "Please try again, or send the business name and location to us on WhatsApp for manual review.",
        { href: trustManualReviewLink({ businessName, city, state }), label: "Send for Manual Review" }
      );
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Generate Live Trust Score";
    }
  }
});

healthForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(healthForm);
  const websiteUrl = String(formData.get("websiteUrl") || "");
  const submitButton = healthForm.querySelector('button[type="submit"]');
  try {
    const url = normalizeWebsiteUrl(websiteUrl);
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Checking Website...";
    }
    renderHealthScanning(url.hostname.replace(/^www\./, ""));
    const audit = await runServerWebsiteCheck(url);
    renderHealthResult(audit, audit.finalUrl || url.href);
    await submitTivoroLead("business", {
      formType: "Website Readiness Checker",
      website: audit.finalUrl || url.href,
      domain: audit.domain,
      mobileScore: audit.mobile,
      speedScore: audit.speed,
      seoScore: audit.seo,
      trustScore: audit.security,
      overallScore: audit.overall,
      googleStatus: audit.googleStatus,
      issues: (audit.missing || []).join(" | "),
      recommendations: (audit.recommendations || []).join(" | "),
      ...formDataToObject(formData),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message === "local-server-required") {
      renderHealthError("Open the deployed website to run this check", "This checker fetches another website's HTML through the Tivoro server. It will work after deployment on Vercel. Local file preview cannot inspect external websites because browsers block cross-site HTML access.");
    } else if (message === "website-not-reachable" || message.includes("could not be reached") || message.includes("could not audit")) {
      renderHealthError("Website is not reachable", "Tivoro could not reach this website. Please try the full URL with https:// or check if the website is live.");
    } else if (message === "not-html" || message.includes("normal HTML")) {
      renderHealthError("This URL is not a normal website page", "Please enter a public website page that returns HTML content, not an image, PDF, file download or app-only endpoint.");
    } else {
      renderHealthError("Website could not be checked", message || "Please enter a live website like kidsverseschool.com or https://yourbusiness.com. Business names or search phrases cannot be checked.");
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Run Website Check";
    }
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-template-open]");
  if (!button || !sampleCategory) return;
  sampleCategory.value = button.dataset.templateOpen;
  if (sampleBudget && !sampleBudget.value) sampleBudget.value = "Starter Website";
  renderBusinessSample();
  document.querySelector("#business-samples")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

guidedForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const [title, description] = guidedRecommendation(form.dataset.guidedForm, data);
    const result = form.querySelector("[data-guided-result]");
    if (!result) return;
    const isBusinessGuided = form.dataset.guidedForm === "business";
    const guidedWhatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hello Tivoro, I used the guided finder. Recommended path: ${title}. ${description}. Please help me confirm the next step.`
    )}`;
    result.innerHTML = `
      <strong>${title}</strong>
      <span>Recommended next step</span>
      <p>${description}</p>
      ${recommendedPathBlock({
        title: "Your recommendation is ready. Choose the next step that feels right.",
        copy: isBusinessGuided
          ? "Move to WhatsApp if you want us to review the business requirement personally. Or explore business services first."
          : "Move to WhatsApp if you want us to guide the learner personally. Or explore student programs first.",
        whatsappHref: guidedWhatsapp,
        detailHref: isBusinessGuided ? "business.html?profile=business" : "students.html?profile=student",
        detailText: isBusinessGuided ? "Explore Business Services" : "Explore Student Programs",
      })}
    `;
    result.hidden = false;
    await submitTivoroLead(leadTypeForGuidedForm(form.dataset.guidedForm), {
      formType: `${form.dataset.guidedForm} Guided Finder`,
      recommendation: title,
      recommendationDetails: description,
      ...formDataToObject(data),
    });
    if (form.dataset.guidedForm === "parent") {
      submitParentCourseToGoogleForm(data);
    } else if (form.dataset.guidedForm === "student") {
      submitStudentCourseToGoogleForm(data);
    }
  });
});

document.addEventListener("click", (event) => {
  const target = event.target.closest(".primary-button, .secondary-button, .header-cta, .hero-path-card, .vertical-card a, .date-grid button, .slot-grid button, .finder-tabs button, .path-buttons button, .project-card, .skill-picker button, .role-skill-picker button, .sample-nav span, .sample-hero button, .demo-filters button, .demo-card button, .business-sticky-cta a, .health-whatsapp, .role-whatsapp");
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});

initTivoroMotion();
renderFinderOptions();
renderBuilderSkills();
renderBuilderPreview();
startCoursePlaceholderTyping();
startBusinessPlaceholderTyping();
renderBusinessSample();
updateWebsitePriceBuilder();
filterTemplateCards();
createTivoroBot();
submitPendingBookingGoogleForm();
submitPendingParentCourseGoogleForm();
submitPendingStudentCourseGoogleForm();
submitPendingCollegeCareerGoogleForm();
submitPendingAmbassadorChallengeGoogleForm();

bookingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  setBookingError("");

  const message = encodeURIComponent(
    `Hello Tivoro, I want to discuss and book a meeting. Name: ${data.get("bookingStudent")}. Mobile: ${data.get("bookingMobile")}. I am: ${data.get("bookingLevel")}. Need help with: ${data.get("bookingInterest")}. Preferred support: ${data.get("bookingMode")}. Please guide me with the next step.`
  );
  submitTivoroLead(leadTypeForBooking(data.get("bookingLevel")), {
    formType: "WhatsApp Meeting Request",
    ...formDataToObject(data),
  });
  submitBookingToGoogleForm(data);
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});

const initImpactCarousel = () => {
  const carousel = document.querySelector("[data-impact-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector(".impact-track");
  const slides = Array.from(carousel.querySelectorAll(".impact-slide"));
  const dots = Array.from(carousel.querySelectorAll(".impact-dots button"));
  const prev = carousel.querySelector(".impact-prev");
  const next = carousel.querySelector(".impact-next");
  let index = 0;
  let timer;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(index + 1), 4200);
  };

  prev?.addEventListener("click", () => {
    showSlide(index - 1);
    start();
  });

  next?.addEventListener("click", () => {
    showSlide(index + 1);
    start();
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      showSlide(dotIndex);
      start();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", start);
  showSlide(0);
  start();
};

initImpactCarousel();

const initUpcomingCarousel = () => {
  const carousel = document.querySelector("[data-upcoming-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector(".upcoming-project-track");
  const slides = Array.from(carousel.querySelectorAll(".upcoming-project-card"));
  const dots = Array.from(carousel.querySelectorAll(".upcoming-dots button"));
  const prev = carousel.querySelector(".upcoming-prev");
  const next = carousel.querySelector(".upcoming-next");
  let index = 0;
  let timer;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(index + 1), 4600);
  };

  prev?.addEventListener("click", () => {
    showSlide(index - 1);
    start();
  });

  next?.addEventListener("click", () => {
    showSlide(index + 1);
    start();
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      showSlide(dotIndex);
      start();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", start);
  showSlide(0);
  start();
};

initUpcomingCarousel();
