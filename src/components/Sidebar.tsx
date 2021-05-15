import {Flex, Text} from "@chakra-ui/layout";
import React from "react";
import {BsFillBellFill, BsMic} from "react-icons/bs"

const Sidebar: React.FC = () => {
	return(
	<Flex direction="column" background="gray.700" width="9.5vh" p={4}>
	<BsFillBellFill size="lg"/>
	<Text>Todo </Text>
	<br />
	<BsMic size="lg"/>
	<br />
	<Text>Life Goals </Text>
	</Flex>

	)	
}


export default Sidebar;
