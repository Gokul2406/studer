import {Flex, Heading} from '@chakra-ui/layout';
import React from 'react';
import './App.css';
import UsernameNotSet from './components/usernameNotSet';
import LandingPage from "./components/LandingPage"

interface State {
	username?: string
}

export default class App extends React.Component<{}, State> {
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
		{this.state.username === null ? <UsernameNotSet />: <LandingPage />}
  		</>
  		);
  	}
}

