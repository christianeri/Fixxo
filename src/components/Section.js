import React from 'react'

const Section = ({title, sectionIdentifier, container, brpSM, brpMD, brpLG, body}) => {

     return (
        <>
          <section className={sectionIdentifier}>     
               {/* <div className={`section-${container}`}> */}
               <div className={container}>
                    <h3 className='section-title pt-0'>{title}</h3>
               </div>
               <div className={container}>
                    <div className={`row row-cols-${brpSM} row-cols-md-${brpMD} row-cols-lg-${brpLG} g-0`}>
                         {body}
                    </div>
               </div>
          </section>
        </>
     )
   }

export default Section

