"use client"
import React, { useEffect } from 'react';

const Notecontent = () => {

    useEffect(() => {
        function setBottomMaxHeights() {
          const container = document.querySelector('.notecontent');
          const content = document.querySelector('.head');
          const bottom = document.querySelector('.allnotes');
        
          if (container && content && bottom) {
            // Calculate the available space (viewport height - content height)
            const availableSpace = window.innerHeight - content.getBoundingClientRect().height - 35;
        
            // Set the maximum height of the bottom div (ensure it's not negative)
            bottom.style.maxHeight = `${Math.max(availableSpace, 0)}px`;
          }
        }
        
        // Initial calculation when the page loads
        setBottomMaxHeights();
        
        // Recalculate when the window is resized
        window.addEventListener('resize', setBottomMaxHeights);
        
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', setBottomMaxHeights);
        };
      }, []); // Empty dependency array means this effect runs once, like componentDidMount
    

  return (
    <div className="notecontent">
  <div className="head">
    <h3> All Notes</h3>
  </div>
  <br />
  <div className="allnotes">
    <div className="allnotesflex">
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <a href="view.html" className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </a>
      <div className="note activenote">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
      <div className="note">
        <div className="notetitle">
          My Goals for the Next Year My Goals for the Next Year
        </div>
        <div className="mynotebody">
          It's hard to believe that It's hard to believe that It's hard to
          believe that It's hard to believe that ... ...
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Notecontent