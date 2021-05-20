import * as React from "react"
import Widget from "./src/components/widget"

export const wrapRootElement = ({ element }, options) => (
  <>
    {element}
    <Widget options={options} />
  </>
)
