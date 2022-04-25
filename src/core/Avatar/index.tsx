import React, { useEffect, useState } from 'react'

import Text from '../Text'
import { AvatarProps, StyledAvatarBox, StyledAvatarImage } from './style'

const Avatar = (props: AvatarProps): JSX.Element => {
    const { src, alt, label, variant } = props
    const [hasError, setHasError] = useState(false)
    const firstLetter = label?.charAt(0)

    useEffect(() => {
        setHasError(false)
    }, [src])

    if (src && !hasError) {
        return <StyledAvatarImage variant={ variant } src={ src } alt={ alt } onError={ () => setHasError(true) } />
    }

    return (
        <StyledAvatarBox variant={ variant } src={ src } display='flex' alignItems='center' justifyContent='center'>
            { firstLetter && (
                <Text variant='b1' element='span' color='inherit'>
                    { firstLetter }
                </Text>
            ) }
        </StyledAvatarBox>
    )
}

export default Avatar
