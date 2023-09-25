import React, { Children, useState } from 'react'
import Header from '../Layoutcomponent/Header'
import Sidebar from '../Layoutcomponent/Sidebar'
import 'material-symbols';
import Notecontent from './Notecontent';
import Notebody from './Notebody';

const Notelayout = ({children}) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const openSidebar = () => {
    setIsSidebarActive(true);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };


  return (
    <>
    <Header
            isSidebarActive={isSidebarActive}
            openSidebar={openSidebar}
            closeSidebar={closeSidebar}
    />
    <div className="notecontainer">
        <Sidebar
                isSidebarActive={isSidebarActive}
                openSidebar={openSidebar}
                closeSidebar={closeSidebar}
        />
        <Notecontent/>
    {children}
    </div>
    </>
  )
}

export default Notelayout