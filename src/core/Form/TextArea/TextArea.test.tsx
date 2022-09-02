import React from 'react'

import { renderWithTheme } from '../../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'
import TextArea from '.'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <TextArea
                value='Test 1'
                label='Test'
                onChange={ () => { return } }
            />
        )
        const test = screen.getByDisplayValue('Test 1')

        expect(test.tagName).toBe('TEXTAREA')
    })
})
