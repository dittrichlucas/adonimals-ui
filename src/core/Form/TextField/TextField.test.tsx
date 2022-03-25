import React from 'react'

import { renderWithTheme } from '../../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'
import TextField from '.'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <TextField
                variant='outlined'
                color='default'
                placeholder='Test'
                value='Test 1'
                onChange={ () => { return } }
            />
        )
        const test = screen.getByDisplayValue('Test 1')

        expect(test.tagName).toBe('INPUT')
    })
})
