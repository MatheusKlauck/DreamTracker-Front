import { Header } from "../../components/Header/Header";
import { Outlet } from 'react-router-dom'
import { Box } from "@chakra-ui/react";

export function DefaultLayout() {
    const verticalPadding = 4;
    const horizontalPadding = 12;
    return (
        <>
            <Box mt={verticalPadding * 2} ml={horizontalPadding * 2} mr={horizontalPadding * 2}>
                <Header />
                <Box pt={verticalPadding} pb={verticalPadding} pl={0} pr={0}>
                    <Outlet />
                </Box>
            </Box>

        </>
    )

}