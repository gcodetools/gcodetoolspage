// main.js
import loadHeader from "../common/header.js";
import loadFooter from "../common/footer.js";

// Inserta el header y el footer donde quieras
document.getElementById("header-container").appendChild(loadHeader());
document.getElementById("footer-container").appendChild(loadFooter());
