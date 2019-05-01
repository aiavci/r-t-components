/*
 * Copyright (c) 2019 Ali I. Avci
 */
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (max-width: 1024px) {
    width: 94%;
  }
  @media (min-width: 1024px) {
    width: 1024px;
  }
`

export default Page