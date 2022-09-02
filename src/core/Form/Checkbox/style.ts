import styled from 'styled-components'
import { SizeProps, SpaceProps } from 'styled-system'

export type StyledCheckboxProps =
    & SpaceProps
    & SizeProps
    & {
        id?: string
        label: string
        checked: boolean
        onChange: () => void
    }

export const Icon = styled('svg')(() => ({
    fill: 'none',
    stroke: 'white',
    strokeWidth: '2px'
}))

export const HiddenCheckbox = styled('input').attrs({ type: 'chekbox' })(() => ({
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
}) as const)

export const StyledCheckbox = styled('div')<{ checked: boolean }>(({ checked, theme }) => ({
    display: 'inline-block',
    cursor: 'pointer',
    width: theme.radii['16'],
    height: theme.radii['16'],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: checked ? theme.colors.secondary['500'] : theme.colors.greyscale['500'],
    backgroundColor: checked ? theme.colors.secondary['500'] : theme.colors.transparent,
    borderRadius: theme.radii['4'],
    transition: 'all 400ms ease-in-out',
    [`${HiddenCheckbox}:focus + &`]: {
        boxShadow: `0 0 0 ${theme.radii['4']} ${theme.colors.primary['900']}`
    },
    [`${Icon}`]: {
        visibility: checked ? 'visible' : 'hidden'
    }
}))
