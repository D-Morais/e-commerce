import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background: #CCC;
	height: 55px;
	display: flex;
	justify-content: space-between;
	align-items:center;
	padding: 0.2rem calc((100vw - 1000px) / 5);
	@media screen and (max-width: 768px) {
		justify-content: flex-start;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	@media screen and (max-width: 500px) {
		font-size: small;
		justify-content: space-around;
		max-width: 230px;
	}
`;

export const NavLink = styled(Link)`
	color: black;
	text-decoration: none;
	height: 100%;
	margin-left: 50px;
	margin-right: 50px;
	cursor: pointer;
	&.active {
		font-weight: bold;
	}
	@media screen and (max-width: 768px) {
		margin-left: 20px;
		margin-right: 20px;
	}
	@media screen and (max-width: 500px) {
		margin-left: 5px;
		margin-right: 5px;
		
	}
`;