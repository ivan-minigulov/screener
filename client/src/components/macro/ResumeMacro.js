import React from 'react'

export default function Resume({ dataResume, conclusion, macroTable }) {

    const colorText = (el) => {
        return (
            el === 'Ощутимо Лучше Рынка' ? 'text-resume-green' :
            el === 'Лучше Рынка' ? 'text-resume-light-green' :
            el === "Хуже Рынка" ? 'text-resume-light-red' :
            el === 'Ощутимо Хуже Рынка'? 'text-resume-red' : ''
        )
    }
    const selectedCycle = (index) => {
        return index === 3 ? 'column-selected' : ''
    }

    return (
        <div className='div-macro-resume'>
            <div className='div-div-macro-resume'>
                <div className='div-span-conclusions'>
                    <span className='span-conclusions'>Заключение: </span>
                    <span className='span-conclusions'>6 из 7 пунктов (85%) указывают на Late cycle</span>
                </div>
                
                <table className='table'>
                    <thead id='table-rating'>
                        <tr>
                            <th>Показатели</th>
                            <th>Оценка</th>
                            <th>Цикл</th>
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        <tr>
                            <td>ВВП</td>
                            <td>Темпы Роста Снижаются</td>
                            <td>Late cycle</td>
                        </tr>
                        <tr>
                            <td>Рынок Труда</td>
                            <td>Безработица на минимумах</td>
                            <td>Late cycle</td>
                        </tr>
                        <tr>
                            <td>Производство</td>
                            <td>Производство остывает</td>
                            <td>Late cycle</td>
                        </tr>
                        <tr>
                            <td>Кредит</td>
                            <td>Стагнация</td>
                            <td>Recession</td>
                        </tr>
                        <tr>
                            <td>Корпоративные прибыли</td>
                            <td>Доходы под давлением</td>
                            <td>Late cycle</td>
                        </tr>
                        <tr>
                            <td>Регулирование</td>
                            <td>Ужесточается</td>
                            <td>Late cycle</td>
                        </tr>
                        <tr>
                            <td>Запасы и продажи</td>
                            <td>Запасы на пике, Продажи падают</td>
                            <td>Late cycle</td>
                        </tr>
                        {/* {dataResume.map((obj, index) => (
                            <tr key={index}>
                                <td>{obj["indicators"]}</td>
                                <td>{obj["grade"]}</td>
                                <td>{obj["cycle"]}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
            
            <div className='div-table-macro-resume'>
                <table className='table'>
                    <thead id='table-rating'>
                        <tr>
                            <th>Сектор экономики</th>
                            <th>Early cycle</th>
                            <th>Middle cycle</th>
                            <th>Late cycle</th>
                            <th>Recession</th>
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        {macroTable.map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((el, index2) => (
                                    <td className={colorText(el)} id={selectedCycle(index2)} key={index2}>{el}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}