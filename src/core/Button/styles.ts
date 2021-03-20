import styled from 'styled-components'
import { variant } from 'styled-system'

export const StyledButton = styled('button')(
    {
        appearance: 'none',
        fontFamily: ''
    },
    variant({
        variants: {
            primary: {
                color: 'white',
                bg: 'green'
            },
            secondary: {
                color: 'white',
                bg: 'black'
            }
        }
    })
)
