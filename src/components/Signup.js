import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import context
import { useAuth } from "../context/auth";

export default function Landing() {
	const [displayName, setDisplayname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { register, errors: authErrors } = useAuth();

	useEffect(() => {
		if (authErrors) setErrors(authErrors);
	}, [authErrors]);

	const handleRegister = (event) => {
		event.preventDefault();
		if (confirmPassword !== password)
			setErrors({ code: "auth/passwords-dont-match" });
		else {
			register(email, password);
			setDisplayname("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		}
	};

	return (
		<Form onSubmit={handleRegister}>
			<label htmlFor="display name">Display Name:</label>
			<Input
				type="text"
				name="display name"
				onChange={(event) => setDisplayname(event.target.value)}
				value={displayName}
			/>
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
			<label htmlFor="confirm password">Confirm Password:</label>
			<Input
				type="password"
				name="confirm password"
				onChange={(event) => setConfirmPassword(event.target.value)}
				value={confirmPassword}
			/>
			<Button type="submit">Register</Button>
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
