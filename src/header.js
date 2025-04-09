const header = (() => {
  const createButton = (name) => {
    const button = document.createElement("button");
    button.id = `${name}-button`;
    button.textContent = name;

    return button;
  };

  const h1 = document.createElement("h1");
  h1.textContent = "Sapori d’Italia";

  const nav = document.createElement("nav");
  const buttonNames = ["home", "menu", "about"];
  for (let i = 0; i < 3; i++) {
    nav.appendChild(createButton(buttonNames[i]));
  }

  const header = document.createElement("header");
  header.appendChild(h1);
  header.appendChild(nav);

  return header;
})();

export default header;
