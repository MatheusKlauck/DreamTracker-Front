import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const baseColor = 'blue';

export const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                bg: `white`,
                color: `${baseColor}.700`
            }
        }
    },
    fonts: {
        body: "system-ui"
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold'
            },

            defaultProps: {
                colorScheme: `${baseColor}`,
            },
        },
    },

});