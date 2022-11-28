import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, HStack, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { BiUserCircle } from "react-icons/bi";

const Header = () => (
    <>
        <HStack justify="space-between">
            <Box>
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
            </Box>
            <Menu>
                <MenuButton aria-controls="user" as={IconButton} icon={<BiUserCircle />} variant="unstyled" fontSize={"4xl"}>
                </MenuButton>
                <MenuList id='user'>
                    <MenuGroup>
                        <MenuItem>Conta</MenuItem>
                        <MenuItem>Assinatura</MenuItem>
                        <MenuItem>Preferências</MenuItem>
                        <MenuDivider />
                        <MenuItem>Sair</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </HStack>


    </>
)

export { Header }