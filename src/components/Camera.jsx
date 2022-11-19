import React from 'react'
import  {PerspectiveCamera} from "@react-three/drei"

const Camera = () => {
  return (
    <PerspectiveCamera 
    makeDefault 
    position={ [-1000, 20, 20] }
    fov={75} />
  )
}

export default Camera