const crossBtn = document.querySelectorAll(".fa-times");
const openBtn = document.querySelectorAll(".fa-chevron-down");
const faqDiv = document.querySelectorAll(".faq");

console.log(crossBtn, openBtn, faqDiv);

crossBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faq = btn.closest(".faq");
    faq.classList.toggle("active");
  });
});

openBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faq = btn.closest(".faq");
    faq.classList.toggle("active");
  });
});
