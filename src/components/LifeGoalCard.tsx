import {Box} from "@chakra-ui/layout"
import React from "react"
import {Heading} from "@chakra-ui/react";

interface Props {
	lifeGoal: string
}

const LifeGoalCard: React.FC<Props> = ({ lifeGoal }) => {
	return(
		<Box p={12} mt={6}>
		<Heading mt={1}>{lifeGoal}</Heading>
		</Box>
	)
}

export default LifeGoalCard
