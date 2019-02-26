import React from 'react';
import { Divider } from '../../styles/shapes';
import { Container } from './Header.style';

export default ({ title, margin, dividerMedia }) => (
	<Container>
		<h1>{title}</h1>
		<Divider margin={margin} size='500px' dividerMedia={dividerMedia} />
	</Container>
);
