import "./index.css";
import header from "./header";
import home from "./home";
import menu from "./menu";
import about from "./about";

(() => {
  const selectPage = (id) => {
    const contentDiv = document.querySelector("#content");

    contentDiv.removeChild(contentDiv.firstElementChild);

    if (id === "home-button") {
      contentDiv.appendChild(home);
    } else if (id === "menu-button" || id === "see-menu-button") {
      contentDiv.appendChild(menu);
    } else if (id === "about-button") {
      contentDiv.appendChild(about);
    }
  };

  document.querySelector("body").appendChild(header);

  const div = document.createElement("div");
  div.id = "content";
  div.appendChild(home);

  requestAnimationFrame(() => {
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (e) => selectPage(e.target.id));
    }
  });

  document.querySelector("body").appendChild(div);
})();
