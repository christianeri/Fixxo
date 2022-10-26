import React from 'react'
import Card from './CardTall'
import FixxoButton from './FixxoButton'

const ShowcaseGrid = () => {
  return (
      <div>
          <section className='__showcase-grid'>
                    <div className='__container-wide'>
                         <div className='__showcase-container-1x1'>
                              <div className='__showcase-textbox'>
                                   <h2>2 FOR USD $29</h2>
                                   <FixxoButton label='flash sale' color='light'/>
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
                    <div className='__container-wide'> 
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
                                   <FixxoButton label='flash sale' color='light'/>
                              </div>
                         </div>
                    </div>               
          </section>
      </div>
  )
}

export default ShowcaseGrid
