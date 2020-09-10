import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
	return (
		<Container>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/login">Login</StyledLink>
			<StyledLink to="/signup">Register</StyledLink>
			<StyledLink to="/profile">Profile</StyledLink>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	background: white;
`;
const StyledLink = styled(NavLink)`
	margin: 1em;
	text-align: center;
`;
