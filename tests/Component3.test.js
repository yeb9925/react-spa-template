import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import Component3 from '../src/ui/components/Component3'

describe('Test Component 3', () => {
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
            ReactDOM.render(<Component3/>, container)
        })

        const component3Container = container.querySelector('#component3-container')
        const text = component3Container.querySelector('h2')

        expect(text.textContent).toBe('Component #3')
    })
})
