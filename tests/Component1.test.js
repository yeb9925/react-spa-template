import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import Component1 from '../src/ui/components/Component1'

describe('Test Component 1', () => {
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
            ReactDOM.render(<Component1/>, container)
        })

        const component1Container = container.querySelector('#component1-container')
        const text = component1Container.querySelector('h2')

        expect(text.textContent).toBe('Component #1')
    })
})
