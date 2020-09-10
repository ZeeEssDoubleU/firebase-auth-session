import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import context
import { useAuth } from "../context/auth";

export default function Landing() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();
	const history = useHistory();

	const handleLogin = async (event) => {
		event.preventDefault();
		await login(email, password);
		history.push("/profile");
	};

	return (
		<Form onSubmit={handleLogin}>
			<label htmlFor="email">Email:</label>
			<Input
				type="email"
				name="email"
				onChange={(event) => setEmail(event.target.value)}
				value={email}
			/>
			<label htmlFor="password">Password:</label>
			<Input
				type="password"
				name="password"
				onChange={(event) => setPassword(event.target.value)}
				value={password}
			/>
			<Button type="submit">Login</Button>
		</Form>
	);
}

const Button = styled.button``;
const Form = styled.form`
	display: grid;
`;
const Input = styled.input`
	margin: 0 0 1em 0;
	height: 2em;
	width: 18em;
`;
