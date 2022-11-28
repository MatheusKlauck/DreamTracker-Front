import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { TiPlus } from "react-icons/ti";

export const CreateGoalModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
        <Button onClick={onOpen} leftIcon={<TiPlus />}>Adicionar meta</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Adicionar meta rapidamente
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button>Adicionar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}