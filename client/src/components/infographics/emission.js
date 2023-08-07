import React, {useState} from "react";
import { OverlayTrigger, Tooltip as TooltipReact } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Emission({data, dataScrinner}) {
    const [radioValue, setRadioValue] = useState('Annual');

    const radios = [
        { name: 'Annual', value: 'Annual' },
        { name: 'Quarterly', value: 'Quarterly' },
    ];

    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red'
    }
    const colorTextPriceFCF = (value) => {
        return value > 0 && value <= 26 ? 'infographics-table-p-circle-green' 
        : value > 26 && value < 60 ? 'infographics-table-p-circle-orange' 
        : value >= 60 || value < 0 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextDivYeild = (value) => {
        return value >= 2.5 ? 'infographics-table-p-circle-green' 
        : value > 1 && value < 2.5 ? 'infographics-table-p-circle-orange' 
        : value <= 1 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextPayoutRatio = (value) => {
        return value > 0 && value <= 30 ? 'infographics-table-p-circle-green' 
        : value > 30 && value < 80 ? 'infographics-table-p-circle-orange' 
        : value >= 80 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextRepurchase = (value) => {
        return value > 0 ? 'infographics-table-p-circle-green' 
        : 'infographics-table-p-circle-red'
    }

    let dataForChartAnnual = []
    let dataForChartQuarterly = []
    if (Boolean(data)) {
        const arrayIssuanceAnnual = JSON.parse(data["IssuanceOfCapitalStock_Annual_JSON"]).array
        const arrayRepurchaseAnnual = JSON.parse(data["RepurchaseOfCapitalStock_Annual_JSON"]).array
        arrayIssuanceAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    Issuance: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.Issuance = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayRepurchaseAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    Repurchase: obj.value !== undefined ? -Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.Repurchase = obj.value !== undefined ? -Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartAnnual.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })

        const arrayIssuanceQuarterly = JSON.parse(data["IssuanceOfCapitalStock_Quarterly_JSON"]).array
        const arrayRepurchaseQuarterly = JSON.parse(data["RepurchaseOfCapitalStock_Quarterly_JSON"]).array
        arrayIssuanceQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    Issuance: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.Issuance = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayRepurchaseQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    Repurchase: obj.value !== undefined ? -Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.Repurchase = obj.value !== undefined ? -Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartQuarterly.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })
    }

    return (
        <div>
            {Boolean(data) && Boolean(dataScrinner) && (
                <div className="div-parent-border">
                <div className="div-border">
                <div className="BarChart">

                <div className="chart-div-button-radio">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-emission-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            size="sm"
                            name="radio-emission"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>

                <BarChart
                    width={400}
                    height={300}
                    data={radioValue === 'Annual' ? dataForChartAnnual : dataForChartQuarterly}
                    margin={{top: 10, right: 30, left: 20, bottom: 5}}
                    fontSize={14}
                    >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis style={{fontSize: '13px'}} dataKey="date"/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="left" orientation="left"
                            label={{ value: `млрд. ${data['currency'] === 'USD' ? '$' : data['currency']}`, 
                            angle: -90, position: 'insideLeft', offset: 5, fontSize: '16px' }}/>
                    <Tooltip labelStyle={{fontSize: '14px'}} itemStyle={{fontSize: '12px'}}/>
                    <Legend wrapperStyle={{fontSize: '14px'}} />
                    <Bar yAxisId="left" name="Обратный выкуп" dataKey="Repurchase" fill="#19CB3A" />
                    <Bar yAxisId="left" name="Эмиссия" dataKey="Issuance" fill="#CB1919" />
                    </BarChart>
                    </div>

                    
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Обратный выкуп TTM</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextRepurchase(-data['RepurchaseOfCapitalStock_1'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['RepurchaseOfCapitalStock_1'] !== null && !isNaN(data['RepurchaseOfCapitalStock_1']) ?
                                    -(Math.round(data['RepurchaseOfCapitalStock_1']/1000000)/1000) 
                                    + ` млрд. ${data['currency'] === 'USD' ? '$' : data['currency']}`
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['repurchase_better_site'])}>{data['repurchase_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['repurchase_better_sector'])}>{data['repurchase_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['repurchase_better_industry'])}>{data['repurchase_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        </>

                        
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}>
                                <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 100 }}
                            overlay={
                                <TooltipReact id='tooltip'>
                                Капитализация/ Левериджный cвободный денежный поток
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Price/LFCF</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPriceFCF(dataScrinner['priceCF'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['priceCF'] !== null && !isNaN(dataScrinner['priceCF']) 
                                    ? dataScrinner['priceCF'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['price_fcf_better_site'])}>{data['price_fcf_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['price_fcf_better_sector'])}>{data['price_fcf_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['price_fcf_better_industry'])}>{data['price_fcf_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        </>

                            
                        

                    <div className="d-inline-block m-3"></div>
                </div>

                <div className="d-inline-block m-2"></div>

                <div className="div-border">
                        <>
                        <div className="d-inline-block m-3"></div>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Дивидендная доходность</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextDivYeild(dataScrinner['Div_yield'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Div_yield'] !== null && !isNaN(dataScrinner['Div_yield']) 
                                    ? dataScrinner['Div_yield'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['dividend_better_site'])}>{data['dividend_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['dividend_better_sector'])}>{data['dividend_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['dividend_better_industry'])}>{data['dividend_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}>
                                <OverlayTrigger
                            placement="top"
                            delay={{ show: 100, hide: 100 }}
                            overlay={
                                <TooltipReact id='tooltip'>
                                Коэффициент выплаты дивидендов - показывает соотношение общей суммы дивидендов, 
                                выплаченных акционерам по отношению к чистой прибыли
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Payout ratio</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPayoutRatio(dataScrinner['Payout_ratio'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Payout_ratio'] !== null && !isNaN(dataScrinner['Payout_ratio']) 
                                    ? dataScrinner['Payout_ratio'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['payout_better_site'])}>{data['payout_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['payout_better_sector'])}>{data['payout_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['payout_better_industry'])}>{data['payout_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                        <div className="d-inline-block m-3"></div>
                        </>
                        </div>

                </div>

            )}
        </div>
        
    );
}
