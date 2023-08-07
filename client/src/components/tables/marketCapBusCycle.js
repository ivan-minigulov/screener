import React from 'react'

export default function MarketCapBusCycle({ data, dataScrinner }) {

  return (
    <div>
        {Boolean(data) && Boolean(dataScrinner) && (
            <div className='div-micro-market-text-parent'>
            <div className='div-micro-market-text'>
                    <div className='div-micro-ticker-div'>
                      {dataScrinner["Market_cap"] &&
                          <p className='div-micro-ticker-div-p'>Капитализация: {dataScrinner["Market_cap"]} млрд. $</p>}
                      {data["sector"] && data["industry"] &&
                          <p className='div-micro-ticker-div-p'>{data["sector"]} - {data["industry"]}</p>} 
                      {data["country"] &&
                          <p className='div-micro-ticker-div-p'>{data["country"]}</p>}   
                      
                      {/* {data["Bus_cycle_comp"] &&
                        <p className='div-micro-ticker-div-p'>Бизнес-цикл компании: {data["Bus_cycle_comp"]}</p>}    */}
                        
                    </div>
            </div>
            
            </div>
        )}
    </div>
  )
}
