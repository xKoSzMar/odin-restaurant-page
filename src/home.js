import restaurant from "./assets/restaurant.png";

const home = (() => {
  const home = document.createElement("div");
  home.id = "home-container";

  const section = document.createElement("section");

  const p = document.createElement("p");
  p.textContent =
    "Welcome to our truly Italian restaurant Sapori d’Italia! Feel the taste of real Italy in the heart of our city!";

  section.appendChild(p);

  const button = document.createElement("button");
  button.id = "see-menu-button";
  button.textContent = "see menu";

  section.appendChild(button);

  home.appendChild(section);

  const img = document.createElement("img");
  img.src = restaurant;
  img.setAttribute("width", "1000px");

  home.appendChild(img);

  return home;
})();

export default home;
