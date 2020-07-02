import React, { Component } from 'react'
import { ListGroup, Container, Row } from 'react-bootstrap'


export default class HomePage extends Component {
    state = {
        form : {
            data:[]
        }
    }
    render() {
        return (
            <Container>
                <Row>

                {this.state.form.data.map(entry =>
                  <ListGroup>
                  <ListGroup.Item>{entry.FirstName}-{entry.SecondName} <br />
                  {entry.TimeOfArrival}
                  </ListGroup.Item>
                  
                </ListGroup>  )}
                </Row>
            </Container>
        )
    }
    componentDidMount = async() => {
        const formResp = await fetch("http://localhost:3001/form")
        console.log(formResp)
        const form = await formResp.json()
        console.log(form)
        this.setState({
            form : form
        })
    }
}
