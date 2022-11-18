const valuesItems = document.querySelectorAll(".values-item");

[...valuesItems].forEach((item, index) => {
  item.addEventListener("click", () => {
    [...valuesItems]
      .filter((i, key) => key !== index)
      .forEach((item) => {
        item.children[1].classList.add("hide");
        item.children[0].children[2].children[0].classList.remove(
          "rotate-plus"
        );
      });
    item.children[1].classList.toggle("hide");
    item.children[0].children[2].children[0].classList.toggle("rotate-plus");
  });
});
