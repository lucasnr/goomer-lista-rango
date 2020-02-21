import styled from 'styled-components';

export const Container = styled.div`
	align-items: center;
	border-radius: 4px;
	box-shadow: 0px 4px 8px #dcdcdc;
	display: flex;
	overflow: hidden;
`;

export const Info = styled.div`
	padding: 0px 1em;
`;

export const Image = styled.img`
	height: 115px;
	object-fit: cover;
	object-position: center;
	width: 115px;
`;

export const Name = styled.h4`
	font-weight: normal;
	margin: 0px;
`;

export const Price = styled.span`
	color: #009ca3;
	font-weight: bold;
`;

export const FormerPrice = styled.span`
	color: #989898;
	font-size: 0.75em;
	font-weight: bold;
	margin-left: 0.5em;
	text-decoration: line-through;
`;

export const Sale = styled.span`
	background-color: #2b0d61;
	border-bottom-right-radius: 9999px;
	border-top-right-radius: 9999px;
	color: #fff;
	display: block;
	font-size: 0.75em;
	margin: 0.75em 0px;
	padding: 0.5em 1.5em;
`;
