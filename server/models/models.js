const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { noData } = require('pg-protocol/dist/messages')


const PopularTheme = sequelize.define('popular_theme', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true},
}, {
    timestamps: false
})

const Sector_menu = sequelize.define('sector_menu', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true},
}, {
    timestamps: false
})

const Industry_menu = sequelize.define('industry_menu', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true}
}, {
    timestamps: false
})

const Country_menu = sequelize.define('country_menu', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING}
}, {
    timestamps: false
})

const Business_cycle_econ_menu = sequelize.define('business_cycle_econ_menu', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true}
}, {
    timestamps: false
})

const Business_cycle_comp_menu = sequelize.define('business_cycle_comp_menu', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique:true}
}, {
    timestamps: false
})



const Stock = sequelize.define('stock', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    Name: {type: DataTypes.STRING},
    Tickers: {type: DataTypes.STRING, unique:true, allowNull:true},
    Price: {type: DataTypes.REAL},
    Market_cap: {type: DataTypes.REAL},
    PE: {type: DataTypes.REAL},
    Fwd_PE_1: {type: DataTypes.REAL},
    Fwd_PE_2: {type: DataTypes.REAL},
    Fwd_PE_3: {type: DataTypes.REAL},
    Fwd_avg_EPS_growth: {type: DataTypes.REAL},
    Last_eps_growth3: {type: DataTypes.REAL},
    PS: {type: DataTypes.REAL},
    Fwd_PS_1: {type: DataTypes.REAL},
    Fwd_PS_2: {type: DataTypes.REAL},
    Fwd_PS_3: {type: DataTypes.REAL},
    Fwd_avg_sales_growth: {type: DataTypes.REAL},
    Last_rev_growth3: {type: DataTypes.REAL},
    Peg_ratio: {type: DataTypes.REAL},
    EvEbitda: {type: DataTypes.REAL},
    Net_margin: {type: DataTypes.REAL},
    ROE: {type: DataTypes.REAL},
    ROA: {type: DataTypes.REAL},
    Cash_Debt: {type: DataTypes.REAL},
    Interest_coverage: {type: DataTypes.REAL},
    Current_ratio: {type: DataTypes.REAL},
    DebtToEquity: {type: DataTypes.REAL},
    Div_yield: {type: DataTypes.REAL},
    Payout_ratio: {type: DataTypes.REAL},
    priceCF: {type: DataTypes.REAL},
    RSI14: {type: DataTypes.REAL},
    Growth_Rating: {type: DataTypes.REAL},
    Profit_Rating: {type: DataTypes.REAL},
    Value_Rating: {type: DataTypes.REAL},
    Debt_Rating: {type: DataTypes.REAL},
    Divident_Rating: {type: DataTypes.REAL},
    FCF_Rating: {type: DataTypes.REAL},
    Momentum_Rating: {type: DataTypes.REAL},
    Total_Rating: {type: DataTypes.REAL},
    businessCycleCompMenuId: {type: DataTypes.INTEGER},
    countryMenuId: {type: DataTypes.INTEGER},
    sectorMenuId: {type: DataTypes.INTEGER},
    industryMenuId: {type: DataTypes.INTEGER},
}, {
    timestamps: false
})


