/*
 * Copyright (c) 2019 Ali I. Avci
 */
import * as React from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const SmallMenu = styled.div<any>`
  display: none;
  text-align: center;
  @media (max-width: ${(props: any) => props.size}) {
    display: block;
  }
`;

const LargeMenu = styled.div<any>`
  display: block;
  text-align: center;
  @media (max-width: ${(props: any) => props.size}) {
    display: none; 
  }
`;

type Props = {
  menu: any
  changeOnWidth?: any
}

type State = {
  isMenuShownInMobile: boolean
}

const MenuButton = ({isMenuOpenz, handleClick}: any) => {
  const [isMenuOpen] = React.useState(isMenuOpenz)
  
  return (
    <IconButton color="inherit" aria-label="Menu"
      style = {{
        marginLeft: -15,
        marginRight: 15,
      }}
      onClick = {() => handleClick()}
      >
      {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
    </IconButton>
  )
}

class ResponsiveMenu extends React.Component<Props, State> {
  state = {
    isMenuShownInMobile: false
  }

  handleClick = () => {
    this.setState({ isMenuShownInMobile: !this.state.isMenuShownInMobile });
  };

  render() {
    const changeOnWidth = this.props.changeOnWidth || "700px"

    const {
      menu
    } = this.props;

    return (
      <div>
        <LargeMenu className="large-menu" size={changeOnWidth}>
          {menu}
        </LargeMenu>
        <SmallMenu className="small-menu" size={changeOnWidth}>
          <MenuButton isMenuOpen = {this.state.isMenuShownInMobile} handleClick={() => this.handleClick()}/>
          {this.state.isMenuShownInMobile ? <div>{menu}</div> : null}
        </SmallMenu>
      </div>
    );
  }
}

export default ResponsiveMenu;