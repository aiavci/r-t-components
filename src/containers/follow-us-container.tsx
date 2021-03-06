/*
 * Copyright (c) 2019 Ali I. Avci
 */
import * as React from 'react';

import styled from 'styled-components';

export interface Props {
  followUsText: string,
  children: any
}

const Outline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FollowUsContainer = ({followUsText = "Follow Us", children}: Props) => {
  return (
    <Outline>
      <h3 style={{ display: 'inline-flex' }}>
        {followUsText}: 
      </h3>
      {children}
    </Outline>
  )
}

export default FollowUsContainer