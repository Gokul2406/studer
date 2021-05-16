import React from "react";
import {Flex, Heading, Button, MenuList, Menu, MenuButton} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import LifeGoals from "./LifeGoals"

interface IState {
	username: string
}

export default class LandingPage extends React.Component<{}, IState> {
		constructor(props: any) {
			super(props)
			this.state = {
				username: ""
			}
		}

	componentDidMount() {

		const usernameFromLS = localStorage.getItem("username")
		this.setState({username: usernameFromLS!})
	}

	render() {
		return (
		<>
		<Router>
		<Flex p={6}>
		<Menu>
			<MenuButton as={Button} leftIcon={<HamburgerIcon />} p={6}>Menu</MenuButton>
			<MenuList p={6}>
			<Link to="/todos">
			Life Goals
			</Link>
			</MenuList>
		</Menu>
		</Flex>
		<Flex justifyContent="center" alignItems="center">
		<Flex direction="column">
			<Heading>Hey {this.state.username} 👋 </Heading>
		</Flex>
		</Flex>
		<Route path="/lifegoals" component={LifeGoals} />
		</Router>
		</>
		)
	
	}
}
