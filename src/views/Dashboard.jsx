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
import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

//API
import axios from "axios"
import { API_URL } from "../api/api"

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

//Chart components
import BarChart from "../components/BarChart/BarChart"
import DoughnutChart from "../components/DoughnutChart/DoughnutChart"

class Dashboard extends React.Component {
  state = {
    departments: [
      {
        "name": "Event",
        "value": null
      },
      {
        "name": "Design",
        "value": null
      },
      {
        "name": "Comm",
        "value": null
      },
      {
        "name": "Multimédia",
        "value": null
      },
      {
        "name": "Dev",
        "value": null
      },
      {
        "name": "Relex",
        "value": null
      }
    ],
    statuts: [
      {
        "name": "Newbie",
        "value": null
      },
      {
        "name": "Ancien",
        "value": null
      },
      {
        "name": "Alumni",
        "value": null
      }
    ]
  }

  async refreshMembers() {
    axios.get(`${API_URL}members/department/design`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Design") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/department/event`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Event") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/department/comm`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Comm") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/department/media`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Multimédia") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/department/dev`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Dev") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/department/relex`).then(async (response) => {
      await this.setState({
        departments: this.state.departments.map((department) => {
          if (department.name === "Relex") {
            department.value = response.data.length
          }
          return department
        })
      })
    })
    axios.get(`${API_URL}members/old`).then(async (response) => {
      await this.setState({
        status: this.state.statuts.map((statut) => {
          if (statut.name === "Ancien") {
            statut.value = response.data.length
          }
          return statut
        })
      })
    })
    axios.get(`${API_URL}members/alumni`).then(async (response) => {
      await this.setState({
        status: this.state.statuts.map((statut) => {
          if (statut.name === "Alumni") {
            statut.value = response.data.length
          }
          return statut
        })
      })
    })
    axios.get(`${API_URL}members/newbie`).then(async (response) => {
      await this.setState({
        statuts: this.state.statuts.map((statut) => {
          if (statut.name === "Newbie") {
            statut.value = response.data.length
          }
          return statut
        })
      })
    })
  }

  componentWillMount() {
    this.refreshMembers()
  }

  componentDidMount() {
    this.refreshMembers()
    console.log(this.state)
  }

  //#46b3ff - #02A5DC

  render() {
    return (
      <>
        <PanelHeader
          size="md"
          content={
            <div style={{ marginLeft: "5%" }}>
              <br />
              <h1 style={{ color: "#EDDF0C", fontWeight: "bold", display: "inline" }}>CSE HR, {" "}</h1>
              <span style={{ color: "#FFFFFF", fontSize: "20px" }}>l'outil d'organisation des ressources humaines du CSE</span>
            </div>

          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h6">Répartition des membres selon leur ancienneté</CardTitle>
                </CardHeader>
                <CardBody>
                  <BarChart
                    data={this.state.statuts}
                    title={"Membres par ancienneté"}
                    color="#46b3ff"
                  />
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h6">Répartition des membres par départements</CardTitle>
                </CardHeader>
                <CardBody>
                  <DoughnutChart
                    data={this.state.departments}
                    title={"Membres par département"}
                    colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
                  />
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
