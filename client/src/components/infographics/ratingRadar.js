import React from 'react';
import { OverlayTrigger, Tooltip as TooltipReact } from 'react-bootstrap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

export default function RatingRadar ({ data, dataScrinner }) {

  return (
    <div>
        {Boolean(data) && Boolean(dataScrinner) && (
        <div>
            <div className='RadarChart-parent'>
            <div className='RadarChart'>
            <p>Total Rating: {dataScrinner["Total_Rating"]}</p>
            <RadarChart cx={180} cy={110} innerRadius={10} outerRadius={85} width={360} height={220}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }} 
            data={[
                {
                    subject: "Growth",
                    rating: dataScrinner["Growth_Rating"],
                },
                {
                    subject: "Profit",
                    rating: dataScrinner["Profit_Rating"],
                },
                {
                    subject: "Value",
                    rating: dataScrinner["Value_Rating"],
                },
                {
                    subject: "Debt",
                    rating: dataScrinner["Debt_Rating"],
                },
                {
                    subject: "Dividend",
                    rating: dataScrinner["Divident_Rating"],
                },
                {
                    subject: "FCF",
                    rating: dataScrinner["FCF_Rating"],
                },
                {
                    subject: "Momentum",
                    rating: dataScrinner["Momentum_Rating"],
                },
            ]}>
            <PolarGrid gridType='polygon'/>
            <Tooltip />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 10]} tick={false}/>
            <Radar dataKey="rating" name="Rating" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8}/>
            </RadarChart>
            {data["Bus_cycle_comp"] &&
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 100, hide: 100 }}
                    overlay={
                        <TooltipReact id='tooltip'>Авторская оценка бизнес-цикла компаний (Early, Middle, Late, Recession) 
                        на основании финансовой отчетности за последние 3-4 года
                        </TooltipReact>
                    }
                    ><p>Бизнес-цикл компании: {data["Bus_cycle_comp"]}</p>
                </OverlayTrigger>
            }

            </div>

            <div className='RadarChart-description'>
                <div className='RadarChart-description-text'>
                <p>Авторская оценка компании по 10-ти бальной шкале</p>
                <p>Growth Rating - Рост потоков компании на основании: 
                среднегодого роста выручки и EPS в будущем (по мнению аналитиков) и за последние 3 года.</p>
                <p>Profit Rating - Рентабельность компании на основании: 
                net margin, ROE и ROA.</p>
                <p>Value Rating - Стоимость компании на основании: 
                PE, PS, REG ratio, EV/ Ebitda.</p>
                <p>Debt Rating - Долговая нагрузка компании на основании: 
                Cash/ Debt, Interest Coverage, Current Ratio и Debt/ Equity.</p>
                <p>Dividend Rating - Выплата дивидендов компанией на основании: 
                Дивидендной доходности за прошедший год и Payout Ratio.</p>
                <p>FCF Rating - Свободный денежный поток компании на основании: 
                Price/ LFCF.</p>
                <p>Momentum Rating - Momentum цены акции на основании: RSI 14 days.</p>
                <p>Total Rating - Совокупная оценка компании на основании рейтингов: 
                Growth, Profit, Value, Debt, Dividend, FCF, Momentum.</p>
                </div>     
            </div>

        </div>

            
        </div>
        )}
    </div>
  )
}
