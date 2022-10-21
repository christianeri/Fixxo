import React from 'react'
import Card from './Card'

const ShowcaseGrid = () => {
  return (
      <div>
          <section className='__showcase-grid'>
                    <div className='__container __showcase-1-1'>
                         <div className='__showcase-container-1x1'>
                              <div className='__showcase-textbox'>
                                   <h2>2 FOR USD $29</h2>
                                   <button className="__fixxo-button __button-light">
                                        flash sale
                                   </button>
                              </div>
                         </div>
                         <div className='__showcase-container-2x2' id='showcase-container-2x2-upper'>
                              <div className='__grid'>
                                   <Card id='grid-tile-sm-tl'/>
                                   <Card id='grid-tile-sm-tr'/>
                                   <Card id='grid-tile-sm-bl'/>
                                   <Card id='grid-tile-sm-br'/>
                              </div>
                         </div>
                    </div>
                    <div className='__container __showcase-1-1'> 
                         <div className='__showcase-container-2x2' id='showcase-container-2x2-lower'>
                              <div className='__grid'>
                                   <Card id='grid-tile-sm-tl'/>
                                   <Card id='grid-tile-sm-tr'/>
                                   <Card id='grid-tile-sm-bl'/>
                                   <Card id='grid-tile-sm-br'/>
                              </div>
                         </div>
                         <div className='__showcase-container-1x1'>
                              <div className='__showcase-textbox'>
                                   <h2>2 FOR USD $49</h2>
                                   <button className="__fixxo-button __button-light">
                                        flash sale
                                   </button>
                              </div>
                         </div>
                    </div>               
          </section>
      </div>
  )
}

export default ShowcaseGrid
