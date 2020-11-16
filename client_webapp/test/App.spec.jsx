import React from 'react'
import { shallow, mount } from "enzyme"
import { App } from '../src/App'

it('should contain "Routes" ', () => {
  const wrapper = mount(<App />)
  expect(wrapper.text()).toContain('Routes')
})