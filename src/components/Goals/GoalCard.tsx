import { Goal } from "../../models/Goal";
import { Heading, Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

interface props {
    goal: Goal;
}

export const GoalCard = ({ goal }: props) => {
    return <>
        <Card bg={"gray.50"} shadow={'lg'}>
            <CardHeader>
                <Heading size='md'>{goal.Title}</Heading>
                <Text as='i' pl={2}>
                    {goal.Description}
                </Text>
            </CardHeader>
            <CardBody pl={6}>

                <Box pl={2}>
                    <Heading size='xs'>Você dividiu esta meta em {goal.Tasks.length} tarefas</Heading>
                    {goal.Tasks.map((task) => (
                        <Text pt='1' fontSize='sm'>
                            {task}
                        </Text>
                    ))}
                </Box>
            </CardBody>
        </Card>
    </>
}