/* globals describe, it, expect */
import React from 'react'
import {shallow, render} from 'enzyme'

import Button from '../'

describe('First test', () => {
  it('should match snapshot', () => {
    expect(shallow(<Button>Test</Button>)).toMatchSnapshot()
  })

  it('should render without throwing an error', () => {
    expect(render(<Button>Test</Button>).text()).toEqual('Test')
  })
})
