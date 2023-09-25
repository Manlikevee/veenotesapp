import React, { useEffect, useState } from 'react';

const Header = ({isSidebarActive, openSidebar , closeSidebar}) => {




  return (

<>
  <div className="overlay" id="overlay"  style={{ width: isSidebarActive ? '100%' : '0', display: isSidebarActive ? 'flex' : 'none' }}/>
  <header>
    <div className="nvtoggle" id="open-btn" onClick={openSidebar}>
      <span className="material-symbols-outlined">menu</span>
    </div>
  </header>
</>

  )
}

export default Header