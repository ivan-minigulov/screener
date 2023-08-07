import React from 'react'

export default function DescriptionStock({stockMicro}) {

  return (
    <div>
        {Boolean(JSON.parse(stockMicro["descriptionJSON"]).description) && (
            <div className='description-stock'>
                <p>{JSON.parse(stockMicro["descriptionJSON"]).description}</p>
            </div>
        )}
    </div>
  )
}