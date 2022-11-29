import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack, Text, Box, Flex } from "@chakra-ui/react"
import { TiPlus } from "react-icons/ti";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Goal, goalValidationSchema } from "../../models/Goal";
import { Input } from "../Input/Input";
import { useGoal } from "../../hooks/useGoal";


export const CreateGoalModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { register, handleSubmit,
        formState: { errors, isSubmitting } } = useForm<Goal>({
            resolver: yupResolver(goalValidationSchema),
        });

    const { addGoal } = useGoal();
    const handleFormSubmit: SubmitHandler<Goal> = async (e) => {
        await addGoal(e);
    }

    return <>
        <Button onClick={onOpen} leftIcon={<TiPlus />}>Adicionar meta</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Adicionar meta rapidamente
                </ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <ModalBody>
                        <VStack>
                            <Input placeholder="Título da meta*" error={errors.Title} {...register("Title")} />
                            <Input placeholder="Descrição" error={errors.Description} {...register("Description")} />
                        </VStack>
                    </ModalBody>
                    <ModalFooter justifyContent="space-between">
                        <Text>* Campo obrigatório</Text>
                        <Button type="submit" isLoading={isSubmitting}>Adicionar</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    </>
}