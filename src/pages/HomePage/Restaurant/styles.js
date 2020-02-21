import styled from 'styled-components';

export const Container = styled.div`
	border-radius: 4px;
	box-shadow: 0px 2px 4px #ccc;
	display: flex;
	position: relative;
`;

export const Image = styled.img`
	border-bottom-left-radius: 4px;
	border-top-left-radius: 4px;
	display: block;
	height: 100px;
	object-fit: cover;
	object-position: center;
	width: 100px;
`;

export const Info = styled.div`
	color: #404040;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0px 2em;
	text-align: left;
`;

export const Name = styled.h3`
	font-size: 1em;
	font-weight: bold;
	margin: 0;
`;

export const Address = styled.h4`
	font-size: 12px;
	font-weight: normal;
	margin: 0;
`;

export const Status = styled.span`
	align-items: center;
	background-color: ${props => (props.open ? '#2b0d61' : '#B5ABD4')};
	border-radius: 50%;
	box-shadow: 0px 1px 2px #ccc;
	color: #fff;
	display: flex;
	font-size: 8px;
	font-weight: bold;
	height: 48px;
	justify-content: center;
	padding: 1em;
	position: absolute;
	right: 0;
	top: 0;
	transform: translate(50%, -50%);
	transition: background-color 0.5s ease-in-out;
	width: 48px;
`;
