import { Box, Heading } from "@chakra-ui/react"
import { CreateGoalModal } from "../components/Goals/CreateGoalModal"
import { DisplayAsGrid } from "../components/Goals/Displays/Card/DisplayAsGrid"
import { GoalProvider } from "../hooks/useGoal"
import { customScroll } from "../theme"

const Feed = () => {
    return <>
        <Box textAlign={"center"} pb={20} pt={8}>
            <Heading size="lg">Não perca seu foco! Aqui estão as suas metas para hoje.</Heading>
        </Box>
        <GoalProvider>
            <Box textAlign="right" pb={8} pr={4} pl={2}>
                <CreateGoalModal />
            </Box>
            <Box maxH={"65vh"} overflowY={"scroll"} sx={customScroll} pb={8} pr={2} pl={2}>
                <DisplayAsGrid />
            </Box>
        </GoalProvider>
    </>
}

export { Feed }