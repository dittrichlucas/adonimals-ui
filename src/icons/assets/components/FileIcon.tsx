import React from 'react'
import { IconProps, IconWrapper } from '../../style'

const FileIcon: React.FC<IconProps> = ({ color = 'colors.greyscale.900', size }) => {
    return (
        <IconWrapper color={ color }>
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
        </IconWrapper>
    )
}

export default FileIcon