const StockMicro = sequelize.define('stock_micro', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    Tickers: {type: DataTypes.STRING, unique:true, allowNull:true},
    Bus_cycle_comp: {type: DataTypes.STRING},
    Revenue_4: {type: DataTypes.REAL},
    Revenue_3: {type: DataTypes.REAL},
    Revenue_2: {type: DataTypes.REAL},
    Revenue_1: {type: DataTypes.REAL},
    Revenue_TTM: {type: DataTypes.REAL},
    Revenue_Growth: {type: DataTypes.REAL},
    OperatingCashFlow_4: {type: DataTypes.REAL},
    OperatingCashFlow_3: {type: DataTypes.REAL},
    OperatingCashFlow_2: {type: DataTypes.REAL},
    OperatingCashFlow_1: {type: DataTypes.REAL},
    OperatingCashFlow_Growth: {type: DataTypes.REAL},
    InvestingCashFlow_4: {type: DataTypes.REAL},
    InvestingCashFlow_3: {type: DataTypes.REAL},
    InvestingCashFlow_2: {type: DataTypes.REAL},
    InvestingCashFlow_1: {type: DataTypes.REAL},
    InvestingCashFlow_Growth: {type: DataTypes.REAL},
    FinancingCashFlow_4: {type: DataTypes.REAL},
    FinancingCashFlow_3: {type: DataTypes.REAL},
    FinancingCashFlow_2: {type: DataTypes.REAL},
    FinancingCashFlow_1: {type: DataTypes.REAL},
    FinancingCashFlow_Growth: {type: DataTypes.REAL},
    OperatingIncome_4: {type: DataTypes.REAL},
    OperatingIncome_3: {type: DataTypes.REAL},
    OperatingIncome_2: {type: DataTypes.REAL},
    OperatingIncome_1: {type: DataTypes.REAL},
    OperatingIncome_TTM: {type: DataTypes.REAL},
    OperatingIncome_Growth: {type: DataTypes.REAL},
    NetIncome_4: {type: DataTypes.REAL},
    NetIncome_3: {type: DataTypes.REAL},
    NetIncome_2: {type: DataTypes.REAL},
    NetIncome_1: {type: DataTypes.REAL},
    NetIncome_TTM: {type: DataTypes.REAL},
    NetIncome_Growth: {type: DataTypes.REAL},
    OperatingMargin_4: {type: DataTypes.REAL},
    OperatingMargin_3: {type: DataTypes.REAL},
    OperatingMargin_2: {type: DataTypes.REAL},
    OperatingMargin_1: {type: DataTypes.REAL},
    OperatingMargin_TTM: {type: DataTypes.REAL},
    OperatingMargin_Growth: {type: DataTypes.REAL},
    IncomeMargin_4: {type: DataTypes.REAL},
    IncomeMargin_3: {type: DataTypes.REAL},
    IncomeMargin_2: {type: DataTypes.REAL},
    IncomeMargin_1: {type: DataTypes.REAL},
    IncomeMargin_TTM: {type: DataTypes.REAL},
    IncomeMargin_Growth: {type: DataTypes.REAL},
    TotalDebt_4: {type: DataTypes.REAL},
    TotalDebt_3: {type: DataTypes.REAL},
    TotalDebt_2: {type: DataTypes.REAL},
    TotalDebt_1: {type: DataTypes.REAL},
    TotalDebt_TTM: {type: DataTypes.REAL},
    TotalDebt_Growth: {type: DataTypes.REAL},
    CashDebt: {type: DataTypes.REAL},
    DebtToEquity: {type: DataTypes.REAL},
    CurrentRatio: {type: DataTypes.REAL},
    InterestCoverage: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_4: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_3: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_2: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_1: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_Growth: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_4: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_3: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_2: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_1: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_Growth: {type: DataTypes.REAL},
    Eps_TTM: {type: DataTypes.REAL},
    Fwd_EPS_1: {type: DataTypes.REAL},
    Fwd_EPS_2: {type: DataTypes.REAL},
    Fwd_EPS_3: {type: DataTypes.REAL},
    Fwd_Revenue_1: {type: DataTypes.REAL},
    Fwd_Revenue_2: {type: DataTypes.REAL},
    Fwd_Revenue_3: {type: DataTypes.REAL},
    FCF_TTM: {type: DataTypes.REAL},
    country: {type: DataTypes.STRING},
    sector: {type: DataTypes.STRING},
    industry: {type: DataTypes.STRING},
    earningsDate: {type: DataTypes.STRING},
    Revenue_TTM_USD: {type: DataTypes.REAL},
    FCF_TTM_USD: {type: DataTypes.REAL},
    currency: {type: DataTypes.STRING},
    rev_better_site: {type: DataTypes.REAL},
    rev_better_sector: {type: DataTypes.REAL},
    rev_better_industry: {type: DataTypes.REAL},
    oper_income_better_site: {type: DataTypes.REAL},
    oper_income_better_sector: {type: DataTypes.REAL},
    oper_income_better_industry: {type: DataTypes.REAL},
    net_income_better_site: {type: DataTypes.REAL},
    net_income_better_sector: {type: DataTypes.REAL},
    net_income_better_industry: {type: DataTypes.REAL},
    oper_margin_better_site: {type: DataTypes.REAL},
    oper_margin_better_sector: {type: DataTypes.REAL},
    oper_margin_better_industry: {type: DataTypes.REAL},
    net_margin_better_site: {type: DataTypes.REAL},
    net_margin_better_sector: {type: DataTypes.REAL},
    net_margin_better_industry: {type: DataTypes.REAL},
    repurchase_better_site: {type: DataTypes.REAL},
    repurchase_better_sector: {type: DataTypes.REAL},
    repurchase_better_industry: {type: DataTypes.REAL},
    cash_debt_better_site: {type: DataTypes.REAL},
    cash_debt_better_sector: {type: DataTypes.REAL},
    cash_debt_better_industry: {type: DataTypes.REAL},
    fwd_rev_better_site: {type: DataTypes.REAL},
    fwd_rev_better_sector: {type: DataTypes.REAL},
    fwd_rev_better_industry: {type: DataTypes.REAL},
    fwd_ps_ttm_better_site: {type: DataTypes.REAL},
    fwd_ps_ttm_better_sector: {type: DataTypes.REAL},
    fwd_ps_ttm_better_industry: {type: DataTypes.REAL},
    fwd_ps_1_better_site: {type: DataTypes.REAL},
    fwd_ps_1_better_sector: {type: DataTypes.REAL},
    fwd_ps_1_better_industry: {type: DataTypes.REAL},
    fwd_ps_2_better_site: {type: DataTypes.REAL},
    fwd_ps_2_better_sector: {type: DataTypes.REAL},
    fwd_ps_2_better_industry: {type: DataTypes.REAL},
    fwd_ps_3_better_site: {type: DataTypes.REAL},
    fwd_ps_3_better_sector: {type: DataTypes.REAL},
    fwd_ps_3_better_industry: {type: DataTypes.REAL},
    fwd_eps_better_site: {type: DataTypes.REAL},
    fwd_eps_better_sector: {type: DataTypes.REAL},
    fwd_eps_better_industry: {type: DataTypes.REAL},
    fwd_pe_ttm_better_site: {type: DataTypes.REAL},
    fwd_pe_ttm_better_sector: {type: DataTypes.REAL},
    fwd_pe_ttm_better_industry: {type: DataTypes.REAL},
    fwd_pe_1_better_site: {type: DataTypes.REAL},
    fwd_pe_1_better_sector: {type: DataTypes.REAL},
    fwd_pe_1_better_industry: {type: DataTypes.REAL},
    fwd_pe_2_better_site: {type: DataTypes.REAL},
    fwd_pe_2_better_sector: {type: DataTypes.REAL},
    fwd_pe_2_better_industry: {type: DataTypes.REAL},
    fwd_pe_3_better_site: {type: DataTypes.REAL},
    fwd_pe_3_better_sector: {type: DataTypes.REAL},
    fwd_pe_3_better_industry: {type: DataTypes.REAL},
    price_fcf_better_site: {type: DataTypes.REAL},
    price_fcf_better_sector: {type: DataTypes.REAL},
    price_fcf_better_industry: {type: DataTypes.REAL},
    peg_better_site: {type: DataTypes.REAL},
    peg_better_sector: {type: DataTypes.REAL},
    peg_better_industry: {type: DataTypes.REAL},
    ev_ebitda_better_site: {type: DataTypes.REAL},
    ev_ebitda_better_sector: {type: DataTypes.REAL},
    ev_ebitda_better_industry: {type: DataTypes.REAL},
    roe_better_site: {type: DataTypes.REAL},
    roe_better_sector: {type: DataTypes.REAL},
    roe_better_industry: {type: DataTypes.REAL},
    roa_better_site: {type: DataTypes.REAL},
    roa_better_sector: {type: DataTypes.REAL},
    roa_better_industry: {type: DataTypes.REAL},
    int_cover_better_site: {type: DataTypes.REAL},
    int_cover_better_sector: {type: DataTypes.REAL},
    int_cover_better_industry: {type: DataTypes.REAL},
    cur_ratio_better_site: {type: DataTypes.REAL},
    cur_ratio_better_sector: {type: DataTypes.REAL},
    cur_ratio_better_industry: {type: DataTypes.REAL},
    debt_eq_better_site: {type: DataTypes.REAL},
    debt_eq_better_sector: {type: DataTypes.REAL},
    debt_eq_better_industry: {type: DataTypes.REAL},
    dividend_better_site: {type: DataTypes.REAL},
    dividend_better_sector: {type: DataTypes.REAL},
    dividend_better_industry: {type: DataTypes.REAL},
    payout_better_site: {type: DataTypes.REAL},
    payout_better_sector: {type: DataTypes.REAL},
    payout_better_industry: {type: DataTypes.REAL},
    rsi_better_site: {type: DataTypes.REAL},
    rsi_better_sector: {type: DataTypes.REAL},
    rsi_better_industry: {type: DataTypes.REAL},
    total_cash_TTM: {type: DataTypes.REAL},
    total_cash_1: {type: DataTypes.REAL},
    total_cash_2: {type: DataTypes.REAL},
    total_cash_3: {type: DataTypes.REAL},
    total_cash_4: {type: DataTypes.REAL},
    fcf_1: {type: DataTypes.REAL},
    fcf_2: {type: DataTypes.REAL},
    fcf_3: {type: DataTypes.REAL},
    fcf_4: {type: DataTypes.REAL},
    Revenue_Quarterly_1: {type: DataTypes.REAL},
    Revenue_Quarterly_2: {type: DataTypes.REAL},
    Revenue_Quarterly_3: {type: DataTypes.REAL},
    Revenue_Quarterly_4: {type: DataTypes.REAL},
    OperatingIncome_Quarterly_1: {type: DataTypes.REAL},
    OperatingIncome_Quarterly_2: {type: DataTypes.REAL},
    OperatingIncome_Quarterly_3: {type: DataTypes.REAL},
    OperatingIncome_Quarterly_4: {type: DataTypes.REAL},
    NetIncome_Quarterly_1: {type: DataTypes.REAL},
    NetIncome_Quarterly_2: {type: DataTypes.REAL},
    NetIncome_Quarterly_3: {type: DataTypes.REAL},
    NetIncome_Quarterly_4: {type: DataTypes.REAL},
    OperatingMargin_Quarterly_1: {type: DataTypes.REAL},
    OperatingMargin_Quarterly_2: {type: DataTypes.REAL},
    OperatingMargin_Quarterly_3: {type: DataTypes.REAL},
    OperatingMargin_Quarterly_4: {type: DataTypes.REAL},
    IncomeMargin_Quarterly_1: {type: DataTypes.REAL},
    IncomeMargin_Quarterly_2: {type: DataTypes.REAL},
    IncomeMargin_Quarterly_3: {type: DataTypes.REAL},
    IncomeMargin_Quarterly_4: {type: DataTypes.REAL},
    total_cash_Quarterly_1: {type: DataTypes.REAL},
    total_cash_Quarterly_2: {type: DataTypes.REAL},
    total_cash_Quarterly_3: {type: DataTypes.REAL},
    total_cash_Quarterly_4: {type: DataTypes.REAL},
    TotalDebt_Quarterly_4: {type: DataTypes.REAL},
    TotalDebt_Quarterly_3: {type: DataTypes.REAL},
    TotalDebt_Quarterly_2: {type: DataTypes.REAL},
    TotalDebt_Quarterly_1: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_Quarterly_4: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_Quarterly_3: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_Quarterly_2: {type: DataTypes.REAL},
    IssuanceOfCapitalStock_Quarterly_1: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_Quarterly_4: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_Quarterly_3: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_Quarterly_2: {type: DataTypes.REAL},
    RepurchaseOfCapitalStock_Quarterly_1: {type: DataTypes.REAL},
    OperatingCashFlow_Quarterly_4: {type: DataTypes.REAL},
    OperatingCashFlow_Quarterly_3: {type: DataTypes.REAL},
    OperatingCashFlow_Quarterly_2: {type: DataTypes.REAL},
    OperatingCashFlow_Quarterly_1: {type: DataTypes.REAL},
    InvestingCashFlow_Quarterly_4: {type: DataTypes.REAL},
    InvestingCashFlow_Quarterly_3: {type: DataTypes.REAL},
    InvestingCashFlow_Quarterly_2: {type: DataTypes.REAL},
    InvestingCashFlow_Quarterly_1: {type: DataTypes.REAL},
    FinancingCashFlow_Quarterly_4: {type: DataTypes.REAL},
    FinancingCashFlow_Quarterly_3: {type: DataTypes.REAL},
    FinancingCashFlow_Quarterly_2: {type: DataTypes.REAL},
    FinancingCashFlow_Quarterly_1: {type: DataTypes.REAL},

    Revenue_Quarterly_JSON: {type: DataTypes.JSON},
    Revenue_Annual_JSON: {type: DataTypes.JSON},
    OperatingIncome_Quarterly_JSON: {type: DataTypes.JSON},
    OperatingIncome_Annual_JSON: {type: DataTypes.JSON},
    NetIncome_Quarterly_JSON: {type: DataTypes.JSON},
    NetIncome_Annual_JSON: {type: DataTypes.JSON},
    OperatingMargin_Quarterly_JSON: {type: DataTypes.JSON},
    OperatingMargin_Annual_JSON: {type: DataTypes.JSON},
    IncomeMargin_Quarterly_JSON: {type: DataTypes.JSON},
    IncomeMargin_Annual_JSON: {type: DataTypes.JSON},
    total_cash_Quarterly_JSON: {type: DataTypes.JSON},
    total_cash_Annual_JSON: {type: DataTypes.JSON},
    TotalDebt_Quarterly_JSON: {type: DataTypes.JSON},
    TotalDebt_Annual_JSON: {type: DataTypes.JSON},
    IssuanceOfCapitalStock_Quarterly_JSON: {type: DataTypes.JSON},
    IssuanceOfCapitalStock_Annual_JSON: {type: DataTypes.JSON},
    RepurchaseOfCapitalStock_Quarterly_JSON: {type: DataTypes.JSON},
    RepurchaseOfCapitalStock_Annual_JSON: {type: DataTypes.JSON},
    OperatingCashFlow_Quarterly_JSON: {type: DataTypes.JSON},
    OperatingCashFlow_Annual_JSON: {type: DataTypes.JSON},
    InvestingCashFlow_Quarterly_JSON: {type: DataTypes.JSON},
    InvestingCashFlow_Annual_JSON: {type: DataTypes.JSON},
    FinancingCashFlow_Quarterly_JSON: {type: DataTypes.JSON},
    FinancingCashFlow_Annual_JSON: {type: DataTypes.JSON},
    descriptionJSON: {type: DataTypes.JSON},
}, {
    timestamps: false
})

