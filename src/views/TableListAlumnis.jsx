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
  UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle,
  UncontrolledCollapse, Collapse
} from "reactstrap"

//Manage requests
import axios from 'axios'

//Switch component
import Switch from "react-switch"

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx"

//Form validation
import Formsy from 'formsy-react';

//API url
import { API_URL } from '../api/api'

const token = localStorage.getItem("tokens")

class RegularTables extends React.Component {
  state = {
    members: [],
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
    filterData: [],
    filter: false,
    cpt: 0,
    toggleFilter: false,
    toggleImport: false,
    toggleExport: false,
    sheetLink: ''
  }

  async importSheetData(event) {
    const link = this.state.sheetLink
    event.preventDefault()
    axios.post(`${API_URL}members/import`, { link }, { headers: {"Authorization" : `${token}`} })
      .then((response) => {
        console.log(response.data)
        alert(response.data.members.length + " membres ont été ajoutés !")
      })
    await this.refreshMembers()
  }

  async exportSheetData(event) {
    const link = this.state.sheetLink
    const members = this.state.filter ? [...this.state.filterData] : [...this.state.members]
    event.preventDefault()
    console.log(members)
    console.log(link)
    axios.post(`${API_URL}members/export`, { link, members }, { headers: {"Authorization" : `${token}`} })
      .then((response) => {
        alert(response.data.msg)
      })
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }


  componentWillMount() {
    this.refreshMembers()
  }

