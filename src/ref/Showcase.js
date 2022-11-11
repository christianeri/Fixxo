import React from 'react'

const Showcase = (sectionName) => {
  return (
     <section className={sectionName}>
          <div className='__container-wide'>
               <div className='__left'>
                    <img src={Showcase_5} alt="silouette" className=''/>
                    <div className="banner-textbox">
                         <h2>Winter Clearance</h2>
                         <h2>Up to 70% Off!</h2>
                         <p>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.
                         </p>
                         <FixxoButton label='shop now' color='dark'/>
                    </div>
               </div>
               <div className='__right'>
                    <img src={Showcase_6} alt="silouette"/>
                    <div className="banner-textbox">
                         <h2>New</h2>
                         <h2>Arrivals</h2>
                         <FixxoButton label='shop now' color='dark'/>
                    </div>
               </div>
          </div>
     </section>     
  )
}

export default Showcase