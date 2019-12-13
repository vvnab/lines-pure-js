document.addEventListener("DOMContentLoaded", ready);

function ready () {
  console.log("DOMLoaded");
  const menu = document.getElementById('menu');
  let menuOpen = false;
  menu.addEventListener("click", () => {
    menuOpen = !menuOpen;
    const dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle("hidden", !menuOpen);
  })
}

