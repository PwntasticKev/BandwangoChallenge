import React, { Component } from "react"
import styled from "styled-components"

const Container = styled.section`
  padding: 10px 19px 10px 10px;
  background: #18245d;
  height: 60vh;
`

const Card = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  margin: 10px 0;
  display: flex;
  position: relative;
  padding: 10px 0 0 10px;
  letter-spacing: 0.75px;
  border-radius: 6px;
`

const CardButton = styled.button`
  width: 50px;
  height: 50px;
  transition: background 0.5s ease-in-out;
  background: ${props => props.background};
  border-radius: 50px;
  position: absolute;
  right: 23px;
  top: 8px;
  border: 1.5px solid lightgray;
  outline: none;
`

const SubmitContainer = styled.section`
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 0;
  left: 0;
  height: 74px;
  z-index: 2;
  width: 100%;
  background: white;
  text-align: center;
  padding: 10px 0;
`

const CurrentTickets = styled.div`
  color: white;
  opacity: 0.5;
  margin: 20px 0;
  border-bottom: 1px solid white;
`

const SubmitButton = styled.button`
  width: 250px;
  height: 50px;
  padding: 15px;
  font-weight: 100;
  border-radius: 70px;
  letter-spacing: 1.75px;
  transition: all 0.5s ease-in-out;
  background: ${props => props.background};
  color: ${props => props.color};
`

const FakeCard = styled.section`
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.display};
`

export default class Tickets extends Component {
  state = {
    active: false,
    name: "Monir",
    ticketAmount: 0,
    events: [],
    coupon: "Jan, 21 2018, 04:42 pm"
  }

  alert() {
    this.state.active
      ? alert("Thank you for your purchase")
      : alert("Please select your amount of tickets")
  }

  buttonHandler(bool) {
    this.setState(
      {
        active: !bool,
        ticketAmount: 1
      },
      _ => this.addEvent()
    )
  }

  addEvent() {
    if (!this.state.active) {
      this.setState({
        events: [],
        ticketAmount: 0
      })
    }
  }

  render() {
    const card = (
      <Card>
        <div>
          <div>Adult - {this.state.name}</div>
          <div>Valid Until: {this.state.coupon}</div>
        </div>
        <CardButton
          background={this.state.active ? "#72b027" : "white"}
          onClick={_ => this.buttonHandler(this.state.active)}
        />
      </Card>
    )

    const fakeCard = (
      <Card>
        <div>
          <div>Adult - {this.state.name}</div>
          <div>Valid Until: {this.state.coupon}</div>
        </div>
        <CardButton
          background={this.state.active ? "#FF2D21" : "white"}
          onClick={_ => this.buttonHandler(this.state.active)}
        />
      </Card>
    )

    return (
      <Container>
        <div>{card}</div>
        <section>
          <CurrentTickets>Current Tickets added</CurrentTickets>
          <FakeCard display={this.state.active ? "1" : "0"}>
            {fakeCard}
          </FakeCard>
        </section>
        <SubmitContainer>
          <div>
            <div>Tickets Selected: {this.state.ticketAmount}</div>
            <SubmitButton
              background={this.state.active ? "#72b027" : "white"}
              color={this.state.active ? "white" : "black"}
              onClick={_ => this.alert()}
            >
              CONFIRM REDEMPTIONS
            </SubmitButton>
          </div>
        </SubmitContainer>
      </Container>
    )
  }
}
