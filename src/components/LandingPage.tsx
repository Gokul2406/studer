import React from "react";
import {Flex, Heading, Text} from "@chakra-ui/react";

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
		<Flex justifyContent="center" alignItems="center" height="100vh">
		<Flex direction="column">
			<Heading>Hey {this.state.username} 👋 </Heading>
		</Flex>
		</Flex>
		)
	}
}
