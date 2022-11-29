import { Heading, Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { Goal } from '../../../../models/Goal';
import { TaskList } from "./TaskList";

interface props {
    goal: Goal;
}

export const GoalCard = ({ goal }: props) => {
    return <>
        <Card bg={"gray.50"} shadow={'lg'}>
            <CardHeader p={4}>
                <Heading size='md'>{goal.Title}</Heading>
                <Text as='i' pl={2}>
                    {!!goal.Description ? goal.Description : "Sem descrição"}
                </Text>
            </CardHeader>
            <CardBody pt={2}>
                <Box pl={2} pt={0}>
                    <TaskList goal={goal} />
                </Box>
            </CardBody>
        </Card>
    </>
}