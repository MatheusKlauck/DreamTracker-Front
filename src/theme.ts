import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

const baseColor = 'blue';

const customTheme = extendTheme({
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

const customScroll =
{
    '&::-webkit-scrollbar': {
        w: '2',
    },
    '&::-webkit-scrollbar-track': {
        w: '8',
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '4',
        bg: `gray.100`,
    },
}

export { customScroll, customTheme }