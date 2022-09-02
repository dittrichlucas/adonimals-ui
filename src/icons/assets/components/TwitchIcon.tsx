import React from 'react'
import { IconProps, IconWrapper } from '../../style'

const TwitchIcon: React.FC<IconProps> = ({ color = 'colors.greyscale.900', size }) => {
    return (
        <IconWrapper color={ color }>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
        </IconWrapper>
    )
}

export default TwitchIcon