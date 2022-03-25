import React from 'react'

import Checkbox from '../Checkbox'
import { renderWithTheme } from '../../../tests/renderWithTheme'
import { screen } from '@testing-library/dom'

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
