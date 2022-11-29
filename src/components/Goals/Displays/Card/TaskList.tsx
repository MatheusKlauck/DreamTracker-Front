import { Checkbox, Heading, VStack } from "@chakra-ui/react"
import { Goal } from "../../../../models/Goal"

interface props {
    goal: Goal;
}

const TaskList = ({ goal }: props) => {
    return <>
        {goal.Tasks.length > 0 ?
            <>
                <Heading size='xs'>Você subdividiu esta meta em {goal.Tasks.length} tarefas</Heading>
                <VStack align={"left"} pl={2}>
                    {goal.Tasks.map((task) => (
                        <Checkbox key={task.Id}>{task.Description}</Checkbox>
                    ))}
                </VStack>
            </> :
            <Heading size='xs'>Esta meta não foi subdividida em tarefas</Heading>
        }

    </>
}

export { TaskList }