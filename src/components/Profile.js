import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import context
import { useAuth } from "../context/auth";

export default function Profile() {
	const { user, logout } = useAuth();
	const history = useHistory();

	useEffect(() => {
		console.log("user:", user);
	}, [user]);

	return (
		<>
			<Greeting>Hello {user && user.email}</Greeting>
			<Button
				type="submit"
				onClick={() => {
					user ? logout() : history.push("/login");
				}}
			>
				{user ? "Logout" : "Login"}
			</Button>
		</>
	);
}

const Button = styled.button`
	margin: 1em;
`;
const Greeting = styled.div`
	text-align: center;
`;
