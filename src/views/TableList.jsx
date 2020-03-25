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
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Modal, ModalHeader, ModalBody, ModalFooter, Label,
  Button,
  FormGroup,
  Form,
  Input,
  Badge,
} from "reactstrap";

//Switch component
import Switch from "react-switch"

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import { thead, tbody } from "variables/general";

class RegularTables extends React.Component {
  state = {
    members: [
      {
        prenom: "Safaa",
        nom: "Menad",
        email: "gs_menad@esi.dz",
        departement: "Événementiel et formations",
        statu: "Ancien",
        phoneNumber: "0553623224",
        responsabilite: "HRM",
        bureau: false
      },
      {
        prenom: "Safaa",
        nom: "Menad",
        email: "gs_menad@esi.dz",
        departement: "Événementiel et formations",
        statu: "Ancien",
        phoneNumber: "0553623224",
        responsabilite: "HRM",
        bureau: false
      },
      {
        prenom: "Safaa",
        nom: "Menad",
        email: "gs_menad@esi.dz",
        departement: "Événementiel et formations",
        statu: "Ancien",
        phoneNumber: "0553623224",
        responsabilite: "HRM gddddddddddddddddddddddddddddddddddddddddddddd dgdgggggggggggggggg egegege",
        bureau: false,
      }
    ],
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
    memberModal: false,
    editMemberData: {
      prenom: '',
      nom: '',
      email: '',
      departement: '',
      statu: '',
      phoneNumber: '',
      responsabilite: '',
      bureau: false
    },
    editMemberModal: false,
  }

  toggleMemberModal() {
    this.setState({
      memberModal: !this.state.memberModal
    })
  }

  toggleEditMemberModal() {
    this.setState({
      editMemberModal: !this.state.editMemberModal
    })
  }

  getMemberData(data) {
    this.setState({
      memberData: {
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        departement: data.departement,
        statu: data.statu,
        phoneNumber: data.phoneNumber,
        responsabilite: data.responsabilite
      },
      memberModal: !this.state.memberModal
    })
  }

  editMemberData(data) {
    this.setState({
      editMemberData: data,
      editMemberModal: !this.state.memberModal
    })
  }

  render() {
    let members = this.state.members.map((member, index) => {
      return (
        <tr key={index}>
          <td className="text-left">{member.prenom}</td>
          <td className="text-left">{member.nom}</td>
          <td className="text-left">{member.email}</td>
          <td className="text-left">{member.departement}</td>
          <td style={{ cursor: "pointer" }}
            onClick={this.getMemberData.bind(this, member)}
          >
            <i className="now-ui-icons users_single-02" ></i>
          </td>
          <td style={{ cursor: "pointer" }}
            onClick={this.editMemberData.bind(this, member)}
          >
            <i className="now-ui-icons ui-1_settings-gear-63"></i>
          </td>
          <td style={{ cursor: "pointer" }}>
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </td>
        </tr>
      )
    })
    return (
      <>
        {/*Modal for showing one member's data */}
        <Modal className="modal-Body" isOpen={this.state.memberModal} toggle={this.toggleMemberModal.bind(this)}>
          <ModalHeader toggle={this.toggleMemberModal.bind(this)}>Détails du membre</ModalHeader>
          <ModalBody>
            <Row>
              <Col xs={6}>
                <h6>Prénom</h6>
                <p>{this.state.memberData.prenom}</p>
              </Col>
              <Col xs={6}>
                <h6>Nom</h6>
                <p>{this.state.memberData.nom}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h6>Email</h6>
                <p>{this.state.memberData.email}</p>
              </Col>
              <Col xs={6}>
                <h6>Département</h6>
                <p >
                  <Badge color="primary">
                    {this.state.memberData.departement}
                  </Badge>
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h6>Statu</h6>
                <p>{this.state.memberData.statu}</p>
              </Col>
              <Col xs={6}>
                <h6>Numéro de téléphone</h6>
                <p>{this.state.memberData.phoneNumber}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h6>Responsabilité</h6>
                <p>{this.state.memberData.responsabilite}</p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>

        {/*Modal for editing one member's data */}
        <Modal className="modal-Body" isOpen={this.state.editMemberModal} toggle={this.toggleEditMemberModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditMemberModal.bind(this)} >Modifier les détails d'un membre</ModalHeader>
          <ModalBody>
            <Row >
              <Col xs={6}>
                <FormGroup>
                  <h6>Prénom</h6>
                  <Input
                    defaultValue={this.state.editMemberData.prenom}
                    placeholder="Prénom"
                    type="text"
                    onChange={(e) => {
                      var {editMemberData} = this.state
                      editMemberData.prenom = e.target.value
                      this.setState({ editMemberData })
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <h6>Nom</h6>
                  <Input
                    defaultValue={this.state.editMemberData.nom}
                    placeholder="Nom"
                    type="text"
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.nom = e.target.value
                      this.setState({ editMemberData: editMemberData })
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <h6>Email</h6>
                  <Input
                    defaultValue={this.state.editMemberData.email}
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.email = e.target.value
                      this.setState({ editMemberData })
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <h6>Département</h6>
                  <Input
                    type="select"
                    defaultValue={this.state.editMemberData.departement}
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.departement = e.target.value
                      this.setState({ editMemberData })
                    }}
                  >
                    <option>Événementiel et formations</option>
                    <option>Design</option>
                    <option>Communication</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row >
              <Col xs={6}>
                <FormGroup>
                  <h6>Statu</h6>
                  <Input
                    type="select"
                    defaultValue={this.state.editMemberData.statu}
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.statu = e.target.value
                      this.setState({ editMemberData })
                    }}
                  >
                    <option>Alumni</option>
                    <option>Ancien</option>
                    <option>Newbie</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <h6>Numéro de téléphone</h6>
                  <Input
                    defaultValue={this.state.editMemberData.phoneNumber}
                    placeholder="Numéro de téléphone"
                    type="tel"
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.phoneNumber = e.target.value
                      this.setState({ editMemberData })
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <h6>Résponsabilité</h6>
                  <Input
                    defaultValue={this.state.editMemberData.responsabilite}
                    placeholder="Résponsabilité"
                    type="textarea"
                    onChange={(e) => {
                      var { editMemberData } = this.state
                      editMemberData.responsabilite = e.target.value
                      this.setState({ editMemberData })
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <h6>Fait partie du bureau ?</h6>
              <Switch checked={this.state.editMemberData.bureau}
                    onColor="#1be611"
                    onChange={() => {
                      var { editMemberData } = this.state
                      editMemberData.bureau = !this.state.editMemberData.bureau
                      this.setState({editMemberData})
                    }}
              />
              </Col>
              <Col xs={6}>
                <h6></h6>
                <FormGroup style={{position:"absolute", left:"50%"}}>
                <Button color="warning" className="btn-round" onClick={this.toggleEditMemberModal.bind(this)}>Modifier !</Button>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>

        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">CSE all members</CardTitle>
                  <p className="category"> Veuillez cliquer sur un membre donné pour avoir plus de détails.</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-left">Prénom</th>
                        <th className="text-left">Nom</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Département</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            {/*
            <Col xs={12}>
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category"> Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
             */}
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
