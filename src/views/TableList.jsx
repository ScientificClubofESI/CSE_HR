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
  Modal, ModalHeader, ModalBody, ModalFooter, Label
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import { thead, tbody } from "variables/general";

class RegularTables extends React.Component {
  state = {
    memberData : {
      prenom: '',
      nom: '',
      email: '',
      departement: '',
    },
    memberModal: false
  }

  toggleMemberModal() {
    this.setState({
      memberModal: !this.state.memberModal
    })
  }

  getMemberDataData(data) {
    this.setState({
      memberData: {prenom: data[0], nom: data[1], email: data[2], departement: data[3]},
      memberModal: !this.state.memberModal
    })
  }

  render() {
    return (
      <>
        {console.log(this.state.memberData)}
        <Modal isOpen={this.state.memberModal} toggle={this.toggleMemberModal.bind(this)}>
          <ModalHeader toggle={this.toggleMemberModal.bind(this)}>Détails du membre</ModalHeader>
          <ModalBody>
              <CardTitle tag="h4">Prénom</CardTitle>
              <p className="category">{this.state.memberData.prenom}</p>
              <CardTitle tag="h4">Nom</CardTitle>
              <p className="category">{this.state.memberData.nom}</p>
              <CardTitle tag="h4">Email</CardTitle>
              <p className="category">{this.state.memberData.email}</p>
              <CardTitle tag="h4">Département</CardTitle>
              <p className="category">{this.state.memberData.departement}</p>
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
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-left">
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
                          <tr key={key} onClick={this.getMemberDataData.bind(this, prop.data)}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-left">
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
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
