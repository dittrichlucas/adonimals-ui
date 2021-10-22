import React, { useState, useEffect } from 'react'
import Text from '../Text'
import { AvatarProps, StyledAvatarBox, StyledAvatarImage } from './style'

const Avatar = (props: AvatarProps): JSX.Element => {
    const { src, alt, label } = props
    const [hasError, setHasError] = useState(false)
    const firstLetter = label?.charAt(0)

    useEffect(() => {
        setHasError(false)
    }, [src])

    if (src && !hasError) {
        return <StyledAvatarImage src={ src } alt={ alt } onError={ () => setHasError(true) } />
    }

    return (
        <StyledAvatarBox src={ src } display='flex' alignItems='center' justifyContent='center'>
            { firstLetter && (
                <Text variant='large' element='span' color='inherit'>
                    { firstLetter }
                </Text>
            ) }
        </StyledAvatarBox>
    )
}

export default Avatar
