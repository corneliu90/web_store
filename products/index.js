window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .tabs-list li");
  const contents = document.querySelectorAll(".tabs > div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      contents.forEach((content) => {
        content.style.display = "none";
      });

      if (index === 1) {
        contents[index].style.display = "flex";
      } else {
        contents[index].style.display = "block";
      }
    });
  });
});
