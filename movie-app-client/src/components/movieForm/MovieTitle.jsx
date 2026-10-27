import { memo } from "react"

const MovieTitle = ({ title }) => {
    console.log("In title")
  return (
    <h2>Titulo: {title}</h2>
  )
}

export default memo(MovieTitle);