import React from 'react'
import Quilleditor from './Texteditor/Quilleditor'

import Notecontentcontainer from './Notecomponents/Notecontentcontainer'
import Noteheader from './Noteheader/Noteheader'
const Createnotesection = () => {
  return (
   
        <Notecontentcontainer  >
            <Noteheader/>
    <Quilleditor/>
</Notecontentcontainer>
  )
}

export default Createnotesection