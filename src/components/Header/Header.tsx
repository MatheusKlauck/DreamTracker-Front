import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, HStack, Menu, MenuButton, MenuGroup, MenuItem, MenuList, VStack } from "@chakra-ui/react"


const Header = () => (
    <>
        <HStack spacing={4}>
            <Button>Novo objetivo</Button>
            <Menu>
                <MenuButton aria-controls="my_goals">
                    Meus objetivos <ChevronDownIcon />
                </MenuButton>
                <MenuList id='my_goals'>
                    <MenuGroup title='Estes são os seus objetivos em aberto'>
                        <MenuItem>Objetivo 1</MenuItem>
                        <MenuItem>Objetivo 2</MenuItem>
                        <MenuItem>Objetivo 3</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </HStack>
    </>
)

export { Header }