  refreshMembers() {
    axios.get(`${API_URL}members/alumni`, { headers: {"Authorization" : `${token}`} }).then((response) => {
      this.setState({
        members: response.data
      })
    })
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

  manageFilterToggle() {
    this.setState({
      toggleFilter: !this.state.toggleFilter,
    })
  }

  manageImportToggle() {
    this.setState({
      toggleImport: !this.state.toggleImport,
    })
  }

  manageExportToggle() {
    this.setState({
      toggleExport: !this.state.toggleExport,
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
      editMemberData: { ...data },
      editMemberModal: !this.state.editMemberModal
    }, () => { })
  }

  updateMember() {
    const member = this.state.editMemberData
    axios.put(`${API_URL}members/edit/` + member._id, { member }, { headers: {"Authorization" : `${token}`} })
      .then(() => {
        this.setState({
          editMemberModal: false,
          editMemberData: ""
        })
        this.refreshMembers()
      })
  }

  deleteMemberData(member) {
    let deleteMember = window.confirm("Voulez vous vraiment supprimer : " + member.prenom + " " + member.nom + " ?");
    if (deleteMember) {
      axios.delete(`${API_URL}members/delete/` + member._id, { headers: {"Authorization" : `${token}`} })
        .then((response) => {
          this.refreshMembers()
        })
    } else {
      alert(member.prenom + " " + member.nom + " n'a pas été supprimé !")
    }
  }

  setCpt = (amt) => {
    this.setState({
      cpt: this.state.cpt + amt
    })
  }

  async handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    let tab = []
    console.log("Before switch : " + this.state.cpt)
    switch (e.target.name) {
      case "Event":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/event`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Événementiel et formations" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
      case "Design":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/design`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Design" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
      case "Comm":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/comm`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Communication" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
      case "Média":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/media`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Multimédia" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
      case "Dev":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/dev`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Développement" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
      case "Relex":
        if (value) {
          await this.setCpt(1)
          if (this.state.cpt === 1) {
            this.setState({
              filter: true
            })
          }
          axios.get(`${API_URL}members/alumni/department/relex`, { headers: {"Authorization" : `${token}`} }).then((response) => {
            tab = response.data
            this.setState({
              filterData: this.state.filterData.concat(tab)
            })
          })
        } else {
          await this.setCpt(-1)
          var filtred = this.state.filterData.filter(
            (value, index, arr) => { return value.departement !== "Relations externes" }
          )
          this.setState({
            filterData: filtred
          })
          if (this.state.cpt === 0) {
            this.setState({
              filter: false,
              filterData: []
            })
          }
        }
        break;
    }
  }

  render() {
    let members
    if (this.state.filter) {
      members = this.state.filterData.map((member, index) => {
        return (
          <tr key={index}>
            <td className="text-left">{member.prenom}</td>
            <td className="text-left">{member.nom}</td>
            <td className="text-left">{member.email}</td>
            <td className="text-left">{member.responsabilite}</td>
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
            <td style={{ cursor: "pointer" }}
              onClick={this.deleteMemberData.bind(this, member)}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </td>
          </tr>
        )
      })
    } else {
      members = this.state.members.map((member, index) => {
        return (
          <tr key={index}>
            <td className="text-left">{member.prenom}</td>
            <td className="text-left">{member.nom}</td>
            <td className="text-left">{member.email}</td>
            <td className="text-left">{member.responsabilite}</td>
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
            <td style={{ cursor: "pointer" }}
              onClick={this.deleteMemberData.bind(this, member)}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </td>
          </tr>
        )
      })
    }
    return (
      <>
        {/* Modal for showing one member's data */}
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
                <h6>Statut</h6>
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

        {/* Modal for editing one member's data */}
        <Modal className="modal-Body" isOpen={this.state.editMemberModal} toggle={this.toggleEditMemberModal.bind(this)}>
          <ModalHeader toggle={this.toggleEditMemberModal.bind(this)} >Modifier les détails d'un membre</ModalHeader>
          <ModalBody>
            <Formsy onValidSubmit={this.updateMember.bind(this)}
              onValid={this.enableButton.bind(this)}
              onInvalid={this.disableButton.bind(this)}>
              <Row >
                <Col xs={6}>
                  <FormGroup>
                    <h6>Prénom</h6>
                    <Input
                      defaultValue={this.state.editMemberData.prenom}
                      placeholder="Prénom"
                      type="text"
                      required
                      pattern="[A-Za-z, ]*"
                      title="Lettres uniquement !"
                      onChange={(e) => {
                        var { editMemberData } = this.state
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
                      required
                      pattern="[A-Za-z, ]*"
                      title="Lettres uniquement !"
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
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                      <option>Multimédia</option>
                      <option>Développement</option>
                      <option>Relations externes</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row >
                <Col xs={6}>
                  <FormGroup>
                    <h6>Statut</h6>
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
                      pattern="^\+?\d{0,13}"
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
                      this.setState({ editMemberData })
                    }}
                  />
                </Col>
                <Col xs={6}>
                  <h6></h6>
                  <FormGroup style={{ position: "absolute", left: "50%" }}>
                    <Button color="warning" className="btn-round" type="submit">Modifier !</Button>
                  </FormGroup>
                </Col>
              </Row>
            </Formsy>
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
                  <CardTitle tag="h4">CSE alumnis members</CardTitle>
                  <p className="category"> Veuillez cliquer sur un membre donné pour avoir plus de détails.</p>
                  <Row>
                    <Col xs={4}>
                      <div>
                        <Button color="primary" onClick={this.manageFilterToggle.bind(this)}
                          style={{ marginBottom: '1rem' }}>Filter</Button>
                        <Collapse isOpen={this.state.toggleFilter}>
                          <Card style={{ paddingLeft: "10px" }}>
                            <CardBody>
                              <Row>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Event" onChange={this.handleChange.bind(this)} />
                                  <Label>Event</Label>
                                </Col>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Design" onChange={this.handleChange.bind(this)} />
                                  <Label>Design</Label>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Comm" onChange={this.handleChange.bind(this)} />
                                  <Label>Comm</Label>
                                </Col>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Média" onChange={this.handleChange.bind(this)} />
                                  <Label>Multimédia</Label>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Relex" onChange={this.handleChange.bind(this)} />
                                  <Label>Relex</Label>
                                </Col>
                                <Col xs={6}>
                                  <Input type="checkbox" name="Dev" onChange={this.handleChange.bind(this)} />
                                  <Label>Dev</Label>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div>
                        <Button color="primary" onClick={this.manageImportToggle.bind(this)}
                          style={{ marginBottom: '1rem' }}>Import</Button>
                        <Collapse isOpen={this.state.toggleImport}>
                          <Card>
                            <CardBody>
                              <Label>Veuillez entre le id du sheet, ce dernier doit être partager avec node-google-sheets@cse-hr-1585758185662.iam.gserviceaccount.com</Label>
                              <Input
                                placeholder="Lien du sheet (ID uniquement)"
                                type="text"
                                onChange={(e) => {
                                  this.setState({
                                    sheetLink: e.target.value
                                  })
                                }}
                              />
                              <Button color="primary" size="sm"
                                onClick={this.importSheetData.bind(this)}>
                                Import</Button>
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div>
                        <Button color="primary" onClick={this.manageExportToggle.bind(this)}
                          style={{ marginBottom: '1rem' }}>Export</Button>
                        <Collapse isOpen={this.state.toggleExport}>
                          <Card>
                            <CardBody>
                              <Label>Veuillez entre le id du sheet, ce dernier doit être partager avec node-google-sheets@cse-hr-1585758185662.iam.gserviceaccount.com</Label>
                              <Input
                                placeholder="Lien du sheet (ID uniquement)"
                                type="text"
                                onChange={(e) => {
                                  this.setState({
                                    sheetLink: e.target.value
                                  })
                                }}
                              />
                              <Button color="primary" size="sm"
                                onClick={this.exportSheetData.bind(this)}>
                                Export</Button>
                            </CardBody>
                          </Card>
                        </Collapse>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th style={{fontWeight: "bold"}} className="text-left">Prénom</th>
                        <th style={{fontWeight: "bold"}} className="text-left">Nom</th>
                        <th style={{fontWeight: "bold"}} className="text-left">Email</th>
                        <th style={{fontWeight: "bold"}} className="text-left">Ex-Résponsabilité</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
