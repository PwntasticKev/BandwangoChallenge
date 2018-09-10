import React, { Component } from "react"
import styled from "styled-components"
import Tickets from "./Tickets"
import Info from "./Info"

const Container = styled.section`
  font-family: Encode Sans Condensed;
`

const Button1 = styled.button`
  color: white;
  padding: 10px;
  width: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background: #18245d;
  border-bottom: ${props => props.border};
  color: ${props => props.color};
  font-family: Encode Sans Condensed;
`

const Button2 = styled.button`
  color: white;
  padding: 10px;
  width: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background: #18245d;
  border-bottom: ${props => props.border};
  color: ${props => props.color};
  font-family: Encode Sans Condensed;
`

const ButtonContainer = styled.section`
  margin-top: 47.5px;
`

const HeaderContainer = styled.section`
  color: white;
  height: 208px;
  background: #18245d;
  text-align: center;
  position: relative;
`
const SubTitle = styled.div`
  opacity: 0.9;
  font-size: 12px;
  font-weight: 100;
  padding-top: 47px;
  letter-spacing: 0.5px;
`
const Title = styled.div`
  opacity: 0.9;
  font-size: 20px;
  padding: 0 75px;
  font-weight: 100;
  margin-top: 10px;
  letter-spacing: 0.75px;
`

const Error = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
`

export default class Page4 extends Component {
  state = {
    infoActive: true,
    redeemActive: false
  }

  infoActive(bool) {
    this.state.redeemActive
      ? this.setState({
          infoActive: !bool,
          redeemActive: false
        })
      : this.setState({
          infoActive: !bool
        })
  }

  redeemActive(bool) {
    this.state.infoActive
      ? this.setState({
          infoActive: false,
          redeemActive: !bool
        })
      : this.setState({
          redeemActive: !bool
        })
  }

  render() {
    return (
      <Container>
        <HeaderContainer>
          <SubTitle>Eureka Height Brew Co.</SubTitle>
          <Title>Flight of (5) 4oz Pours of Any of Our Beers</Title>
          <ButtonContainer>
            <Button1
              onClick={_ => this.infoActive(this.state.infoActive)}
              color={this.state.infoActive ? "#556fe8" : "white"}
              border={this.state.infoActive ? "5px solid #556fe8" : "none"}
              name="infoActive"
            >
              INFO
            </Button1>
            <Button2
              onClick={_ => this.redeemActive(this.state.redeemActive)}
              color={this.state.redeemActive ? "#556fe8" : "white"}
              border={this.state.redeemActive ? "5px solid #556fe8" : "none"}
            >
              TICKETS
            </Button2>
          </ButtonContainer>
        </HeaderContainer>
        <div>
          {this.state.infoActive === true ? (
            <Info />
          ) : this.state.redeemActive === true ? (
            <Tickets />
          ) : (
            <Error>Click the Options above to display information</Error>
          )}
        </div>
      </Container>
    )
  }
}