const PopularThemeStock = sequelize.define('popular_theme_stock', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    popularThemeId: {type: DataTypes.INTEGER},
    stockId: {type: DataTypes.INTEGER},
}, {
    timestamps: false
})

const Business_cycle_econ_Sector = sequelize.define('business_cycle_econ_sector', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
}, {
    timestamps: false
})

const Business_cycle_econ_Stock = sequelize.define('business_cycle_econ_stock', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
}, {
    timestamps: false
})

const ResumeMacro = sequelize.define('resume', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    indicators: {type: DataTypes.STRING},
    grade: {type: DataTypes.STRING},
    cycle: {type: DataTypes.STRING},
}, {
    timestamps: false
})

const Conclusion = sequelize.define('сonclusion', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    conclusions: {type: DataTypes.STRING},
}, {
    timestamps: false
})

const MacroTable = sequelize.define('macroTable', {
    sectors: {type: DataTypes.STRING, primaryKey:true},
    early: {type: DataTypes.STRING},
    middle: {type: DataTypes.STRING},
    late: {type: DataTypes.STRING},
    recession: {type: DataTypes.STRING},

}, {
    timestamps: false
})

PopularTheme.belongsToMany(Stock, {through: PopularThemeStock})
Stock.belongsTo(PopularTheme, {through: PopularThemeStock})

