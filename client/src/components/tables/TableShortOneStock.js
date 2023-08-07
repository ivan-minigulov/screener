import React from 'react'
// import { COL_NAMES } from './colNamesScrinner'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function TableShortOneStock({ data, dataScrinner }) {

    const colorText = (rating) => {
        if (rating >= 7) {
            return 'text-green'
        }
        if (rating >= 4 && rating < 7) {
            return 'text-orange'
        }
        if (rating < 4) {
            return 'text-red'
        }
    }
    const colNamesTh = [
        {headerItem: 'Growth Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Роста" компании на основании: среднегодого роста выручки и EPS в будущем (по мнению аналитиков) и за последние 3 года'},
        {headerItem: 'Profit Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Рентабельности" компании на основании: чистой прибыли, ROE и ROA'},
        {headerItem: 'Value Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Стоимости" компании на основании: PE, PS, REG ratio, EV/ Ebitda'},
        {headerItem: 'Debt Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Долговой нагрузки" компании на основании: Cash/ Debt, Interest Coverage, Current Ratio и Debt/ Equity'},
        {headerItem: 'Dividend Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Выплаты дивидендов" компанией на основании: Дивидендной доходности за прошедший год и Payout Ratio'},
        {headerItem: 'FCF Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Свободного денежного потока" компании на основании: Price/ FCF'},
        {headerItem: 'Momentum Rating', overlay: 'Авторская оценка (по 10 бальной шкале) "Momentum" компании на основании: RSI 14 days'},
        {headerItem: 'Total Rating', overlay: 'Авторская "Совокупная" оценка (по 10 бальной шкале) компании на основании: Growth Rating, Profit Rating, Value Rating, Debt Rating, Dividend Rating, FCF Rating, Momentum Rating'},

    ]

    return (
        <div className='div-table-rating'>
            {Boolean(data) && Boolean(dataScrinner) && (
            <div>
                <table className='table-rating'>
                    <thead id='table-rating'>
                        <tr>
                        {colNamesTh.map(({headerItem, overlay}, index) => (
                            <OverlayTrigger
                                key={headerItem}
                                placement="top"
                                delay={{ show: 100, hide: 100 }}
                                overlay={
                                    <Tooltip id={`tooltip-${index}`}>
                                    {overlay}
                                    </Tooltip>
                                }
                                ><th id='table-rating-th'>
                                {headerItem}
                                </th>
                            </OverlayTrigger>
                        ))}
                            {/* <th id='table-rating-th'>Growth Rating</th>
                            <th id='table-rating-th'>Profit Rating</th>
                            <th id='table-rating-th'>Value Rating</th>
                            <th id='table-rating-th'>Debt Rating</th>
                            <th id='table-rating-th'>Dividend Rating</th>
                            <th id='table-rating-th'>FCF Rating</th>
                            <th id='table-rating-th'>Momentum Rating</th>
                            <th id='table-rating-th'>Total Rating</th> */}
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        <tr>
                            <td className={colorText(dataScrinner["Growth_Rating"])} >{dataScrinner["Growth_Rating"]}</td>
                            <td className={colorText(dataScrinner["Profit_Rating"])} >{dataScrinner["Profit_Rating"]}</td>
                            <td className={colorText(dataScrinner["Value_Rating"])} >{dataScrinner["Value_Rating"]}</td>
                            <td className={colorText(dataScrinner["Debt_Rating"])} >{dataScrinner["Debt_Rating"]}</td>
                            <td className={colorText(dataScrinner["Divident_Rating"])} >{dataScrinner["Divident_Rating"]}</td>
                            <td className={colorText(dataScrinner["FCF_Rating"])} >{dataScrinner["FCF_Rating"]}</td>
                            <td className={colorText(dataScrinner["Momentum_Rating"])} >{dataScrinner["Momentum_Rating"]}</td>
                            <td className={colorText(dataScrinner["Total_Rating"])} >{dataScrinner["Total_Rating"]}/10</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            )}
        </div>
    )
}
