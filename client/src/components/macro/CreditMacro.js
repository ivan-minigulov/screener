import React from 'react'
import totalCredit from '../../img/macro/totalCredit.png';
import changeCredit from '../../img/macro/changeCredit.png';


export default function Credit() {

    return (
        <div>
            <div className='div-credit'>
                <div className='div-span-credit'>
                    <span className='span-credit'>Сумма потребительского кредита в США:&emsp;23,01 млрд. $</span>
                    <p className='p-img-credit'><img className='img-credit' src={changeCredit} alt='Сумма потребительского кредита в США'/></p>
                </div>
            </div>
            <div className='div-credit'>
                <div className='div-span-credit-wide'>
                    <span className='span-credit'>Общая сумма потребительских кредитов в США:&emsp;4 859 млрд. $</span>
                    <p className='p-img-credit'><img className='img-credit' src={totalCredit} alt='Общая сумма потребительских кредитов в США'/></p>
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