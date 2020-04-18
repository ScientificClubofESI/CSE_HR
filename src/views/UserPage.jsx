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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

//Switch component
import Switch from "react-switch"

//Manage requests
import axios from 'axios'

//Form validation
import Formsy from 'formsy-react';

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { API_URL } from "api/api";

class User extends React.Component {
  state = {
    memberData: {
      prenom: '',
      nom: '',
      email: '',
      departement: '',
      statu: '',
      phoneNumber: '',
      responsabilite: '',
      bureau: false
    },
  }

  async addMember() {
    if (this.state.memberData.statu === "") {
      var { memberData } = this.state
      memberData.statu = "Newbie"
      await this.setState({ memberData })
    }
    let member = this.state.memberData
    console.log(member)
    axios.post(`${API_URL}members/add`, { member })
      .then((response) => {
        alert(response.data.member.prenom + " " + response.data.member.nom + " a été ajouté !")
      })
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Ajouter un membre</h5>
                </CardHeader>
                <CardBody>
                  <Formsy onValidSubmit={this.addMember.bind(this)}
                    onValid={this.enableButton.bind(this)}
                    onInvalid={this.disableButton.bind(this)}>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <h6>Prénom</h6>
                          <Input
                            placeholder="Prénom"
                            type="text"
                            required
                            pattern="[A-Za-z, ]*"
                            title="Lettres uniquement !"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.prenom = e.target.value
                              this.setState({ memberData })
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <h6>Nom</h6>
                          <Input
                            placeholder="Nom"
                            type="text"
                            required
                            pattern="[A-Za-z, ]*"
                            title="Lettres uniquement !"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.nom = e.target.value
                              this.setState({ memberData })
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <h6>
                            Email address
                          </h6>
                          <Input placeholder="Email" type="email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.email = e.target.value
                              this.setState({ memberData })
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <h6>Numéro de téléphone</h6>
                          <Input
                            placeholder="Numéro de téléphone"
                            pattern="^\+?\d{0,13}"
                            type="tel"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.phoneNumber = e.target.value
                              this.setState({ memberData })
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <h6>Département</h6>
                          <Input
                            type="select"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.departement = e.target.value
                              this.setState({ memberData })
                            }}
                          >
                            <option>Événementiel et formations</option>
                            <option>Design</option>
                            <option>Communication</option>
                            <option>Multimédia</option>
                            <option>Développement</option>
                            <option>Relations externes</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <h6>Statu</h6>
                          <Input
                            type="select"
                            defaultValue="Newbie"
                            required
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.statu = e.target.value
                              this.setState({ memberData })
                            }}
                          >

                            <option>Alumni</option>
                            <option>Ancien</option>
                            <option>Newbie</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <FormGroup>
                          <h6>Résponsabilité</h6>
                          <Input
                            placeholder="Résponsabilité"
                            type="textarea"
                            onChange={(e) => {
                              var { memberData } = this.state
                              memberData.responsabilite = e.target.value
                              this.setState({ memberData })
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <h6>Fait partie du bureau ?</h6>
                        <Switch checked={this.state.memberData.bureau}
                          onColor="#1be611"
                          onChange={() => {
                            var { memberData } = this.state
                            memberData.bureau = !this.state.memberData.bureau
                            this.setState({ memberData })
                          }}
                        />
                      </Col>
                      <Col xs={6}>
                        <h6></h6>
                        <FormGroup style={{ position: "absolute", left: "75%" }}>
                          <Button color="success" type="submit" className="btn-round" >Ajouter !</Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Formsy>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
