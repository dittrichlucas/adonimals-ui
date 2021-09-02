import { screen } from '@testing-library/dom'
import React from 'react'
import Text from '.'
import { renderWithTheme } from '../../tests/renderWIthTheme'

describe('', () => {
    test('', () => {
        renderWithTheme(<Text variant='medium' element='p' color='#000'>Teste 1</Text>)
        const test = screen.getByText('Teste 1')

        expect(test.tagName).toBe('P')
    })
})
