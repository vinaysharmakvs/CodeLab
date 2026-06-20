const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const bookingForm = document.querySelector(".booking-planner");
const dateGrid = document.querySelector("[data-date-grid]");
const calendarLabel = document.querySelector("[data-calendar-label]");
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
const builderStage = document.querySelector("[data-builder-stage]");
const builderGoal = document.querySelector("[data-builder-goal]");
const builderMode = document.querySelector("[data-builder-mode]");
const builderPace = document.querySelector("[data-builder-pace]");
const skillPicker = document.querySelector(".skill-picker");
const builderPreview = document.querySelector("[data-builder-preview]");
const builderWhatsapp = document.querySelector("[data-builder-whatsapp]");
const sampleCategory = document.querySelector("[data-sample-category]");
const sampleBudget = document.querySelector("[data-sample-budget]");
const samplePreview = document.querySelector("[data-sample-preview]");
const sampleWhatsapp = document.querySelector("[data-sample-whatsapp]");
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
    image: "assets/balanced_growth.png",
    caption: "Premium service presentation",
    headline: "A salon website should feel stylish before the customer even visits.",
    story: "The sample presents services, packages, looks, bridal offers and WhatsApp appointment booking.",
    hooks: ["Look gallery", "Package cards", "Book appointment"],
  },
  "Retail store": {
    image: "assets/circuit-campus.png",
    caption: "Products, offers and location",
    headline: "Local customers should know what is available before they visit.",
    story: "The sample shows products, offers, timing, store trust and directions in a simple customer flow.",
    hooks: ["Product categories", "Offer banners", "Map CTA"],
  },
  Clinic: {
    image: "assets/balanced_growth.png",
    caption: "Patient trust and appointment clarity",
    headline: "Patients need confidence, timing and appointment guidance quickly.",
    story: "The sample focuses on doctor introduction, services, timings, instructions and appointment enquiry.",
    hooks: ["Doctor profile", "Service list", "Appointment CTA"],
  },
  "Cafe / restaurant": {
    image: "assets/balanced_growth.png",
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
    image: "assets/circuit-campus.png",
    caption: "Property lead experience",
    headline: "Buyers want listings, location clarity and site visit options.",
    story: "The sample presents properties, neighbourhood highlights, site visit booking and WhatsApp lead capture.",
    hooks: ["Listing cards", "Site visit CTA", "Lead form"],
  },
  "NGO / trust": {
    image: "assets/balanced_growth.png",
    caption: "Impact and support journey",
    headline: "Supporters should understand the cause and how to help.",
    story: "The sample brings mission, impact numbers, stories, volunteer flow and support enquiries together.",
    hooks: ["Impact numbers", "Volunteer form", "Support CTA"],
  },
  "Creator / personal brand": {
    image: "assets/robotics-lab.png",
    caption: "Portfolio and collaboration",
    headline: "A personal brand needs a home beyond social media.",
    story: "The sample shows profile, work, offers, media kit and collaboration enquiries in one polished place.",
    hooks: ["Featured work", "Services", "Collaborate"],
  },
  Startup: {
    image: "assets/robotics-lab.png",
    caption: "Launch and demo request",
    headline: "A startup page should explain the product before the first call.",
    story: "The sample focuses on problem, solution, features, use cases, demo requests and waitlist capture.",
    hooks: ["Product story", "Use cases", "Demo CTA"],
  },
  "Local service business": {
    image: "assets/circuit-campus.png",
    caption: "Local trust and fast enquiries",
    headline: "Local service customers want proof, area and quick contact.",
    story: "The sample highlights services, service area, before-after proof and WhatsApp enquiry.",
    hooks: ["Service area", "Proof section", "Call button"],
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
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatCalendarHeading(dates) {
  const monthNames = [...new Set(dates.map((date) => date.toLocaleDateString("en-IN", { month: "long", year: "numeric" })))];
  return monthNames.join(" - ");
}

function renderBookingDates() {
  if (!dateGrid || !bookingForm) return;
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index + 1);
    return date;
  });

  if (calendarLabel) calendarLabel.textContent = formatCalendarHeading(dates);

  const emptyCells = Array.from({ length: dates[0].getDay() }, () => `<span class="calendar-empty" aria-hidden="true"></span>`);
  const dateCells = dates.map((date, index) => {
    const label = formatBookingDate(date);
    const weekday = date.toLocaleDateString("en-IN", { weekday: "short" });
    const month = date.toLocaleDateString("en-IN", { month: "short" });
    const day = String(date.getDate()).padStart(2, "0");
    const tag = index === 0 ? "<em>Next</em>" : "";
    return `<button type="button" data-date="${label}" aria-label="${label}"><span>${weekday}</span><strong>${day}</strong><small>${month}</small>${tag}</button>`;
  });

  dateGrid.innerHTML = [...emptyCells, ...dateCells].join("");
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
    `Hello Kidsverse FutureHub, I created a custom coding course plan. Plan: ${title}. Learner: ${stage}. Skills: ${safeSkills.join(", ")}. Goal: ${goal}. Class style: ${mode}. Pace: ${pace}. Suggested duration: ${duration}. Please help me finalize this course.`
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
    `Hello Kidsverse FutureHub, I selected a business website sample. Category: ${category}. Budget level: ${budget}. Sample direction: ${sample.name}. Main conversion: ${sample.conversion}. Suggested scope: ${budgetPlan.scope}. Please guide me with the next step.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
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

builderWhatsapp?.addEventListener("click", sendBuilderPlan);

[sampleCategory, sampleBudget].forEach((control) => {
  control?.addEventListener("change", renderBusinessSample);
});

sampleWhatsapp?.addEventListener("click", sendBusinessSampleRequest);

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
  const target = event.target.closest(".primary-button, .secondary-button, .header-cta, .vertical-card a, .date-grid button, .slot-grid button, .finder-tabs button, .path-buttons button, .project-card, .skill-picker button, .sample-nav span, .sample-hero button");
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
renderBuilderSkills();
renderBuilderPreview();
renderBusinessSample();

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
