import bruschetta from "./assets/bruschetta.png";
import carbonara from "./assets/carbonara.png";
import tiramisu from "./assets/tiramisu.png";

const menu = (() => {
  const createTable = (title, obj) => {
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const th = document.createElement("th");

    th.textContent = title;
    th.setAttribute("colspan", 2);
    table.appendChild(tr.appendChild(th));

    for (let i = 0; i < obj.length; i++) {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");

      td1.textContent = obj[i].name;
      tr.appendChild(td1);
      td2.textContent = `${obj[i].price}€`;
      tr.appendChild(td2);

      table.appendChild(tr);
    }

    return table;
  };

  const createFigure = (caption, src, width) => {
    const img = document.createElement("img");
    img.src = src;
    img.setAttribute("width", width);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = caption;

    const figure = document.createElement("figure");
    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
  };

  const h1 = document.createElement("h1");
  h1.className = "heading";
  h1.textContent = "menu";

  const menu = document.createElement("div");
  menu.id = "menu-container";
  menu.appendChild(h1);

  const menuContent = document.createElement("div");
  menuContent.id = "menu-content";

  const antipasti = [
    {
      name: "Bruschetta al Pomodoro",
      price: "6.00",
    },
    {
      name: "Carpaccio di Manzo",
      price: "11.50",
    },
    {
      name: "Caprese con Mozzarella di Bufala",
      price: "9.00",
    },
    {
      name: "Focaccia con Rosmarino",
      price: "5.50",
    },
    {
      name: "Olive Marinate",
      price: "4.00",
    },
  ];

  menuContent.appendChild(createTable("antipasti", antipasti));
  menuContent.appendChild(
    createFigure("Bruschetta al Pomodoro", bruschetta, "600px")
  );

  const mainCourses = [
    {
      name: "Spaghetti alla Carbonara",
      price: "13.00",
    },
    {
      name: "Lasagna alla Bolognese",
      price: "14.50",
    },
    {
      name: "Tagliatelle al Pesto Genovese",
      price: "12.00",
    },
    {
      name: "Gnocchi ai Quattro Formaggi",
      price: "13.50",
    },
    {
      name: "Risotto ai Funghi Porcini",
      price: "14.00",
    },
    {
      name: "Pizza Margherita",
      price: "14.00",
    },
    {
      name: "Pizza Mozarella di Buffala",
      price: "18.00",
    },
    {
      name: "Pizza Quattro Stagioni",
      price: "15.00",
    },
    {
      name: "Ossobuco alla Milanese",
      price: "18.00",
    },
    {
      name: "Saltimbocca alla Romana",
      price: "17.50",
    },
  ];

  menuContent.appendChild(
    createFigure("Spaghetti alla Carbonara", carbonara, "800px")
  );
  menuContent.appendChild(createTable("main dishes", mainCourses));

  const desserts = [
    {
      name: "Tiramisu",
      price: "6.50",
    },
    {
      name: "Panna Cotta with raspberry sauce",
      price: "6.00",
    },
    {
      name: "Cannoli Siciliani",
      price: "5.50",
    },
    {
      name: "Gelato artigianale (2 scoops)",
      price: "4.50",
    },
    {
      name: "Affogato al Caffè",
      price: "5.00",
    },
  ];

  menuContent.appendChild(createTable("desserts", desserts));
  menuContent.appendChild(createFigure("Tiramisu", tiramisu, "800px"));

  menu.appendChild(menuContent);

  return menu;
})();

export default menu;
