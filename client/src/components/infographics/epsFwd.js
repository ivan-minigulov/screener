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

export default function EpsFwd({data, dataScrinner}) {
    const colorText = (growth) => {
        return (growth >= 1) ? 'infographics-table-p-circle-green' 
        : (growth > -1 && growth < 1) ? 'infographics-table-p-circle-orange' 
        : (growth <= -1) ? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
    }
    const colorTextPE = (value) => {
        return value <= 20 && value > 0 ? 'infographics-table-p-circle-green' 
        : value > 20 && value < 50 ? 'infographics-table-p-circle-orange'
        : value >= 50 ||  value < 0? 'infographics-table-p-circle-red' : 'infographics-table-p-circle-red'
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
                            EPS: data["Eps_TTM"],
                            PE: dataScrinner["PE"],
                        },
                        {
                            year: 2023,
                            EPS: data["Fwd_EPS_1"],
                            PE: dataScrinner["Fwd_PE_1"],

                        },
                        {
                            year: 2024,
                            EPS: data["Fwd_EPS_2"],
                            PE: dataScrinner["Fwd_PE_2"],

                        },
                        {
                            year: 2025,
                            EPS: data["Fwd_EPS_3"],
                            PE: dataScrinner["Fwd_PE_3"],

                        },
                        
                    ]}
                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    fontSize={14}
                    >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis style={{fontSize: '14px'}} dataKey="year"/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="left" orientation="left" unit='$'/>
                    <YAxis style={{fontSize: '14px'}} yAxisId="right" orientation="right"
                    />
                    <Tooltip labelStyle={{fontSize: '14px'}} itemStyle={{fontSize: '12px'}}/>
                    <Legend wrapperStyle={{fontSize: '14px'}} />
                    <Area yAxisId="right" type="monotone" dataKey="PE" name="PE" fill="#FFAD14" stroke="#FFAD14" opacity={0.8} />
                    <Bar yAxisId="left" name="EPS" dataKey="EPS" fill="#ff7300" barSize={20}/>
                    </ComposedChart>
                </div>

                
                        <>
                    <div className="BarChart-div-table">
                    <table id="infographics-table">
                        <tbody>
                            <tr className="infographics-table-th">
                                <th colSpan={2}><p className="infographics-table-p-orange">
                                <p><span>Будущий среднегодовой рост EPS</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorText(dataScrinner['Fwd_avg_EPS_growth'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_avg_EPS_growth'] !== null && !isNaN(dataScrinner['Fwd_avg_EPS_growth']) 
                                    ? dataScrinner['Fwd_avg_EPS_growth'] + '%'
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_eps_better_site'])}>{data['fwd_eps_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_eps_better_sector'])}>{data['fwd_eps_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_eps_better_industry'])}>{data['fwd_eps_better_industry']}%</td>
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
                                <p><span>Price/Earning TTM</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPE(dataScrinner['PE'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['PE'] !== null && !isNaN(dataScrinner['PE']) 
                                    ? dataScrinner['PE']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_ttm_better_site'])}>{data['fwd_pe_ttm_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_ttm_better_sector'])}>{data['fwd_pe_ttm_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_ttm_better_industry'])}>{data['fwd_pe_ttm_better_industry']}%</td>
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
                                <p><span>Price/Earning 2023</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPE(dataScrinner['Fwd_PE_1'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PE_1'] !== null && !isNaN(dataScrinner['Fwd_PE_1']) 
                                    ? dataScrinner['Fwd_PE_1']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_1_better_site'])}>{data['fwd_pe_1_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_1_better_sector'])}>{data['fwd_pe_1_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_1_better_industry'])}>{data['fwd_pe_1_better_industry']}%</td>
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
                                <p><span>Price/Earning 2024</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPE(dataScrinner['Fwd_PE_2'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PE_2'] !== null && !isNaN(dataScrinner['Fwd_PE_2']) 
                                    ? dataScrinner['Fwd_PE_2']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_2_better_site'])}>{data['fwd_pe_2_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_2_better_sector'])}>{data['fwd_pe_2_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_2_better_industry'])}>{data['fwd_pe_2_better_industry']}%</td>
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
                                <p><span>Price/Earning 2025</span></p></p></th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPE(dataScrinner['Fwd_PE_3'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Fwd_PE_3'] !== null && !isNaN(dataScrinner['Fwd_PE_3']) 
                                    ? dataScrinner['Fwd_PE_3']
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-orange-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_3_better_site'])}>{data['fwd_pe_3_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_3_better_sector'])}>{data['fwd_pe_3_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['fwd_pe_3_better_industry'])}>{data['fwd_pe_3_better_industry']}%</td>
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
