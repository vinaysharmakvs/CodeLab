const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const bookingForm = document.querySelector(".booking-planner");
const dateGrid = document.querySelector("[data-date-grid]");
const slotGrid = document.querySelector("[data-slot-grid]");
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
const whatsappNumber = "918826758881";

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
      return ["FutureHub Workshop Program", `${goal} for ${stage} with live sessions, practical activities and certificate options.`];
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

function formatBookingDate(date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function renderBookingDates() {
  if (!dateGrid || !bookingForm) return;
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index + 1);
    return date;
  });

  dateGrid.innerHTML = dates
    .map((date) => {
      const label = formatBookingDate(date);
      const [weekday, day, month] = label.replace(",", "").split(" ");
      return `<button type="button" data-date="${label}"><span>${weekday}</span><strong>${day}</strong><span>${month}</span></button>`;
    })
    .join("");
}

function setBookingError(message) {
  if (!bookingError) return;
  bookingError.textContent = message;
  bookingError.hidden = !message;
}

function selectBookingButton(container, button, hiddenName, value) {
  container?.querySelectorAll("button").forEach((item) => item.classList.remove("is-selected"));
  button.classList.add("is-selected");
  bookingForm.elements[hiddenName].value = value;
  setBookingError("");
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
    if (goal.includes("Coding club")) return ["FutureHub Coding Club", `Monthly coding, AI and project sessions for ${size}.`];
    return ["Institution Workshop Program", `${goal} for ${category}, planned as a practical program with activities, certificates and follow-up guidance.`];
  }

  return ["Book a Guidance Slot", "We will understand the requirement and suggest the right plan."];
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

guidedForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const [title, description] = guidedRecommendation(form.dataset.guidedForm, data);
    const result = form.querySelector("[data-guided-result]");
    if (!result) return;
    result.innerHTML = `<strong>${title}</strong><span>Recommended next step</span><p>${description}</p><p>Book a slot if you want us to confirm the course, service scope, timeline and mode.</p>`;
    result.hidden = false;
  });
});

document.addEventListener("click", (event) => {
  const target = event.target.closest(".primary-button, .secondary-button, .header-cta, .vertical-card a, .date-grid button, .slot-grid button, .finder-tabs button, .path-buttons button, .project-card");
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "tap-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
});

renderFinderOptions();
renderBookingDates();

dateGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-date]");
  if (!button) return;
  selectBookingButton(dateGrid, button, "bookingDate", button.dataset.date);
});

slotGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-slot]");
  if (!button) return;
  selectBookingButton(slotGrid, button, "bookingSlot", button.dataset.slot);
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const date = data.get("bookingDate");
  const slot = data.get("bookingSlot");
  if (!date || !slot) {
    setBookingError("Please select a preferred date and time slot before sending the booking request.");
    return;
  }

  const message = encodeURIComponent(
    `Hello Kidsverse FutureHub, I want to book a discussion slot. Name: ${data.get("bookingStudent")}. Mobile: ${data.get("bookingMobile")}. I am: ${data.get("bookingLevel")}. Need help with: ${data.get("bookingInterest")}. Preferred support: ${data.get("bookingMode")}. Preferred date: ${date}. Preferred slot: ${slot}.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});
