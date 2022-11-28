import { Goal } from "../../../models/Goal";
import { Heading, Box, Text, Checkbox, VStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'

interface props {
    goal: Goal;
}

export const GoalCard = ({ goal }: props) => {
    return <>
        <Card bg={"gray.50"} shadow={'lg'}>
            <CardHeader p={4}>
                <Heading size='md'>{goal.Title}</Heading>
                <Text as='i' pl={2}>
                    {goal.Description}
                </Text>
            </CardHeader>
            <CardBody pt={2}>
                <Box pl={2} pt={0}>
                    <Heading size='xs'>Você dividiu esta meta em {goal.Tasks.length} tarefas</Heading>
                    <VStack align={"left"} pl={2}>
                        {goal.Tasks.map((task) => (
                            <Checkbox>{task.Description}</Checkbox>
                        ))}
                    </VStack>
                </Box>
            </CardBody>
        </Card>
    </>
}