import { memo } from "react"
import { Button } from "react-bootstrap"

const MovieWatch = ({ onMovieWatch }) => {
    console.log("Movie watch")
  return (
    <Button onClick={onMovieWatch} variant="outline-info" className="me-2">Marcar como vista</Button>
  )
}

export default memo(MovieWatch);