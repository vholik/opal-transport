const select = document.querySelectorAll(".language-select");

select.forEach((select) => {
  select.addEventListener("change", (e) => {
    const language = e.target.value;
    if (language === "EN") {
      // document.location.href = "/en";
    }
    if (language === "PL") {
      document.location.href = "/";
    }
  });
});
