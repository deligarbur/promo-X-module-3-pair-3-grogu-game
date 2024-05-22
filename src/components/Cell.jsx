import React from 'react'
import Grogu from './Grogu'

function Cell({isGrogu}) {
  return (
    <div className ="cell">
        {isGrogu && <Grogu/>}
    </div>
  )
}

export default Cell