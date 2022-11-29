import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface props extends ChakraInputProps {
    name: string;
    label?: string;
    helperText?: string;
    error?: FieldError;
}

const input: ForwardRefRenderFunction<HTMLInputElement, props> = ({ name, label, helperText, error, ...rest }, ref) => {
    return <>
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput name={name} id={name} ref={ref} {...rest} />
            {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
            {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    </>
}

export const Input = forwardRef(input)