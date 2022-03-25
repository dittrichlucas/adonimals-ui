import React from 'react'

import { renderWithTheme } from '../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'
import Text from '.'

describe('', () => {
    test('', () => {
        renderWithTheme(<Text variant='medium' element='p' color='#000'>Teste 1</Text>)
        const test = screen.getByText('Teste 1')

        expect(test.tagName).toBe('P')
    })
})
