import React, { Component } from "react"
import styled from "styled-components"

const ContentContainer = styled.section`
  padding: 16px;
`
const Text = styled.div`
  font-weight: 600;
  font-size: 13px;
  opacity: 0.8;
  margin-top: 16px;
`

const Content = styled.div`
  color: #838383;
  font-weight: 100;
  opacity: 0.8;
  font-size: 15px;
`

const Line = styled.div`
  border-bottom: 1px solid #838383;
  margin: 5px 0;
`

export default class Info extends Component {
  render() {
    return (
      <ContentContainer>
        <Text>HOURS OF OPERATION</Text>
        <Line />
        <Content>
          At Nightly Spirits Houston, our haunted pub tours are an experience
          that you won't soon forget!
        </Content>
        <Text>HOURS OF OPERATION</Text>
        <Line />
        <Content>
          At Nightly Spirits Houston, our haunted pub tours are an experience
          that you won't soon forget!
        </Content>
      </ContentContainer>
    )
  }
}
