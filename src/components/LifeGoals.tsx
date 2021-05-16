import React, {ChangeEvent} from "react"
import {Flex, Heading , Input, Button, Text} from "@chakra-ui/react"


interface State {
	lifeGoals: Array<string>,
	newLifeGoal: string,
	showSuccess: Boolean
	showNotEnough: Boolean
}


export default class LifeGoals extends React.Component<{}, State> {
	constructor(props: any) {
		super(props)
		this.state = {
			lifeGoals: [],
			newLifeGoal: "",
			showSuccess: false,
			showNotEnough: false
		}
	}	

	handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({newLifeGoal: e.target.value})
	}


	handleSubmit = (e: any) => {
		e.preventDefault();
		this.state.lifeGoals.push(this.state.newLifeGoal)
		localStorage.setItem("lg", JSON.stringify(this.state.lifeGoals))
		this.setState({showSuccess: true})
	}

	render() {
		return(
		<Flex alignItems="center" justifyContent="center" mt={5} direction="column">
			<Heading>Let's see your Life Goals </Heading>
			<Flex mt={6} background="gray.600" p={6} direction="column" width="50vh" >
				<Heading>Add Life Goal</Heading>
				{this.state.showNotEnough ? <Text mt={4} >You entered nothing</Text>: null}
				<Input 
				mt={4} 
				placeholder="Visit the 7 wonders of the world"
				onChange={this.handleChange}
				value={this.state.newLifeGoal}
				/>
				<Button onClick={this.handleSubmit} mt={5} colorScheme="purple" >Add</Button>
				{this.state.showSuccess ? <Text mt={3}>Life Goal Added Successfully</Text> : null}
				
			</Flex>
		</Flex>
		)
	}
}
