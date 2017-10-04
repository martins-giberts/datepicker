// @flow
import React from 'react'
import type {Element} from 'react'
import {Button} from '@storybook/react/demo'

type Props = {
  onClick: () => void,
  children: Element<any>
}

export default ({
  onClick,
  children,
}: Props) => (
  <Button onClick={onClick}>
    {children}
  </Button>
)
