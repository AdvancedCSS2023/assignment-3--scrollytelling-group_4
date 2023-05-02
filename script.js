//Intersection observer
const textboxes = document.querySelectorAll(".textbox");
const tree = document.querySelector(".wrapper__container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "textbox--intersecting",
        entry.isIntersecting
      );
      let textboxAtribute = entry.target.getAttribute("id");
      tree.setAttribute("animation", textboxAtribute)
    });
  },
  {
    threshold: 1,
  }
);

textboxes.forEach((textbox) => {
  observer.observe(textbox);
});



// orientation button 
const orientationButton = document.querySelector(".orientation__message--button");
const orientationContainer = document.querySelector("#landscape__message--container");

orientationButton.addEventListener("click", () => {
  orientationContainer.remove();
})