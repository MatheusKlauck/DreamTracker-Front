import { Box, Center, Heading } from "@chakra-ui/react"
import { DisplayAsGrid } from "../components/Goals/Displays/DisplayAsGrid"
import { GoalProvider } from "../hooks/useGoal"


const Feed = () => {
    return <>
        <Box>
            <Box textAlign={"center"} pb={20} pt={8}>
                <Heading size="lg">Não perca seu foco! Aqui estão as suas metas para hoje.</Heading>
            </Box>
            <GoalProvider>
                <DisplayAsGrid />
            </GoalProvider>
        </Box>
    </>
}

export { Feed }