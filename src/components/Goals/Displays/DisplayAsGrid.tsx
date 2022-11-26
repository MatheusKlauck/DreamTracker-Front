import { SimpleGrid } from "@chakra-ui/react";
import { useGoal } from "../../../hooks/useGoal";
import { GoalCard } from "../GoalCard";

interface props {
}

export const DisplayAsGrid = () => {
    const { goals } = useGoal();

    return <>
        <SimpleGrid columns={3} spacing={8} minChildWidth='520px'>
            {
                goals &&
                goals.map((goal) => (
                    <GoalCard goal={goal} />))
            }
        </SimpleGrid>
    </>
}