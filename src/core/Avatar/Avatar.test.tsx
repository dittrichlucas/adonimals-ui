import React from 'react'
import { renderWithTheme } from '../../tests/renderWithTheme'
import Avatar from '.'
import { screen } from '@testing-library/dom'

describe('', () => {
    test('', () => {
        renderWithTheme(
        <Avatar
            src=''
            label='Username'
            alt=''
        />)
        const test = screen.getByText('U')

        expect(test.tagName).toBe('SPAN')
    })
})
