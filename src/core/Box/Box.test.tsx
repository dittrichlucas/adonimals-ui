import { screen } from '@testing-library/dom'
import React from 'react'
import Box from '.'
import { renderWithTheme } from '../../tests/renderWithTheme'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <Box element='footer'>Test element</Box>
        )
        const test = screen.getByText('Test element')

        expect(test.tagName).toBe('FOOTER')
    })
})
