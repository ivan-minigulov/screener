import React from 'react'
import { COL_NAMES } from './colNamesScrinner'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function TableOneStock({ data, dataScrinner }) {
    const colorText = (growth) => {
        if (growth >= 1) {
            return 'text-green'
        }
        if (growth > -1 && growth < 1) {
            return 'text-orange'
        }
        if (growth <= -1) {
            return 'text-red'
        }
    }
    const colorTextGrowthNeg = (value) => {
        return value <= -1 ? 'text-green' : value > -1 && value < 1 ? 'text-orange' : value >= 1 ? 'text-red' : ''
    }
    const colorTextPE = (value) => {
        return value <= 20 && value > 0 ? 'text-green' 
        : value > 20 && value < 50 ? 'text-orange' : value >= 50 || value < 0 ? 'text-red' : ''
    }
    const colorTextPS = (value) => {
        return value <= 4 && value > 0 ? 'text-green' : value > 4 && value <= 10 ? 'text-orange' : value > 10 ? 'text-red' : ''
    }
    const colorTextPEG = (value) => {
        return value <= 2.5 && value > 0 ? 'text-green' 
        : value > 2.5 && value < 6 ? 'text-orange' : value >= 6 || value < 0 ? 'text-red' : ''
    }
    const colorTextEvEbitda = (value) => {
        return value <= 12 && value > 0 ? 'text-green' 
        : value > 12 && value < 40 ? 'text-orange' : value >= 40 || value < 0 ? 'text-red' : ''
    }
    const colorTextRoe = (value) => {
        return value >= 15 ? 'text-green' : value >= 5 && value < 15 ? 'text-orange' : value < 5 ? 'text-red' : ''
    }
    const colorTextRoa = (value) => {
        return value >= 15 ? 'text-green' : value >= 5 && value < 15 ? 'text-orange' : value < 5 ? 'text-red' : ''
    }
    const colorTextMargin = (value) => {
        return value >= 5 ? 'text-green' : value > 0 && value < 5 ? 'text-orange' : value <= 0 ? 'text-red' : ''
    }
    const colorTextCashDebt = (value) => {
        return value >= 0.8 ? 'text-green' : value > 0.4 && value < 0.8 ? 'text-orange' : value <= 0.4 && value > 0 ? 'text-red' : ''
    }
    const colorTextIntCov = (value) => {
        return value >= 5 ? 'text-green' : value > 1.35 && value < 5 ? 'text-orange' : value <= 1.35 && value > 0 ? 'text-red' : ''
    }
    const colorTextCurRatio = (value) => {
        return value >= 2.2 ? 'text-green' : value > 1.2 && value < 2.2 ? 'text-orange' : value <= 1.2 && value > 0 ? 'text-red' : ''
    }
    const colorTextDebtToEq = (value) => {
        return value > 0 && value <= 0.35 ? 'text-green' : value > 0.35 && value < 0.7 ? 'text-orange' : value >= 0.7 ? 'text-red' : ''
    }
    const colorTextDivYeild = (value) => {
        return value >= 2.5 ? 'text-green' : value > 1 && value < 2.5 ? 'text-orange' : value <= 1 ? 'text-red' : ''
    }
    const colorTextPayoutRatio = (value) => {
        return value > 0 && value <= 30 ? 'text-green' : value > 30 && value < 80 ? 'text-orange' : value >= 80 ? 'text-red' : ''
    }
    const colorTextPriceFCF = (value) => {
        return value > 0 && value <= 26 ? 'text-green' 
        : value > 26 && value < 60 ? 'text-orange' : value >= 60 || value < 0 ? 'text-red' : ''
    }
    const colorTextRSI = (value) => {
        return value > 0 && value <= 40 ? 'text-green' : value > 40 && value < 60 ? 'text-orange' : value >= 60 ? 'text-red' : ''
    }

    const colNamesTh = [
        {headerItem: 'Price', overlay: 'Цена закрытия предыдущего рабочего дня'},
        {headerItem: 'PE', overlay: 'Цена/Прибыль'}, 
        {headerItem: 'Earnings growth past 3y', overlay: 'Среднегодой рост прибыли за последние 3 года'}, 
        {headerItem: 'PS', overlay: 'Капитализация/Выручка'},
        {headerItem: 'Sales growth past 3y', overlay: 'Среднегодой рост выручки за последние 3 года'},
        {headerItem: 'REG Ratio', overlay: 'Коэффициент, сопоставляющий цену акции с прибылью на акцию и ожидаемой будущей прибылью компании'},
        {headerItem: 'EV/ Ebitda', overlay: 'Отношение стоимости компании к полученной ею прибыли до вычета процентов, налога на прибыль и амортизации активов'},
        {headerItem: 'ROE', overlay: 'Рентабельность собственного капитала - коэффициент, отражающий эффективность управления компанией капиталом, вложенным акционерами'},
        {headerItem: 'ROA', overlay: 'Рентабельность активов - коэффициент, отражающий эффективность использования активов компании для генерации выручки'},
        {headerItem: 'Cash/ Debt', overlay: 'Коэффициент покрытия текущего долга наличными средствами, показывает сколько раз компания может погасить свои текущие обязательства, используя денежные средства от операционной деятельности'},
        {headerItem: 'Interest Coverage', overlay: 'Коэффициент покрытия процентов характеризует способность организации обслуживать свои долговые обязательства: EBIT/ Проценты к уплате'},
        {headerItem: 'Current Ratio', overlay: 'Коэффициент коказывает способность компании погашать краткосрочные обязательства: Оборотные активы/ Краткосрочные обязательства'},
        {headerItem: 'Debt/ Equity', overlay: 'Чистый долг/Собственный капитал'},
        {headerItem: 'Dividend yield', overlay: 'Дивидендная доходность за прошедший год, %'},
        {headerItem: 'Payout Ratio', overlay: 'Коэффициент выплаты дивидендов - показывает соотношение общей суммы дивидендов, выплаченных акционерам по отношению к чистой прибыли'},
        {headerItem: 'Price/ LFCF', overlay: 'Капитализация/ Левериджный cвободный денежный поток'},
        {headerItem: 'RSI 14 days', overlay: 'Relative Strength Index, Индекс относительной силы, период - 14 дней'},
      ]

    return (
        <div>
            {Boolean(data) && Boolean(dataScrinner) && (
                <div>
                
                <table className='table-micro1'>
                    <thead id='table-rating'>
                        <tr>
                            <th>Показатели {Boolean(data["currency"]) && <span>({data["currency"]})</span>}</th>
                            <th>2019</th>
                            <th>2020</th>
                            <th>2021</th>
                            <th>2022</th>
                            <th>TTM</th>
                            <th>Среднегодовой рост</th>
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        <tr>
                            <td className='table-td-params'>Выручка</td>
                            <td>{data["Revenue_4"]}</td>
                            <td>{data["Revenue_3"]}</td>
                            <td>{data["Revenue_2"]}</td>
                            <td>{data["Revenue_1"]}</td>
                            <td>{data["Revenue_TTM"]}</td>
                            <td className={colorText(data["Revenue_Growth"])}>{data["Revenue_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Операционный поток</td>
                            <td>{data["OperatingCashFlow_4"]}</td>
                            <td>{data["OperatingCashFlow_3"]}</td>
                            <td>{data["OperatingCashFlow_2"]}</td>
                            <td>{data["OperatingCashFlow_1"]}</td>
                            <td></td>
                            <td className={colorText(data["OperatingCashFlow_Growth"])}>{data["OperatingCashFlow_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Инвестиционный поток</td>
                            <td>{data["InvestingCashFlow_4"]}</td>
                            <td>{data["InvestingCashFlow_3"]}</td>
                            <td>{data["InvestingCashFlow_2"]}</td>
                            <td>{data["InvestingCashFlow_1"]}</td>
                            <td></td>
                            <td className={colorTextGrowthNeg(data["InvestingCashFlow_Growth"])}>{data["InvestingCashFlow_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Финансовый поток</td>
                            <td>{data["FinancingCashFlow_4"]}</td>
                            <td>{data["FinancingCashFlow_3"]}</td>
                            <td>{data["FinancingCashFlow_2"]}</td>
                            <td>{data["FinancingCashFlow_1"]}</td>
                            <td></td>
                            <td className={colorTextGrowthNeg(data["FinancingCashFlow_Growth"])}>{data["FinancingCashFlow_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Операционная прибыль</td>
                            <td>{data["OperatingIncome_4"]}</td>
                            <td>{data["OperatingIncome_3"]}</td>
                            <td>{data["OperatingIncome_2"]}</td>
                            <td>{data["OperatingIncome_1"]}</td>
                            <td>{data["OperatingIncome_TTM"]}</td>
                            <td className={colorText(data["OperatingIncome_Growth"])}>{data["OperatingIncome_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Операционная прибыль %</td>
                            <td className={colorTextMargin(data["OperatingMargin_4"])}>{data["OperatingMargin_4"]}</td>
                            <td className={colorTextMargin(data["OperatingMargin_3"])}>{data["OperatingMargin_3"]}</td>
                            <td className={colorTextMargin(data["OperatingMargin_2"])}>{data["OperatingMargin_2"]}</td>
                            <td className={colorTextMargin(data["OperatingMargin_1"])}>{data["OperatingMargin_1"]}</td>
                            <td className={colorTextMargin(data["OperatingMargin_TTM"])}>{data["OperatingMargin_TTM"]}</td>
                            <td className={colorText(data["OperatingMargin_Growth"])}>{data["OperatingMargin_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Чистая прибыль</td>
                            <td>{data["NetIncome_4"]}</td>
                            <td>{data["NetIncome_3"]}</td>
                            <td>{data["NetIncome_2"]}</td>
                            <td>{data["NetIncome_1"]}</td>
                            <td>{data["NetIncome_TTM"]}</td>
                            <td className={colorText(data["NetIncome_Growth"])}>{data["NetIncome_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Чистая прибыль %</td>
                            <td className={colorTextMargin(data["IncomeMargin_4"])}>{data["IncomeMargin_4"]}</td>
                            <td className={colorTextMargin(data["IncomeMargin_3"])}>{data["IncomeMargin_3"]}</td>
                            <td className={colorTextMargin(data["IncomeMargin_2"])}>{data["IncomeMargin_2"]}</td>
                            <td className={colorTextMargin(data["IncomeMargin_1"])}>{data["IncomeMargin_1"]}</td>
                            <td className={colorTextMargin(data["IncomeMargin_TTM"])}>{data["IncomeMargin_TTM"]}</td>
                            <td className={colorText(data["IncomeMargin_Growth"])}>{data["IncomeMargin_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Общий долг</td>
                            <td>{data["TotalDebt_4"]}</td>
                            <td>{data["TotalDebt_3"]}</td>
                            <td>{data["TotalDebt_2"]}</td>
                            <td>{data["TotalDebt_1"]}</td>
                            <td>{data["TotalDebt_TTM"]}</td>
                            <td className={colorTextGrowthNeg(data["TotalDebt_Growth"])}>{data["TotalDebt_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Эмиссия акций</td>
                            <td>{data["IssuanceOfCapitalStock_4"]}</td>
                            <td>{data["IssuanceOfCapitalStock_3"]}</td>
                            <td>{data["IssuanceOfCapitalStock_2"]}</td>
                            <td>{data["IssuanceOfCapitalStock_1"]}</td>
                            <td></td>
                            <td className={colorTextGrowthNeg(data["IssuanceOfCapitalStock_Growth"])}>{data["IssuanceOfCapitalStock_Growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Обратный выкуп акций</td>
                            <td>{data["RepurchaseOfCapitalStock_4"]}</td>
                            <td>{data["RepurchaseOfCapitalStock_3"]}</td>
                            <td>{data["RepurchaseOfCapitalStock_2"]}</td>
                            <td>{data["RepurchaseOfCapitalStock_1"]}</td>
                            <td></td>
                            <td className={colorText(data["RepurchaseOfCapitalStock_Growth"])}>{data["RepurchaseOfCapitalStock_Growth"]}</td>
                        </tr>
                    </tbody>
                </table>
                
                <table className='table-micro2'>
                    <thead id='table-rating'>
                        <tr>
                            <th>Показатели (USD)</th>
                            <th>2023</th>
                            <th>2024</th>
                            <th>2025</th>
                            <th>Среднегодовой рост</th>
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        <tr>
                            <td className='table-td-params'>Fwd выручка</td>
                            <td>{data["Fwd_Revenue_1"]}</td>
                            <td>{data["Fwd_Revenue_2"]}</td>
                            <td>{data["Fwd_Revenue_3"]}</td>
                            <td className={colorText(dataScrinner["Fwd_avg_sales_growth"])}>{dataScrinner["Fwd_avg_sales_growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Fwd PS ratio</td>
                            <td className={colorTextPS(dataScrinner["Fwd_PS_1"])}>{dataScrinner["Fwd_PS_1"]}</td>
                            <td className={colorTextPS(dataScrinner["Fwd_PS_2"])}>{dataScrinner["Fwd_PS_2"]}</td>
                            <td className={colorTextPS(dataScrinner["Fwd_PS_3"])}>{dataScrinner["Fwd_PS_3"]}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Fwd EPS</td>
                            <td>{data["Fwd_EPS_1"]}</td>
                            <td>{data["Fwd_EPS_2"]}</td>
                            <td>{data["Fwd_EPS_3"]}</td>
                            <td className={colorText(dataScrinner["Fwd_avg_EPS_growth"])}>{dataScrinner["Fwd_avg_EPS_growth"]}</td>
                        </tr>
                        <tr>
                            <td className='table-td-params'>Fwd PE ratio</td>
                            <td className={colorTextPE(dataScrinner["Fwd_PE_1"])}>{dataScrinner["Fwd_PE_1"]}</td>
                            <td className={colorTextPE(dataScrinner["Fwd_PE_2"])}>{dataScrinner["Fwd_PE_2"]}</td>
                            <td className={colorTextPE(dataScrinner["Fwd_PE_3"])}>{dataScrinner["Fwd_PE_3"]}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <table className='table-micro3'>
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
                                ><th>
                                {headerItem}
                                </th>
                            </OverlayTrigger>
                        ))}
                            {/* <th>Price</th>
                            <th>PE</th>
                            <th>Earnings growth past 3y</th>
                            <th>PS</th>
                            <th>Sales growth past 3y</th>
                            <th>REG Ratio</th>
                            <th>EV/ Ebitda</th>
                            <th>ROE</th>
                            <th>ROA</th>
                            <th>Cash/ Debt</th>
                            <th>Interest Coverage</th>
                            <th>Current Ratio</th>
                            <th>Debt/ Equity</th>
                            <th>Dividend yield</th>
                            <th>Payout Ratio</th>
                            <th>Price/ LFCF</th>
                            <th>RSI 14 days</th> */}
                        </tr>
                    </thead>
                    <tbody id='table-rating'>
                        <tr>
                            <td>{dataScrinner["Price"]}</td>
                            <td className={colorTextPE(dataScrinner["PE"])}>{dataScrinner["PE"]}</td>
                            <td className={colorText(dataScrinner["Last_eps_growth3"])}>{dataScrinner["Last_eps_growth3"]}</td>
                            <td className={colorTextPS(dataScrinner["PS"])}>{dataScrinner["PS"]}</td>
                            <td className={colorText(dataScrinner["Last_rev_growth3"])}>{dataScrinner["Last_rev_growth3"]}</td>
                            <td className={colorTextPEG(dataScrinner["Peg_ratio"])}>{dataScrinner["Peg_ratio"]}</td>
                            <td className={colorTextEvEbitda(dataScrinner["EvEbitda"])}>{dataScrinner["EvEbitda"]}</td>
                            <td className={colorTextRoe(dataScrinner["ROE"])}>{dataScrinner["ROE"]}</td>
                            <td className={colorTextRoa(dataScrinner["ROA"])}>{dataScrinner["ROA"]}</td>
                            <td className={colorTextCashDebt(dataScrinner["Cash_Debt"])}>{dataScrinner["Cash_Debt"]}</td>
                            <td className={colorTextIntCov(dataScrinner["Interest_coverage"])}>{dataScrinner["Interest_coverage"]}</td>
                            <td className={colorTextCurRatio(dataScrinner["Current_ratio"])}>{dataScrinner["Current_ratio"]}</td>
                            <td className={colorTextDebtToEq(dataScrinner["DebtToEquity"])}>{dataScrinner["DebtToEquity"]}</td>
                            <td className={colorTextDivYeild(dataScrinner["Div_yield"])}>{dataScrinner["Div_yield"]}</td>
                            <td className={colorTextPayoutRatio(dataScrinner["Payout_ratio"])}>{dataScrinner["Payout_ratio"]}</td>
                            <td className={colorTextPriceFCF(dataScrinner["priceCF"])}>{dataScrinner["priceCF"]}</td>
                            <td className={colorTextRSI(dataScrinner["RSI14"])}>{dataScrinner["RSI14"]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )}
        </div>
    )
}
