/*
 * Copyright (c) 2019 Ali I. Avci
 */
import * as React from 'react';

import styled from 'styled-components';

type Props = {
	logoUrl: string,
	companyName?: string,
	alignment?: string,
	isFooter?: boolean,
	isSmall?: boolean
};

type State = { value: string };

const HyperLink = styled.a<any>`
	display: flex;
	align-self: ${(props: any) => props.alignment};
	flex-direction: column;
	text-decoration: none;
	color: inherit;
`;

const Image = styled.img<any>`
	max-width: ${(props: any) => props.imageMaxWidth};
	align-self: ${(props: any) => props.alignment};
`;

const Paragraph = styled.p<any>`
	margin: 0;
	align-self: ${(props: any) => props.alignment};
	display: ${(props: any) => props.copyRightDisplay};
	font-size: 14px;
`;

class Logo extends React.Component<Props, State> {
  render() {
		let {companyName, alignment, isFooter, isSmall, logoUrl} = this.props;

		const copyRightDisplay = (this.props.isFooter) ? "block" : "none";

		alignment = this.props.alignment || "center";

		let imageMaxWidth
		if (isSmall) {
			imageMaxWidth = '2em'
		} else if(isFooter) {
			imageMaxWidth = '6em'
		} else {
			imageMaxWidth = '8em'
		}

	  return (
			<HyperLink href="/" alignment={alignment}>
				<Image src = {logoUrl} {...{imageMaxWidth, alignment}}/>

				<Paragraph {...{alignment, copyRightDisplay}}>
		  		© {new Date().getFullYear()} {companyName}
		  	</Paragraph>
		  </HyperLink>
	  )
	}
}

export default Logo
