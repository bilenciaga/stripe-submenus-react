import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen,
  page:{page, links},
  location } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current
    const { center } = location
    submenu.style.left = `${center}px`;
  },[page,location])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    ref={container}> 
      <section>
        <div className="submenu__center">
          {links.map((link, index) => {
            const {label, icon, url} = link;
            return (
              <a key={index} href="{url}">
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
