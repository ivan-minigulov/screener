import React from "react";
import { OverlayTrigger, Tooltip as TooltipReact } from "react-bootstrap";

export default function PegEvEbitdaRoeRoaRsi({data, dataScrinner}) {
    const colorTextBetter = (value) => {
        return (value >= 60) ? 'infographics-table-td-percent-green' 
        : (value >= 40 && value < 60) ? 'infographics-table-td-percent-orange' 
        : (value < 40) ? 'infographics-table-td-percent-red' : 'infographics-table-td-percent-red'
    }
    const colorTextPEG = (value) => {
        return value <= 2.5 && value > 0 ? 'infographics-table-p-circle-green' 
        : value > 2.5 && value < 6 ? 'infographics-table-p-circle-orange' 
        : value >= 6 || value < 0 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextEvEbitda = (value) => {
        return value <= 12 && value > 0 ? 'infographics-table-p-circle-green' 
        : value > 12 && value < 40 ? 'infographics-table-p-circle-orange' 
        : value >= 40 || value < 0 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextRoe = (value) => {
        return value >= 15 ? 'infographics-table-p-circle-green' 
        : value >= 5 && value < 15 ? 'infographics-table-p-circle-orange' 
        : value < 5 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextRoa = (value) => {
        return value >= 15 ? 'infographics-table-p-circle-green' 
        : value >= 5 && value < 15 ? 'infographics-table-p-circle-orange' 
        : value < 5 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    const colorTextRSI = (value) => {
        return value > 0 && value <= 40 ? 'infographics-table-p-circle-green' 
        : value > 40 && value < 60 ? 'infographics-table-p-circle-orange' 
        : value >= 60 ? 'infographics-table-p-circle-red'  : 'infographics-table-p-circle-red'
    }
    return (
        <div>
            {Boolean(data) && Boolean(dataScrinner) && (
                <div className="div-parent-border">
                <div className="div-border">

                <div className="d-inline-block m-3"></div>
                
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
                                Коэффициент, сопоставляющий цену акции с прибылью на акцию и 
                                ожидаемой будущей прибылью компании
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>PEG ratio</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextPEG(dataScrinner['Peg_ratio'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['Peg_ratio'] !== null && !isNaN(dataScrinner['Peg_ratio']) 
                                    ? dataScrinner['Peg_ratio'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['peg_better_site'])}>{data['peg_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['peg_better_sector'])}>{data['peg_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['peg_better_industry'])}>{data['peg_better_industry']}%</td>
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
                                Отношение стоимости компании к полученной ею прибыли до вычета процентов, 
                                налога на прибыль и амортизации активов
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>EV/EBITDA</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextEvEbitda(dataScrinner['EvEbitda'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['EvEbitda'] !== null && !isNaN(dataScrinner['EvEbitda']) 
                                    ? dataScrinner['EvEbitda'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['ev_ebitda_better_site'])}>{data['ev_ebitda_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['ev_ebitda_better_sector'])}>{data['ev_ebitda_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['ev_ebitda_better_industry'])}>{data['ev_ebitda_better_industry']}%</td>
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
                                Рентабельность собственного капитала - коэффициент, 
                                отражающий эффективность управления компанией капиталом, вложенным акционерами
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>ROE</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextRoe(dataScrinner['ROE'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['ROE'] !== null && !isNaN(dataScrinner['ROE']) 
                                    ? dataScrinner['ROE'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roe_better_site'])}>{data['roe_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roe_better_sector'])}>{data['roe_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roe_better_industry'])}>{data['roe_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                            </>

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
                                Рентабельность активов - коэффициент, отражающий 
                                эффективность использования активов компании для генерации выручки
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>ROA</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextRoa(dataScrinner['ROA'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['ROA'] !== null && !isNaN(dataScrinner['ROA']) 
                                    ? dataScrinner['ROA'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roa_better_site'])}>{data['roa_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roa_better_sector'])}>{data['roa_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['roa_better_industry'])}>{data['roa_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                        <div className="d-inline-block m-3"></div>

                        </div>

                        <div className="d-inline-block m-2"></div>

                <div className="div-border"> 
                <div className="d-inline-block m-3"></div>

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
                                Relative Strength Index, Индекс относительной силы, период - 14 дней
                                </TooltipReact>
                            }
                            ><p className="infographics-table-p-blue">
                                <p><span>RSI 14 days</span></p></p>
                            </OverlayTrigger>
                                </th>
                            </tr>
                            <tr className="infographics-table-td">
                                <td colSpan={2}><p className={colorTextRSI(dataScrinner['RSI14'])}>
                                    <span className="infographics-table-p-circle-text"
                                    >{dataScrinner['RSI14'] !== null && !isNaN(dataScrinner['RSI14']) 
                                    ? dataScrinner['RSI14'] 
                                    : '-'}</span></p></td>
                            </tr>
                            <tr className="infographics-table-th">
                                <td colSpan={2}><p className="infographics-table-p-blue-better-than">Лучше, чем у</p></td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rsi_better_site'])}>{data['rsi_better_site']}%</td>
                                <td className="infographics-table-td-text">компаний на сайте</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rsi_better_sector'])}>{data['rsi_better_sector']}%</td>
                                <td className="infographics-table-td-text">компаний сектора</td>
                            </tr>
                            <tr className="infographics-table-td">
                                <td className={colorTextBetter(data['rsi_better_industry'])}>{data['rsi_better_industry']}%</td>
                                <td className="infographics-table-td-text">компаний индустрии</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                <div className="d-inline-block m-3"></div>
                
                </div>

            </div>

            )}
        </div>
        
    );
}
