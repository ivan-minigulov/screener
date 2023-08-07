import React, {useState} from "react";
import { OverlayTrigger, Tooltip as TooltipReact} from "react-bootstrap";
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

export default function CashDebt({data, dataScrinner}) {
    const [radioValue, setRadioValue] = useState('Annual');

    const radios = [
        { name: 'Annual', value: 'Annual' },
        { name: 'Quarterly', value: 'Quarterly' },
    ];

    const colorTextCashDebt = (value) => {
        return (value >= 0.8) ? 'infographics-table-p-circle-green' 
        : (value > 0.4 && value < 0.8) ? 'infographics-table-p-circle-orange' 
        : (value > 0) ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextIntCov = (value) => {
        return value >= 5 ? 'infographics-table-p-circle-green' 
        : value > 1.35 && value < 5 ? 'infographics-table-p-circle-orange' 
        : value <= 1.35 && value > 0 ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextCurRatio = (value) => {
        return value >= 2.2 ? 'infographics-table-p-circle-green' 
        : value > 1.2 && value < 2.2 ? 'infographics-table-p-circle-orange' 
        : value <= 1.2 && value > 0 ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextDebtToEq = (value) => {
        return value > 0 && value <= 0.35 ? 'infographics-table-p-circle-green' 
        : value > 0.35 && value < 0.7 ? 'infographics-table-p-circle-orange' 
        : value >= 0.7 ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red'
    }

    let dataForChartAnnual = []
    let dataForChartQuarterly = []
    if (Boolean(data)) {
        const arrayCashAnnual = JSON.parse(data["total_cash_Annual_JSON"]).array
        const arrayDebtAnnual = JSON.parse(data["TotalDebt_Annual_JSON"]).array
        arrayCashAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    Cash: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.Cash = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayDebtAnnual?.forEach((obj, key) => {
            if (!dataForChartAnnual.length || !dataForChartAnnual.filter(el => el.date === obj.endDate).length) {
                dataForChartAnnual.unshift({
                    date: obj.endDate,
                    Debt: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartAnnual.filter(el => el.date === obj.endDate)
                obj2.Debt = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        dataForChartAnnual.forEach((obj, key) => {
            obj.date = obj.date?.split('-').slice(0, -1).join('-')
        })
        dataForChartAnnual.push({
            date: 'TTM',
            Debt: Math.round(data["TotalDebt_TTM"]/1000000)/1000,
            Cash: Math.round(data["total_cash_TTM"]/1000000)/1000,
        })

        const arrayCashQuarterly = JSON.parse(data["total_cash_Quarterly_JSON"]).array
        const arrayDebtQuarterly = JSON.parse(data["TotalDebt_Quarterly_JSON"]).array
        arrayCashQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    Cash: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.Cash = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
            }
        })
        arrayDebtQuarterly?.forEach((obj, key) => {
            if (!dataForChartQuarterly.length || !dataForChartQuarterly.filter(el => el.date === obj.endDate).length) {
                dataForChartQuarterly.unshift({
                    date: obj.endDate,
                    Debt: obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null,
                })
            } else {
                const [ obj2 ] = dataForChartQuarterly.filter(el => el.date === obj.endDate)
                obj2.Debt = obj.value !== undefined ? Math.round(obj.value/1000000)/1000 : null
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
                            id={`radio-cash-debt-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            size="sm"
                            name="radio-cash-debt"
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
                    <Bar yAxisId="left" name="Cash" dataKey="Cash" fill="#19CB3A" />
                    <Bar yAxisId="left" name="Debt" dataKey="Debt" fill="#CB1919" />
                    </BarChart>
                </div>

                
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
                                Коэффициент покрытия текущего долга наличными средствами, 
                                показывает сколько раз компания может погасить свои текущие обязательства, 
                                используя денежные средства от операционной деятельности
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Cash/Debt TTM</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextCashDebt(dataScrinner['Cash_Debt'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Cash_Debt'] !== null && !isNaN(dataScrinner['Cash_Debt']) 
                                    ? dataScrinner['Cash_Debt'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cash_debt_better_site'])}>{data['cash_debt_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cash_debt_better_sector'])}>{data['cash_debt_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cash_debt_better_industry'])}>{data['cash_debt_better_industry']}%</td>
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
                                Коэффициент покрытия процентов характеризует способность организации 
                                обслуживать свои долговые обязательства: EBIT/ Проценты к уплате
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Interest coverage</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextIntCov(dataScrinner['Interest_coverage'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{(dataScrinner['Interest_coverage'] !== null && !isNaN(dataScrinner['Interest_coverage']))
                                    ? dataScrinner['Interest_coverage'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['int_cover_better_site'])}>{data['int_cover_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['int_cover_better_sector'])}>{data['int_cover_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['int_cover_better_industry'])}>{data['int_cover_better_industry']}%</td>
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
                                Коэффициент коказывает способность компании погашать краткосрочные обязательства: 
                                Оборотные активы/ Краткосрочные обязательства
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Current ratio</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextCurRatio(dataScrinner['Current_ratio'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Current_ratio'] !== null && !isNaN(dataScrinner['Current_ratio']) 
                                    ? dataScrinner['Current_ratio'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cur_ratio_better_site'])}>{data['cur_ratio_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cur_ratio_better_sector'])}>{data['cur_ratio_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['cur_ratio_better_industry'])}>{data['cur_ratio_better_industry']}%</td>
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
                                Чистый долг/Собственный капитал
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>Debt/Equity</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextDebtToEq(dataScrinner['DebtToEquity'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['DebtToEquity'] !== null && !isNaN(dataScrinner['DebtToEquity']) 
                                    ? dataScrinner['DebtToEquity'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['debt_eq_better_site'])}>{data['debt_eq_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['debt_eq_better_sector'])}>{data['debt_eq_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['debt_eq_better_industry'])}>{data['debt_eq_better_industry']}%</td>
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
