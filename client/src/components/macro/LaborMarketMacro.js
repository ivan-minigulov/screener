import React from 'react';
import initialClaims from '../../img/macro/initialClaims.png';
import permanentJobLosers from '../../img/macro/permanentJobLosers.png';
import unemploymentRate from '../../img/macro/unemploymentRate.png';

export default function LaborMarket() {

    return (
        <div>
            <div className='div-labor'>
                <div className='div-span-labor'>
                    <span className='span-labor'>Заявки на пособия по безработице в США:&emsp;262 000</span>
                    <p className='p-img-labor'><img className='img-labor' src={initialClaims} alt='Заявки на пособия по безработице в США'/></p>
                </div>
                <div className='div-span-labor'>
                    <span className='span-labor'>Безработица в США:&emsp;3,7%</span>
                    <p className='p-img-labor'><img className='img-labor' src={unemploymentRate} alt='Безработица в США %'/></p>
                </div>
            </div>
            <div className='div-labor'>
                <div className='div-span-labor-wide'>
                    <span className='span-labor'>Количество людей потерявший постоянное место работы в США:&emsp;1 588 000</span>
                    <p className='p-img-labor'><img className='img-labor' src={permanentJobLosers} alt='Количество людей потерявший постоянное место работы в США'/></p>
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