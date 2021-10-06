import { screen } from '@testing-library/dom'
import React from 'react'
import Checkbox from '../Checkbox'
import { renderWithTheme } from '../../../tests/renderWithTheme'

describe('', () => {
    test('', () => {
        renderWithTheme(
            <Checkbox
                label='Test'
                id='checkbox-test'
                checked={ false }
                onChange={ () => { return } }
            />
        )
        const test = screen.getByLabelText(/Test/)

        expect(test.tagName).toBe('INPUT')
    })
})
