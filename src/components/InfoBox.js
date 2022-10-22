import React from 'react'

const InfoBox = ({link}, {icon}, {title}, {text}) => {
  return (
    <div>
          <div className='__infobox'>
               <a href={link}>
                    <button className="__navbar-button" id="share">
                         <i className={icon}></i>
                         <div className="__navbar-button-badge"></div>
                    </button>
               </a>
               <h4>{title}</h4>
               <p>{text}</p>
          </div>
    </div>
  )
}

export default InfoBox