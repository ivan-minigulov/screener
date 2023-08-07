import React from 'react';
import imgGdpQ from '../../img/macro/gdpq.png';
import imgGdpY from '../../img/macro/gdpy.png';

export default function Gdp() {

    return (
        <div>
            <div className='div-gdp'>
                <div className='div-span-gdp'>
                    <span className='span-gdp'>Темпы роста ВВП США кв/кв:&emsp;1,1%</span>
                    <p className='p-img-gdp'><img className='img-gdp' src={imgGdpQ} alt='Темпы роста ВВП США кв/кв'/></p>
                </div>
                <div className='div-span-gdp'>
                    <span className='span-gdp'>Темпы роста ВВП США г/г:&emsp;1,6%</span>
                    <p className='p-img-gdp'><img className='img-gdp' src={imgGdpY} alt='Темпы роста ВВП США г/г'/></p>
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