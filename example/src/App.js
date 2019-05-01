import React, { Component } from 'react'

import { Header, Logo, Page, SocialMediaItem, FollowUsSection, ClickableCard, Footer } from 'r-t-components'

export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Header color="blue">
          <Logo logoUrl="aa.png" companyName="Ali Avci" />
          <nav>
            <a href="/">
              Sample Navigation Item
            </a>
          </nav>
        </Header>

        <Page>
          Page content
          <ClickableCard title="Test" imageUrl="https://picsum.photos/200/300" onClickEvent = {() => {console.log("Click handled")}}/>
        </Page>

        <Footer backgroundColor = "gray" borderColor = "yellow">
          <FollowUsSection>
            
            <SocialMediaItem linkUrl="" iconSelection = "facebook"/>
            <SocialMediaItem linkUrl="" iconSelection = "instagram"/>

          </FollowUsSection>
          <Logo logoUrl="aa.png" companyName="Ali Avci" isFooter />
        </Footer>
      </div>
    )
  }
}
