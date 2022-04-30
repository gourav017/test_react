import {navbar} from "../component/navbar";
console.log("navbar:",navbar)

import "../style/navbar.css"

let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar()
