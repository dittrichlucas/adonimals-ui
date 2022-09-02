import React from 'react'

import Avatar from '.'
import { renderWithTheme } from '../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'

describe('', () => {
    test('', () => {
        renderWithTheme(
        <Avatar
            src=''
            label='Username'
            alt=''
            variant='large'
        />)
        const test = screen.getByText('U')

        expect(test.tagName).toBe('SPAN')
    })
})
