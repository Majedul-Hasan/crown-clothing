import React from 'react'
import './MenuItem.scss'

const MenuItem= ({title, imageUrl, size})=> (
      <div 
      className={`${size} menu-item `}
      
      >
         <div className="backgroundImage"style={{
         backgroundImage: `url(${imageUrl})`
      }} ></div>
            <div className="content">
               <h1 className="title">{title}</h1>
               <span className="subtitle">shop now</span>
            </div>

         </div>
   )


export default MenuItem
