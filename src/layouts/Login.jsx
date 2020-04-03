import React, { Component } from 'react'

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

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { API_URL } from "api/api";


export class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    login() {
        const email = this.state.email
        const password = this.state.password
        axios.post(`${API_URL}login`, {email, password})
            .then((response) => {
                alert(response.data.admin.email + " est connecté !")
            })
    }

    render() {
        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col md="3"></Col>
                        <Col md="6">
                            <Card>
                                <CardHeader>
                                    <h1 className="title"
                                        style={{ textAlign: "center" }}
                                    >Login</h1>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <h6>Email</h6>
                                                    <Input
                                                        placeholder="Email"
                                                        type="email"
                                                        required
                                                        onChange={(e) => {
                                                            var email = e.target.value
                                                            this.setState({ email: email })
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <h6>Mot de passe</h6>
                                                    <Input
                                                        placeholder="Mot de passe"
                                                        type="password"
                                                        onChange={(e) => {
                                                            var password = e.target.value
                                                            this.setState({ password: password })
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup style={{ left: "40%" }}>
                                                    <Button outline color="info" size="lg"
                                                        onClick={this.login.bind(this)} className="btn-round">Login</Button>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Login
