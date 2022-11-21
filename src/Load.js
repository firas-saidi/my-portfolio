import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

function Load (props) {
  return (
    <div className='load'>
      <img src = "img/logo.jpg" alt=""/>     
     
         <SyncLoader
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
