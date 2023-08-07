import React, {useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, Area, AreaChart
} from "recharts";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function CashFlowAndEarningsMargin({data, dataScrinner}) {
    const [radioValue, setRadioValue] = useState('Annual');
    const [radioValue2, setRadioValue2] = useState('Annual');

    const radios = [
        { name: 'Annual', value: 'Annual' },
        { name: 'Quarterly', value: 'Quarterly' },
    ];

    
    const colorText = (growth) => {
        return (growth >= 5) ? 'infographics-table-p-circle-green' 
        : (growth > 0 && growth < 5) ? 'infographics-table-p-circle-orange' 
        : (growth <= 0) ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red'
    }

    let dataForChartAnnual = []
    let dataForChartQuarterly = []
    let dataForChartAnnual2 = []
    let dataForChartQuarterly2 = []
    if (Boolean(data)) {
        const arrayOperCFAnnual = JSON.parse(data["OperatingCashFlow_Annual_JSON"]).array
        const arrayInvestCFAnnual = JSON.parse(data["InvestingCashFlow_Annual_JSON"]).array
        const arrayFinCFAnnual = JSON.parse(data["FinancingCashFlow_Annual_JSON"]).array
        arrayOperCFAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    OperatingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.OperatingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayInvestCFAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    InvestingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.InvestingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayFinCFAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    FinancingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.FinancingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartAnnual.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })

        const arrayOperCFQuarterly = JSON.parse(data["OperatingCashFlow_Quarterly_JSON"]).array
        const arrayInvestCFQuarterly = JSON.parse(data["InvestingCashFlow_Quarterly_JSON"]).array
        const arrayFinCFQuarterly = JSON.parse(data["FinancingCashFlow_Quarterly_JSON"]).array
        arrayOperCFQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    OperatingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.OperatingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayInvestCFQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    InvestingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.InvestingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayFinCFQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    FinancingCashFlow: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.FinancingCashFlow = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartQuarterly.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })

        const arrayOperMarginAnnual = JSON.parse(data["OperatingMargin_Annual_JSON"]).array
        const arrayIncomeMarginAnnual = JSON.parse(data["IncomeMargin_Annual_JSON"]).array
        arrayOperMarginAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual2.length || !dataForChartAnnual2.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual2.unshift({
                    date: obj.endDate,
                    OperatingMargin: obj.value !== undefined ? obj.value : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual2.filter(el => el.date === obj.endDate)
                obj2.OperatingMargin = obj.value !== undefined ? obj.value : null
            }
        })
        arrayIncomeMarginAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual2.length || !dataForChartAnnual2.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual2.unshift({
                    date: obj.endDate,
                    NetMargin: obj.value !== undefined ? obj.value : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual2.filter(el => el.date === obj.endDate)
                obj2.NetMargin = obj.value !== undefined ? obj.value : null
            }
        })
        dataForChartAnnual2.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })
        dataForChartAnnual2.push({
            date: 'TTM',
            OperatingMargin: data["OperatingMargin_TTM"],
            NetMargin: data["IncomeMargin_TTM"],
        })

        const arrayOperMarginQuarterly = JSON.parse(data["OperatingMargin_Quarterly_JSON"]).array
        const arrayIncomeMarginQuarterly = JSON.parse(data["IncomeMargin_Quarterly_JSON"]).array
        arrayOperMarginQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly2.length || !dataForChartQuarterly2.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly2.unshift({
                    date: obj.endDate,
                    OperatingMargin: obj.value !== undefined ? obj.value : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly2.filter(el => el.date === obj.endDate)
                obj2.OperatingMargin = obj.value !== undefined ? obj.value : null
            }
        })
        arrayIncomeMarginQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly2.length || !dataForChartQuarterly2.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly2.unshift({
                    date: obj.endDate,
                    NetMargin: obj.value !== undefined ? obj.value : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly2.filter(el => el.date === obj.endDate)
                obj2.NetMargin = obj.value !== undefined ? obj.value : null
            }
        })
        dataForChartQuarterly2.forEach((obj, key) => {
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
                            id={`radio-cashFlow-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            size="sm"
                            name="radio-cashFlow"
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
                    <Bar yAxisId="left" name="Operating Cash Flow" dataKey="OperatingCashFlow" fill="#19CB3A" />
                    <Bar yAxisId="left" name="Investing Cash Flow" dataKey="InvestingCashFlow" fill="#413ea0" />
                    <Bar yAxisId="left" name="Financing Cash Flow" dataKey="FinancingCashFlow" fill="#ff7300" />
                    </BarChart>
                    </div>
                    </div>

                    <div className="d-inline-block m-2"></div>

                    <div className="div-border">

                <div className="BarChart">
                <div className="chart-div-button-radio">
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-margin-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            size="sm"
                            name="radio-margin"
                            value={radio.value}
                            checked={radioValue2 === radio.value}
                            onChange={(e) => setRadioValue2(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <AreaChart
                    width={400}
                    height={300}
                    data={radioValue2 === 'Annual' ? dataForChartAnnual2 : dataForChartQuarterly2}
                    margin={{top: 10, right: 30, left: 20, bottom: 5}}
                    fontSize={14}
                    >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis style={{fontSize: '13px'}} dataKey="date"/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="left" orientation="left" unit=' %'/>
                    <Tooltip labelStyle={{fontSize: '14px'}} itemStyle={{fontSize: '12px'}}/>
                    <Legend wrapperStyle={{fontSize: '14px'}} />
                    <Area yAxisId="left" type="monotone" dataKey="OperatingMargin" name="Операционная прибыль, %" 
                            fill="#ff7300" stroke="#ff7300" opacity={0.5} />
                    <Area yAxisId="left" type="monotone" dataKey="NetMargin" name="Чистая прибыль, %" 
                            fill="#19CB3A" stroke="#19CB3A" opacity={0.5} />
                    </AreaChart>
                    </div>
                        
                        
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-orange">
                                <p><span>Операционная прибыль TTM</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(data['OperatingMargin_TTM'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['OperatingMargin_TTM'] !== null && !isNaN(data['OperatingMargin_TTM']) 
                                    ? data['OperatingMargin_TTM'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_margin_better_site'])}>{data['oper_margin_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_margin_better_sector'])}>{data['oper_margin_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['oper_margin_better_industry'])}>{data['oper_margin_better_industry']}%</td>
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
                                <p><span>Чистая прибыль TTM</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(data['IncomeMargin_TTM'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{data['IncomeMargin_TTM'] !== null && !isNaN(data['IncomeMargin_TTM']) 
                                    ? data['IncomeMargin_TTM'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-green-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_margin_better_site'])}>{data['net_margin_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_margin_better_sector'])}>{data['net_margin_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['net_margin_better_industry'])}>{data['net_margin_better_industry']}%</td>
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
