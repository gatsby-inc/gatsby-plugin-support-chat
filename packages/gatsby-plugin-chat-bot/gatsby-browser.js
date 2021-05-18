import * as React from 'react'
import Widget from './src/components/widget'

export const wrapRootElement = ({ element }) =>
  <>
    {element}
    <Widget />
  </>
