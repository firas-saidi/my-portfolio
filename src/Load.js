import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Load (props) {
  return (
    <div className='load'>
        <ClimbingBoxLoader
    color={"#eb4a4a"}
    size={20}

    aria-label="Loading Spinner"
    data-testid="loader"
    loading={props.loading}
  />
    </div>
  )
}

export default Load
