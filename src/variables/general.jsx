/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
  {
    checked: true,
    text: 'Sign contract for "What are conference organizers afraid of?"'
  },
  {
    checked: false,
    text: "Lines From Great Russian Literature? Or E-mails From My Boss?"
  },
  {
    checked: true,
    text:
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
  }
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Prénom", "Nom", "Email", "Départment"];
const tbody = [
  {
    className: "table-success",
    data: ["Safaa", "Menad", "gs_menad@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "",
    data: ["Abd errahmen", "Tlili", "ha_tlili@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-info",
    data: ["Samy", "Nehlil", "im_nehlil@esi.dz", "Relex", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "",
    data: ["Mohammed Nassim", "Sehdi",	"hm_sehdi@esi.dz", "Dev", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
  {
    className: "table-danger",
    data: ["Oussama",	"Kherroubi", "ho_kherroubi@esi.dz", "Événementiel et formations", "Ancien", "0553623224", "HRM"]
  },
 
];

// tasks list for Tasks card in Dashboard view
// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { tasks, thead, tbody };
