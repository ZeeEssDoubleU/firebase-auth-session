import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// import components
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
// import provider
import { AuthProvider } from "./context/auth";

function App() {
	return (
		<AuthProvider>
			<Container>
				<Navbar />
				<Main>
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</Switch>
				</Main>
			</Container>
		</AuthProvider>
	);
}

export default App;

const Container = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	background: lightblue;
`;
const Main = styled.main`
	display: grid;
	overflow: scroll;
	justify-content: center;
`;
