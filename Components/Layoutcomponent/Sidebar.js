"use client"

import React, { useEffect } from 'react';

const Sidebar = ({isSidebarActive, openSidebar , closeSidebar}) => {


  return (
<div className={`sidemenu ${isSidebarActive ? 'sideactive' : ''}`}>
  <div className="head">
    <div className="logo">
      <a href="index.html">
        <img src='/images/Group 1.png' alt="" />
      </a>
    </div>
    <div className="search" id="close-btn" onClick={closeSidebar}>
      <span className="material-symbols-outlined">disabled_by_default</span>
    </div>
  </div>
  <a href="tinymce.html" className="newnote">
    <button>
      <span className="material-symbols-outlined">add</span> New Note
    </button>
  </a>
  <div className="recenttext">Recent</div>
  <div className="recentnotes">
    <a href="view.html" className="recenttitle activetitle">
      <span className="material-symbols-outlined">description</span>
      Project proposal
    </a>
    <div className="recenttitle">
      <span className="material-symbols-outlined">description</span>
      Travel itinerary
    </div>
  </div>
  <div className="recenttext">Recent</div>
  <div className="recentnotes">
    <div className="recenttitle ">
      <span className="material-symbols-outlined">star</span>
      Favorites
    </div>
    <div className="recenttitle">
      <span className="material-symbols-outlined">
        <span className="material-symbols-outlined">delete</span>
      </span>
      Trash
    </div>
    <div className="recenttitle">
      <span className="material-symbols-outlined">folder_special</span>
      Archived Notes
    </div>
  </div>
  <div className="profiledata">
    <img
      src="https://images.unsplash.com/photo-1604434913269-933e81564539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      alt=""
    />
    <div className="myprofiledata">
      Victor Odah
      <small>Level one</small>
    </div>
  </div>
</div>

  )
}

export default Sidebar