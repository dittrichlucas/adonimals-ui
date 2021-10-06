import { screen } from '@testing-library/dom'
import React from 'react'
import TextArea from '.'
import { renderWithTheme } from '../../../tests/renderWithTheme'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <TextArea
                value='Test 1'
                label='Test'
                color='primary'
                variant='outlined'
                onChange={ () => { return } }
            />
        )
        const test = screen.getByDisplayValue('Test 1')

        expect(test.tagName).toBe('TEXTAREA')
    })
})
