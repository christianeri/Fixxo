import React from 'react'

const Section = ({title, sectionClassName, container, rowCols, rowColsMd, rowColsLg}) => {

     return (
        <>
        <section className={sectionName}>     
             <div className={container}>
                  <h3>{title}</h3>
                  <div className={`row row-cols-${rowCols} row-cols-md-${rowColsMd} row-cols-lg-${rowColsLg} g-0`}>

                  </div>
             </div>
        </section>
        </>
     )
   }

export default Section

