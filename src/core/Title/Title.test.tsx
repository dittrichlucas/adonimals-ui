import React from 'react'
import { renderWithTheme } from '../../tests/renderWIthTheme'
import Title from '.'
import { screen } from '@testing-library/react'

describe('testing title component', () => {
    test('it should render an h1', () => {
        renderWithTheme(<Title variant='heading1'>Teste H1</Title>)
        const test = screen.getByRole('heading', { name: 'Teste H1' })

        expect(test.tagName).toBe('H1')
    })
})
