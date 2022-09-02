import React from 'react'
import { IconProps, IconWrapper } from '../../style'

const VoicemailIcon: React.FC<IconProps> = ({ color = 'colors.greyscale.900', size }) => {
    return (
        <IconWrapper color={ color }>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-voicemail"><circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line></svg>
        </IconWrapper>
    )
}

export default VoicemailIcon