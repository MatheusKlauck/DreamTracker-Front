import { Box, Center, Heading } from "@chakra-ui/react"
import { DisplayAsGrid } from "../components/Goals/Displays/DisplayAsGrid"
import { GoalProvider } from "../hooks/useGoal"


const Feed = () => {
    return <>
        <Box>
            <Box textAlign={"center"} pb={20} pt={8}>
                <Heading size="lg">Não perca seu foco! Aqui estão as suas metas para hoje.</Heading>
            </Box>
            <Box maxH={"60vh"} overflowY={"scroll"} p={2}
                sx={{
                    '&::-webkit-scrollbar': {
                        w: '2',
                    },
                    '&::-webkit-scrollbar-track': {
                        w: '8',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '8',
                        bg: `gray.100`,
                    },
                }}
            >
                <GoalProvider>
                    <DisplayAsGrid />
                </GoalProvider>
            </Box>
        </Box>
    </>
}

export { Feed }