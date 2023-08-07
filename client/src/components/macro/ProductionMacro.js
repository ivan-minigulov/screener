import React from 'react'
import manufacturingPmi from '../../img/macro/manufacturingPmi.png';
import servicesPmi from '../../img/macro/servicesPmi.png';
import managersPmi from '../../img/macro/managersPmi.png';
import weeklyEconomicIndex from '../../img/macro/weeklyEconomicIndex.png';

export default function Production() {

    return (
        <div>
            <div className='div-prod'>
                <div className='div-span-prod'>
                    <span className='span-prod'>PMI в промышленности США:&emsp;48,4</span>
                    <p className='p-img-prod'><img className='img-prod' src={manufacturingPmi} alt='PMI в промышленности США'/></p>
                </div>
                <div className='div-span-prod'>
                    <span className='span-prod'>PMI услуг в США (ISM):&emsp;54,9</span>
                    <p className='p-img-prod'><img className='img-prod' src={servicesPmi} alt='PMI услуг в США (ISM)'/></p>
                </div>
            </div>
            <div className='div-prod'>
                <div className='div-span-prod'>
                    <span className='span-prod'>Индекс менеджеров по закупкам ISM США (PMI):&emsp;46,9</span>
                    <p className='p-img-prod'><img className='img-prod' src={managersPmi} alt='Индекс менеджеров по закупкам ISM США (PMI)'/></p>
                </div>
                <div className='div-span-prod'>
                    <span className='span-prod'>Еженедельный экономический индекс США:&emsp;0,93%</span>
                    <p className='p-img-prod'><img className='img-prod' src={weeklyEconomicIndex} alt='Еженедельный экономический индекс США'/></p>
                </div>
            </div>
            {/* <div className='div-macro-text'>
                <div className='div-macro-text-div'>
                    <span>Текст</span>
                </div>
            </div> */}
        </div>
    )
}