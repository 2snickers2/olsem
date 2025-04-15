document.addEventListener("DOMContentLoaded", function () {
  fetch("../page/menu.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("menu").innerHTML = data;
    })
    .catch(error => {
      console.error("Помилка завантаження меню:", error);
    });

    fetch("../page/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
      console.error("Помилка завантаження меню:", error);
    });
});