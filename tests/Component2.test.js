import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import Component2 from '../src/ui/components/Component2'

describe('Test Component 2', () => {
    let container

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    it('rendered correctly', () => {
        act(() => {
            ReactDOM.render(<Component2/>, container)
        })

        const component2Container = container.querySelector('#component2-container')
        const text = component2Container.querySelector('h1')

        expect(text.textContent).toBe('Component2')
    })
})
