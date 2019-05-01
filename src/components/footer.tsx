/*
 * Copyright (c) 2019 Ali I. Avci
 */
import styled from "styled-components";

const Footer = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: any) => props.backgroundColor};
  min-height: 10em;
  border-top: solid;
  border-width: 0.1em;
  padding-bottom: 1em;
  text-align: left;
  border-top: solid;
  border-color: ${(props: any) => props.borderColorColor};
  border-width: 0.1em;
  a {
    padding: 0.2em;
  }
`

export default Footer