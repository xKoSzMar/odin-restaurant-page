import cook from "./assets/cook.png";

const about = (() => {
  const createParagraph = (text) => {
    const p = document.createElement("p");
    p.textContent = text;

    return p;
  };

  const about = document.createElement("div");
  about.id = "about-container";

  const h1 = document.createElement("h1");
  h1.className = "heading";
  h1.textContent = "About us";

  about.appendChild(h1);

  const div = document.createElement("div");
  div.id = "about-content";

  const img = document.createElement("img");
  img.src = cook;
  img.setAttribute("width", "1000px");

  div.appendChild(img);

  const section = document.createElement("section");

  section.appendChild(
    createParagraph(
      "“Sapori d’Italia is a story about passion for Italian cuisine, part part and part at the tables”."
    )
  );

  section.appendChild(
    createParagraph(
      "Our restaurant with love for the built-in Italian flavors. Each dish comes from the heart, from authentic ingredients and the best ingredients – often imported straight from Italy. Behind the kitchen is our chef – Marco Bianchi – who got something in Rome, Milan and Florence, before the unique one was invented here."
    )
  );

  section.appendChild(
    createParagraph(
      "We believe that food is more than just a meal – to experience, to remember, to feel. We are invited to our trattoria, you feel the real Sapori d’Italia."
    )
  );

  div.appendChild(section);
  about.appendChild(div);

  return about;
})();

export default about;
