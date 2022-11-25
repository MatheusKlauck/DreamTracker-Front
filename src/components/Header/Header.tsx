import { Box, Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"


const Header = () => (
    <>
        <Button colorScheme="cyan">Novo objetivo</Button>
        <Menu>
            <MenuButton aria-controls="my_goals">
                Meus objetivos
            </MenuButton>
            <MenuList id='my_goals'>
                <MenuGroup title='Seus objetivos'>
                    <MenuItem>Objetivo 1</MenuItem>
                    <MenuItem>Objetivo 2</MenuItem>
                    <MenuItem>Objetivo 3</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    </>
)

export { Header }