import React from "react"

import CircularProgress from "."

const story = {
  title: "CircularProgress",
}
export default story

export function Default() {
  return <CircularProgress color="primary" size={200} thickness={3} />
}
