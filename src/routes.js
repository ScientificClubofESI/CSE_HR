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
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import UserPage from "views/UserPage.jsx";
import TableListAnciens from "views/TableListAnciens"
import TableListNewbies from "views/TableListNewbies"
import TableListAlumnis from "views/TableListAlumnis"
import TableListBureau from "views/TableListBureau"

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Tous Members",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/anciens",
    name: "Anciens",
    icon: "objects_spaceship",
    component: TableListAnciens,
    layout: "/admin"
  },
  {
    path: "/newbies",
    name: "Newbies",
    icon: "emoticons_satisfied",
    component: TableListNewbies,
    layout: "/admin"
  },
  {
    path: "/alumnis",
    name: "Alumnis",
    icon: "education_glasses",
    component: TableListAlumnis,
    layout: "/admin"
  },
  {
    path: "/bureau",
    name: "Bureau",
    icon: "business_briefcase-24",
    component: TableListBureau,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Ajouter un membre",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  /*{
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin"
  }*/
];
export default dashRoutes;
