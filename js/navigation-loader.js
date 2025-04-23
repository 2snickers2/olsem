fetch("menu.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu").innerHTML = data;
    document.dispatchEvent(new Event("menuLoaded")); // 🔔 сповіщаємо
  });
  fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
