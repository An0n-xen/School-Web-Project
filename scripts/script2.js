// Getting rows
// row 1
const cardr = document.querySelectorAll(".cardr");
const cardl = document.querySelectorAll(".cardl");
const Line = document.querySelector(".line");

// First observer
const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

cardr.forEach((card) => {
  Observer.observe(card);
});

cardl.forEach((card) => {
  Observer.observe(card);
});

// Second observer
const PicObserver = new IntersectionObserver(
  (ent) => {
    ent[0].target.classList.toggle("show", ent[0].isIntersecting);
    if (ent[0].isIntersecting) {
      PicObserver.unobserve(Line);
    }
  },
  { rootMargin: "-200px" }
);

PicObserver.observe(Line);
