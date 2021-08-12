import { screen } from '@testing-library/dom'
import React from 'react'
import TextField from '.'
import { renderWithTheme } from '../../../tests/renderWithTheme'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <TextField
                variant='outlined'
                color='default'
                placeholder='Test'
                value='Test 1'
                onChange={ () => {} }
            />
        )
        const test = screen.getByDisplayValue('Test 1')

        expect(test.tagName).toBe('INPUT')
    })
})
