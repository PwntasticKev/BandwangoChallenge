import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import Header from "./Homepage/Header"
import Icon from "../../assets/arrowIcon.png"

const Container = styled.section`
  font-family: sans-serif;
`

const Wiggle = keyframes`

    10%{ transform: translate(17px, 0);}
    20%{ transform: translate(0px, 0);}
    100%{ transform: translate(0px, 0);}
`

const BackButton = styled.button`
  color: #656565;
  padding: 8px;
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  animation: ${Wiggle} ease-in-out 5s 1s infinite forwards;
`
const Img = styled.img`
  transform: rotate(180deg);
  width: 15px;
  margin-right: 5px;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  background: #18245d;
  width: 100%;
  height: 70px;
`

export default class Page4 extends Component {
  render() {
    return (
      <Container>
        <BackButton>
          <Img src={Icon} alt="Icon" /> Back
        </BackButton>
        <Header />
        <Footer />
      </Container>
    )
  }
}
