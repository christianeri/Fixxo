import React from 'react'

const ShowcaseBox = ({imageURL, title, text, btnlabel}) => {
  return (
    <div>
          <div className='__showcase-box'>
               <img src={imageURL} alt="silouette"/>
               <div className="__showcase-textbox border">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <button className='__fixxo-button'>{btnlabel}</button>
               </div>
          </div>
    </div>
  )
}

export default ShowcaseBox