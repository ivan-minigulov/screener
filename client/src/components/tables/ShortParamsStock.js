import React from 'react'
// import { COL_NAMES } from './colNamesScrinner'

export default function ShortParamsStock({ data, dataScrinner }) {

  return (
    <div>
        {Boolean(data) && Boolean(dataScrinner) && (
            <div>
                <div className='div-micro-ticker-div-ticker'>
                    <p className='div-micro-ticker-div-p-large'>{data["Tickers"]} - {dataScrinner["Name"]}</p>
                </div>
                
            </div>
        )}
    </div>
  )
}
