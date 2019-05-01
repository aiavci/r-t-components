/*
 * Copyright (c) 2019 Ali I. Avci
 Very restrictive social media components
 */
import * as React from 'react';

import styled from 'styled-components';

import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';

const Hyperlink = styled.a`
  display: inline-flex;
  padding-left: 0.25em;
`;

type Props = {
  linkUrl: string
  iconSelection: string
}

const SocialMediaItem = ({linkUrl, iconSelection}: Props) => {
  let usedIcon = null;
  switch(iconSelection) {
    case "facebook":
      usedIcon = <FaFacebook size={36} />
      break;
    case "instagram":
      usedIcon = <FaInstagram size={36} />
      break;
    case "phone":
      usedIcon = <FaPhone size={36} />
      break;
    case "FaEnvelope":
      usedIcon = <FaEnvelope size={36} />
  }

  return (
    <Hyperlink href = {linkUrl}>
      { usedIcon }
    </Hyperlink>
  )
}

export default SocialMediaItem