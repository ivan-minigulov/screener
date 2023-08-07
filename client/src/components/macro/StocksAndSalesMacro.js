import React from 'react'
import businessSales from '../../img/macro/businessSales.png';
import businessInventories from '../../img/macro/businessInventories.png';
import inventoriesToSalesRatio from '../../img/macro/inventoriesToSalesRatio.png';


export default function StocksAndSales() {

    return (
        <div>
            <div className='div-sales'>
                <div className='div-span-sales'>
                    <span className='span-sales'>Бизнес-продажи в США:&emsp;1 621 млрд. $</span>
                    <p className='p-img-sales'><img className='img-sales' src={businessSales} alt='Бизнес-продажи в США'/></p>
                </div>
                <div className='div-span-sales'>
                    <span className='span-sales'>Бизнес-запасы в США (изменение м/м):&emsp;0,2%</span>
                    <p className='p-img-sales'><img className='img-sales' src={businessInventories} alt='Бизнес-запасы в США'/></p>
                </div>
            </div>
            <div className='div-sales'>
                <div className='div-span-sales-wide'>
                    <span className='span-sales'>Коэффициент запасы/продажи в США:&emsp;1,44</span>
                    <p className='p-img-sales'><img className='img-sales' src={inventoriesToSalesRatio} alt='Коэффициент запасы/продажи в США'/></p>
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