import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react"
import { DisplayGoal } from "../components/Goal/DisplayGoal"
import { Goal } from "../models/Goal"

const goals: Goal[] = [
    new Goal("Desenvolver o dreamTracker", "Criar teste 1", ["Abrir o navegador", "Criar teste", "Executar teste"]),
    new Goal("Teste 2", "Criar teste 2", ["Abrir o navegador", "Criar teste", "Executar teste"]),
    new Goal("Teste 3", "Criar teste 3", ["Abrir o navegador", "Criar teste", "Executar teste"]),
    new Goal("Teste 4", "Criar teste 4", ["Abrir o navegador", "Criar teste", "Executar teste"]),
]

const Feed = () => {
    return <>
        <Box>
            <Box textAlign={"center"}>
                <Heading size="lg">Não perca seu foco. Aqui estão as suas metas para hoje</Heading>
            </Box>
            <Center h='50vh'>
                {goals.map((goal) => (<DisplayGoal goal={goal} />))}
            </Center>

        </Box>
    </>
}

export { Feed }