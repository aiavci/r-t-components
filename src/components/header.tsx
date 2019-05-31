/*
 * Copyright (c) 2019 Ali I. Avci
 */
import styled from "styled-components";

const Header = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: any) => props.backgroundColor};

  nav {
    display: flex;
    width: 1024px;
    align-items: center;
    justify-content: center;
    a {
      color: ${(props: any) => props.color};
      padding: 0 1rem 0.5rem 1rem;
      display: inline-block;
      z-index: 10;
    }
  }

  a {
    padding: 1rem;
    display: inline-block;
  }
`

export default Header