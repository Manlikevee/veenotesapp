import React from 'react'

const Notecontentcontainer = ({children}) => {
  return (
    <div className='notebody'>
    <div className='notepreview'>

    {children}

    </div>
    </div>
  )
}

export default Notecontentcontainer