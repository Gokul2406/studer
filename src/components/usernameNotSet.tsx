import React from "react";
import {Flex, Heading, Input, Text} from "@chakra-ui/react"


const UsernameNotSet: React.FC = () => {
	return (
	<>
	<Flex alignItems="center" justifyContent="center">
			<Heading>Hello Newbie </Heading>
		</Flex>
		<Flex height="100vh" p={12} alignItems="center" justifyContent="center">
		<Flex background="gray.700" direction="column" p={14} r={6}>
			<Heading mb={6}>Let's Give you a Name </Heading>	
			<Text mb={3}>Type a username </Text>
			<Input mb={3} variant="filled" placeholder="Type the username"></Input>
		</Flex>
		</Flex>
	</>
	)
}

export default UsernameNotSet;
