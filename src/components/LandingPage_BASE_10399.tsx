import React from "react";
import {Flex, Heading, Text, Button, MenuList, Menu, MenuButton} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { HamburgerIcon } from "@chakra-ui/icons"

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
		<Flex p={6}>
		<Menu>
			<MenuButton as={Button} leftIcon={<HamburgerIcon />} p={6}>Menu</MenuButton>
			<MenuList p={6}>
			Todos
			</MenuList>
		</Menu>
		</Flex>
		<Flex justifyContent="center" alignItems="center">
		<Flex direction="column">
			<Heading>Hey {this.state.username} 👋 </Heading>
<FontAwesomeIcon icon="coffee" />
		</Flex>
		</Flex>
		</>
		)
	
	}
}
