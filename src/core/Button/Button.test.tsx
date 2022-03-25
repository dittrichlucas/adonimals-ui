import React from 'react'

import Button from '.'
import { renderWithTheme } from '../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'

describe('', () => {
    test('', () => {
        renderWithTheme(
        <Button
            variant='contained'
            size='medium'
            color='primary'
            disabled={ false }>Button
        </Button>)
        const test = screen.getByRole('button', { name: 'Button' })

        expect(test.tagName).toBe('BUTTON')
    })
})
