import React, {useState} from "react";
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

export default function SalesAndEarnings({data, dataScrinner}) {
    const [radioValue, setRadioValue] = useState('Annual');

    const radios = [
        { name: 'Annual', value: 'Annual' },
        { name: 'Quarterly', value: 'Quarterly' },
    ];

    const colorText = (growth) => {
        return (growth >= 1) ? 'infographics-table-p-circle-green' 
        : (growth > -1 && growth < 1) ? 'infographics-table-p-circle-orange' 
        : (growth <= -1) ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red' 
    }

    let dataForChartAnnual = []
    let dataForChartQuarterly = []
    if (Boolean(data)) {
        const arrayRevenueAnnual = JSON.parse(data["Revenue_Annual_JSON"]).array
        const arrayOperatingIncomeAnnual = JSON.parse(data["OperatingIncome_Annual_JSON"]).array
        const arrayNetIncomeAnnual = JSON.parse(data["NetIncome_Annual_JSON"]).array
        arrayRevenueAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    Revenue: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.Revenue = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayOperatingIncomeAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    OperatingIncome: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.OperatingIncome = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayNetIncomeAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    NetIncome: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.NetIncome = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartAnnual.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })
        dataForChartAnnual.push({
            date: 'TTM',
            Revenue: Math.round(data["Revenue_TTM"]/1000000)/1000,
            OperatingIncome: Math.round(data["OperatingIncome_TTM"]/1000000)/1000,
            NetIncome: Math.round(data["NetIncome_TTM"]/1000000)/1000,
        })

        const arrayRevenueQuarterly = JSON.parse(data["Revenue_Quarterly_JSON"]).array
        const arrayOperatingIncomeQuarterly = JSON.parse(data["OperatingIncome_Quarterly_JSON"]).array
        const arrayNetIncomeQuarterly = JSON.parse(data["NetIncome_Quarterly_JSON"]).array
        arrayRevenueQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    Revenue: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.Revenue = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayOperatingIncomeQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    OperatingIncome: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.OperatingIncome = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayNetIncomeQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    NetIncome: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.NetIncome = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
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
                            id={`radio-sales-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            size="sm"
                            name="radio-sales"
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
                        <Bar yAxisId="left" name="Выручка" dataKey="Revenue" fill="#413ea0" />
                        <Bar yAxisId="left" name="Операционная прибыль" dataKey="OperatingIncome" fill="#ff7300" />
                        <Bar yAxisId="left" name="Чистая прибыль" dataKey="NetIncome" fill="#19CB3A" />
                    </BarChart>
                </div>

                    
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Среднегодовой рост выручки</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(data['Revenue_Growth'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['Revenue_Growth'] !== null && !isNaN(data['Revenue_Growth']) 
                                    ? data['Revenue_Growth'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rev_better_site'])}>{data['rev_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rev_better_sector'])}>{data['rev_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rev_better_industry'])}>{data['rev_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-orange">
                                <p><span>Среднегодовой рост операционной прибыли</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(data['OperatingIncome_Growth'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['OperatingIncome_Growth'] !== null && !isNaN(data['OperatingIncome_Growth']) 
                                    ? data['OperatingIncome_Growth'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_income_better_site'])}>{data['oper_income_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_income_better_sector'])}>{data['oper_income_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_income_better_industry'])}>{data['oper_income_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-green">
                                <p><span>Среднегодовой рост чистой прибыли</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(data['NetIncome_Growth'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['NetIncome_Growth'] !== null && !isNaN(data['NetIncome_Growth']) 
                                    ? data['NetIncome_Growth'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-green-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_income_better_site'])}>{data['net_income_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_income_better_sector'])}>{data['net_income_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_income_better_industry'])}>{data['net_income_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        </>

                    <div className="d-inline-block m-3"></div>
                </div>
                </div>
            )}
        </div>
        
        
    );
}
