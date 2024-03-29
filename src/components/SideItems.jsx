import React from 'react'
import timeline from "../assets/layout-grid.png"
import friends from "../assets/users.png";
import groups from "../assets/star.png";
import video from "../assets/video.png";
import photos from "../assets/image.png";
import Events from "../assets/calendar.png";
import "./SideItems.scss";

function SideItems() {
    const menuItems = [
      {
        name: "Timeline",
        icon: timeline,
      },
      {
        name: "friends",
        icon: friends,
      },
      {
        name: "groups",
        icon: groups,
      },
      {
        name: "videos",
        icon: video,
      },
      {
        name: "photos",
        icon: photos,
      },
      {
        name: "Events",
        icon: Events,
      },
    ];
  return (
    <div className="sidemenu">
      <div className='heading'>
        <p>Menu</p>
      </div>
      <div className="menu-down">
      {menuItems &&
        menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.icon} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideItems