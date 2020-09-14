import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Drawer } from 'antd';
import "../CSS/_navbar.css";
import '../CSS/index.css';
const directories = ["home", "about", "what i do", "photos", "contact"];
export function _Navbar({isMobile = false, curPanel}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selected, setSelected] = useState('0');

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(curPanel !== "home");
  },[curPanel])
  
  return (
    <>
      {window.innerWidth <= 1024 || isMobile ?
        <>
          <Button id="toggle" onClick={() => setShowDrawer(true)}>
            {showDrawer? 
            null :
            <FontAwesomeIcon icon={faAlignJustify} size="1x" />}
          </Button>
          <Drawer id="drawer" placement="top" onClose={() => setShowDrawer(false)}visible={showDrawer}>
            {directories.map((dir, index) => {
              return (
                <p key={index}><a className="nav" href={`/#` + dir.replace(/\s/g, '')}>{dir.toUpperCase()}</a></p>
              )}
          )}
          </Drawer>
        </>
        : 
        <Menu id="navbar" mode="horizontal" selectedKeys={[selected]} onClick={e => setSelected(e.key)} style={{background: (showNav ? "black" : "transparent")}}>
          {directories.map((dir, index) => {
            return (
              <Menu.Item className="navItem" key={index.toString()}><a className="nav" href={`/#` + dir.replace(/\s/g, '')}>{dir.toUpperCase()}</a></Menu.Item>
            )}
          )}
        </Menu>
      }
    </>
  )

};