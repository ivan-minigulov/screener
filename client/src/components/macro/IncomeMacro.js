import React from 'react'
import corporateProfits from '../../img/macro/corporateProfits.png';

export default function Income() {

    return (
        <div>
            <div className='div-income'>
                <div className='div-span-income'>
                    <span className='span-income'>Корпоративные прибыли в США после уплаты налогов:&emsp;2 663 млрд. $</span>
                    <p className='p-img-income'><img className='img-income' src={corporateProfits} alt='Корпоративные прибыли в США после уплаты налогов'/></p>
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