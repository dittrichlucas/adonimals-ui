import React from 'react'
import { IconProps, IconWrapper } from '../../style'

const PlayCircleIcon: React.FC<IconProps> = ({ color = 'colors.greyscale.900', size }) => {
    return (
        <IconWrapper color={ color }>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-play-circle"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
        </IconWrapper>
    )
}

export default PlayCircleIcon