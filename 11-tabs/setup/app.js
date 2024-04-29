const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
