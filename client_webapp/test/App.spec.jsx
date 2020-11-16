import React from 'react'
import { shallow, mount } from "enzyme"
import { App } from '../App'

it('should contain the text "Hello World"', () => {
  const wrapper = mount(<App />)
  expect(wrapper.text()).toContain('http://localhost:5000/poll')
})