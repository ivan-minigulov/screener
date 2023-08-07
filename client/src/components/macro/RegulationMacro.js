import React from 'react'
import inflationRate from '../../img/macro/inflationRate.png';
import fedFundsRate from '../../img/macro/fedFundsRate.png';
import effectiveFedFundsRate from '../../img/macro/effectiveFedFundsRate.png';
import fiveYearFwdInfRate from '../../img/macro/5-yearFwdInfRate.png';
import balanceFRS from '../../img/macro/balanceFRS.png';

export default function Regulation() {

    return (
        <div>
            <div className='div-regul'>
                <div className='div-span-regul'>
                    <span className='span-regul'>Инфляция в США:&emsp;4,0%</span>
                    <p className='p-img-regul'><img className='img-regul' src={inflationRate} alt='Инфляция в США (%)'/></p>
                </div>
                <div className='div-span-regul'>
                    <span className='span-regul'>Ставка по федеральным фондам США:&emsp;5-5,25%</span>
                    <p className='p-img-regul'><img className='img-regul' src={fedFundsRate} alt='Ставка по федеральным фондам США (%)'/></p>
                </div>
            </div>
            <div className='div-regul'>
                <div className='div-span-regul-wide'>
                    <span className='span-regul'>Эффективная ставка по федеральным фондам США:&emsp;5,06%</span>
                    <p className='p-img-regul'><img className='img-regul' src={effectiveFedFundsRate} alt='Эффективная ставка по федеральным фондам США (%)'/></p>
                </div>
            </div>
            <div className='div-regul'>
                <div className='div-span-regul-wide'>
                    <span className='span-regul'>5-летнее форвардное инфляционное ожидание:&emsp;2,27%</span>
                    <p className='p-img-regul'><img className='img-regul' src={fiveYearFwdInfRate} alt='5-летнее форвардное инфляционное ожидание (%)'/></p>
                </div>    
            </div>
            <div className='div-regul'>
                <div className='div-span-regul-wide'>
                    <span className='span-regul'>Баланс ФРС:&emsp;8 388 млрд. $</span>
                    <p className='p-img-regul'><img className='img-regul' src={balanceFRS} alt='Баланс ФРС'/></p>
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