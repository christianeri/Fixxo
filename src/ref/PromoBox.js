import React from 'react'
import FixxoButton from '../components/FixxoButton'

const PromoBox = (image, alt, title, titleTop, text, buttonLabel, buttonColor, align) => {
  return (
<>
     <img src={image} alt={alt}/>
     <div className={`align-${align}`}>     
          <div className="__showcase-textbox">
               <h2>{titleTop}</h2>
               <h2>{title}</h2>
               <p>{text}</p>
               <FixxoButton label={buttonLabel} color={buttonColor}/>
          </div>
     </div>
</>
  )
}

export default PromoBox