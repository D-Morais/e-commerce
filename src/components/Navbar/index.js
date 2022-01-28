import React from 'react';
import {
Nav,
NavLink,
NavMenu,
} from './styles';
import Cart from '../Cart'
import {Typography } from '@material-ui/core/';

const Navbar = () => {
return (
		<Nav>
			<Typography variant='h4'>
                    DM - Sports
            </Typography>
			<NavMenu>
				<NavLink to='/home' activeStyle>
					Home
				</NavLink>
				<NavLink to='/basketball' activeStyle>
					Basquete
				</NavLink>
				<NavLink to='/soccer' activeStyle>
					Futebol
				</NavLink>
				<NavLink to='/contato' activeStyle>
					Contato
				</NavLink>	
			</NavMenu>
			<Cart/>
		</Nav>	
	);
};

export default Navbar;
