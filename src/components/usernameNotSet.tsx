import React, {ChangeEvent, useState} from "react";
import {Flex, Heading, Input, Text, Button, Box, Link} from "@chakra-ui/react"



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

	const scrollToElement = (id: string) => {
		const elem = document.getElementById(id)
		elem!.scrollIntoView({behavior: 'smooth'})
	} 
	
	return (
	<>
	<Flex p={12} alignItems="center" justifyContent="center" mb={6}>
			<Heading>Hey Newbie </Heading>
		</Flex>
	<Flex alignItems="center" justifyContent="center" direction="column">
			<Heading>Why you should use Studer </Heading>
		</Flex>
	<Flex alignItems="center" justifyContent="center" height="50vh" mb={10} ml={12}>
			<Box borderRadius="20px" p={5} bg="purple.800" mr={14}>
				<Text fontSize="4xl" mb={3}>Your data in Your Hands 🔒🔒</Text>
				<Text fontSize="2xl" mb={3}>All of your data is stored in the browser itself making it more secure</Text>
			</Box>
			<Box borderRadius="20px" p={5} bg="purple.800" mr={14}>
				<Text fontSize="4xl">Free and Open Sourced Project 💥💥</Text>
				<Text fontSize="2xl">Studer is completly free and follows the FOSS code of Conduct </Text>
				<Text fontSize="2xl">Check out the code <Link href="https://github.com/Gokul2406/studer" target="_blank">here</Link> </Text>
			</Box>
		</Flex>
		<Flex justifyContent="center" alignItems="center">
		<Button onClick={() => scrollToElement('register')} colorScheme="purple" >Let's Get started</Button>
		</Flex>
		<section id="register">
		<Flex height="100vh" p={12} alignItems="center" justifyContent="center">
		<Flex background="gray.700" direction="column" p={14} r={6}>
			<Heading mb={6}>Let's Give you a Name </Heading>	
			<Text mb={3}>Type a username </Text>
			<Input mb={3} variant="filled" placeholder="Type the username" value={username} onChange={handleChange}></Input>
			<Button colorScheme="purple" onClick={handleSubmit}>Start using the app</Button>
		</Flex>
		</Flex>
		</section>
	</>
	)
}

export default UsernameNotSet;
