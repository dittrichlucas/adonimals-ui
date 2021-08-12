import React from 'react'
import { renderWithTheme } from '../../tests/renderWithTheme'
import Button from '.'
import { screen } from '@testing-library/dom'

describe('', () => {
    test('', () => {
        renderWithTheme(
        <Button
            variant='contained'
            size='medium'
            backgroundColor='#000'
            color='primary'
            disabled={false}
        >Button
        </Button>)
        const test = screen.getByRole('button', { name: 'Button' })

        expect(test.tagName).toBe('BUTTON')
    })
})