Sector_menu.hasMany(Industry_menu)
Industry_menu.belongsTo(Sector_menu)

Business_cycle_econ_menu.belongsToMany(Sector_menu, {through: Business_cycle_econ_Sector})
Sector_menu.belongsToMany(Business_cycle_econ_menu, {through: Business_cycle_econ_Sector})

Sector_menu.hasMany(Stock)
Stock.belongsTo(Sector_menu)

Business_cycle_comp_menu.hasMany(Stock)
Stock.belongsTo(Business_cycle_comp_menu)

Business_cycle_econ_menu.belongsToMany(Stock, {through: Business_cycle_econ_Stock})
Stock.belongsToMany(Business_cycle_econ_menu, {through: Business_cycle_econ_Stock})

Industry_menu.hasMany(Stock)
Stock.belongsTo(Industry_menu)

Country_menu.hasMany(Stock)
Stock.belongsTo(Country_menu)


module.exports = {
    Stock,
    StockMicro,
    Sector_menu,
    Industry_menu,
    Country_menu,
    PopularTheme,
    PopularThemeStock,
    Business_cycle_econ_menu,
    Business_cycle_comp_menu,
    Business_cycle_econ_Sector,
    Business_cycle_econ_Stock,
    ResumeMacro,
    Conclusion,
    MacroTable,
}