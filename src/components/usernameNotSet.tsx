import React, {ChangeEvent, useState} from "react";
import {Flex, Heading, Input, Text, Button} from "@chakra-ui/react"



const UsernameNotSet: React.FC = () => {

	const [username, setUsername] = useState("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(username)
		setUsername(e.target.value)	
	}

	const handleSubmit = () => {
		localStorage.setItem("username", username);	
		window.location.reload()
	}
	
	return (
	<>
	<Flex alignItems="center" justifyContent="center">
			<Heading>Hello Newbie </Heading>
		</Flex>
		<Flex height="100vh" p={12} alignItems="center" justifyContent="center">
		<Flex background="gray.700" direction="column" p={14} r={6}>
			<Heading mb={6}>Let's Give you a Name </Heading>	
			<Text mb={3}>Type a username </Text>
			<Input mb={3} variant="filled" placeholder="Type the username" value={username} onChange={handleChange}></Input>
			<Button colorScheme="purple" onClick={handleSubmit}>Start using the app</Button>
		</Flex>
		</Flex>
	</>
	)
}

export default UsernameNotSet;
