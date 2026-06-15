const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const enquiryForm = document.querySelector(".enquiry-form");
const whatsappNumber = "918826758881";

function setMenu(open) {
  mobileMenu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
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

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const message = encodeURIComponent(
    `Hello Kidsverse CodeLab, I want counselling for coding/AI classes. Student: ${data.get("student")}. Mobile: ${data.get("mobile")}. Level: ${data.get("level")}. Interest: ${data.get("interest")}. Preferred mode: ${data.get("mode")}.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});
