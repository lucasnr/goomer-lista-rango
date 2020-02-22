import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const Container = styled.form`
	border-radius: 9999px;
	box-shadow: 0px 2px 4px #ccc;
	display: flex;
	overflow: hidden;
	margin: 2em auto;
	max-width: 840px;
	position: relative;
	width: 100%;

	input,
	label {
		font-size: 0.75em;
		padding: 0.5em 1em;

		@media (min-width: 562px) {
			font-size: 1em;
		}

		@media (min-width: 768px) {
			padding: 0.5em 2em;
		}
	}

	input {
		background-color: #fbfbfb;
		border: none;
		flex: 1;
		padding-right: 3em;
	}

	label {
		white-space: nowrap;
	}

	button {
		background: #fbfbfb;
		border: none;
		position: absolute;
		right: 1em;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const Icon = styled(MdSearch)`
	font-size: 1em;

	@media (min-width: 562px) {
		font-size: 1.5em;
	}
`;
