import React from "react";
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
} from "recharts";

export default function RevenueFwd({data, dataScrinner}) {
    const colorText = (growth) => {
        return (growth >= 1) ? 'infographics-table-p-circle-green' 
        : (growth > -1 && growth < 1) ? 'infographics-table-p-circle-orange' 
        : (growth <= -1) ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextPS = (value) => {
        return value <= 4 && value > 0 ? 'infographics-table-p-circle-green' 
        : value > 4 && value <= 10 ? 'infographics-table-p-circle-orange' 
        : value > 10 ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red'
    }
    return (
        <div>
            {Boolean(data) && Boolean(dataScrinner) && (
                <div className="div-parent-border">
                <div className="div-border">
                <div className="BarChart">
                <ComposedChart
                    width={350}
                    height={300}
                    data={[
                        {
                            year: 'TTM',
                            Revenue: Math.round(data["Revenue_TTM_USD"]/1000000)/1000,
                            PS: dataScrinner["PS"],
                        },
                        {
                            year: 2023,
                            Revenue: Math.round(data["Fwd_Revenue_1"]/1000000)/1000,
                            PS: dataScrinner["Fwd_PS_1"],

                        },
                        {
                            year: 2024,
                            Revenue: Math.round(data["Fwd_Revenue_2"]/1000000)/1000,
                            PS: dataScrinner["Fwd_PS_2"],

                        },
                        {
                            year: 2025,
                            Revenue: Math.round(data["Fwd_Revenue_3"]/1000000)/1000,
                            PS: dataScrinner["Fwd_PS_3"],

                        },
                        
                    ]}
                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    fontSize={14}
                    >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis style={{fontSize: '14px'}} dataKey="year"/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="left" orientation="left"
                            label={{ value: 'млрд. $', angle: -90, position: 'insideLeft', offset: 5, fontSize: '16px' }}/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="right" orientation="right"/>
                    <Tooltip labelStyle={{fontSize: '14px'}} itemStyle={{fontSize: '12px'}}/>
                    <Legend wrapperStyle={{fontSize: '14px'}} />
                    <Area yAxisId="right" type="monotone" dataKey="PS" name="PS" fill="#8884d8" stroke="#8884d8" opacity={0.8} />
                    <Bar yAxisId="left" name="Выручка" dataKey="Revenue" fill="#413ea0" barSize={20}/>
                    </ComposedChart>
                </div>

                
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Будущий среднегодовой рост выручки</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(dataScrinner['Fwd_avg_sales_growth'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_avg_sales_growth'] !== null && !isNaN(dataScrinner['Fwd_avg_sales_growth']) 
                                    ? dataScrinner['Fwd_avg_sales_growth'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_rev_better_site'])}>{data['fwd_rev_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_rev_better_sector'])}>{data['fwd_rev_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_rev_better_industry'])}>{data['fwd_rev_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Price/Sales TTM</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPS(dataScrinner['PS'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['PS'] !== null && !isNaN(dataScrinner['PS']) 
                                    ? dataScrinner['PS']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_ttm_better_site'])}>{data['fwd_ps_ttm_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_ttm_better_sector'])}>{data['fwd_ps_ttm_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_ttm_better_industry'])}>{data['fwd_ps_ttm_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Price/Sales 2023</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPS(dataScrinner['Fwd_PS_1'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PS_1'] !== null && !isNaN(dataScrinner['Fwd_PS_1']) 
                                    ? dataScrinner['Fwd_PS_1']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_1_better_site'])}>{data['fwd_ps_1_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_1_better_sector'])}>{data['fwd_ps_1_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_1_better_industry'])}>{data['fwd_ps_1_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Price/Sales 2024</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPS(dataScrinner['Fwd_PS_2'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PS_2'] !== null && !isNaN(dataScrinner['Fwd_PS_2']) 
                                    ? dataScrinner['Fwd_PS_2']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_2_better_site'])}>{data['fwd_ps_2_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_2_better_sector'])}>{data['fwd_ps_2_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_2_better_industry'])}>{data['fwd_ps_2_better_industry']}%</td>
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
                                <th colSpan={2}><p className="infographics-table-p-blue">
                                <p><span>Price/Sales 2025</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPS(dataScrinner['Fwd_PS_3'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PS_3'] !== null && !isNaN(dataScrinner['Fwd_PS_3']) 
                                    ? dataScrinner['Fwd_PS_3']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_3_better_site'])}>{data['fwd_ps_3_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_3_better_sector'])}>{data['fwd_ps_3_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_ps_3_better_industry'])}>{data['fwd_ps_3_better_industry']}%</td>
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
