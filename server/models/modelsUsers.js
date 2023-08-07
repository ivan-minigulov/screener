const sequelize = require('../dbUsers')
const {DataTypes} = require('sequelize')
const { noData } = require('pg-protocol/dist/messages')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true, allowNull:false},
    password: {type: DataTypes.STRING(length = 2000), allowNull:false},
    isActivated: {type:DataTypes.BOOLEAN, defaultValue:false},
    activationLink: {type:DataTypes.STRING(length = 2000),},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    subsDate: {type: DataTypes.DATE},
    subs: {type: DataTypes.BOOLEAN, defaultValue:false, allowNull:false},
    survey: {type: DataTypes.BOOLEAN, defaultValue:false},
    linkUpdatePassword: {type:DataTypes.STRING(length = 2000),},
}, {
    timestamps: false
})

const Survey = sequelize.define('survey', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    selectСurrency: {type: DataTypes.STRING},
}, {
    timestamps: false
})

const Pay = sequelize.define('pay', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
    amountOfDays: {type: DataTypes.STRING},
}, {
    timestamps: false
})

const Token = sequelize.define('token', {
    userId: {type: DataTypes.INTEGER, references: {model: User, key: 'id'}},
    refreshToken: {type: DataTypes.STRING(length = 2000), allowNull:false},
}, {
    timestamps: false
})

const AccessToken = sequelize.define('acesstoken', {
    userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    accessToken: {type: DataTypes.STRING(length = 2000), allowNull:false},
    date: {type: DataTypes.DATE},
}, {
    timestamps: false
})

const Visit = sequelize.define('visit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING},
    count: {type: DataTypes.INTEGER},
}, {
    timestamps: false
})



module.exports = {
    User,
    Survey,
    Pay,
    Token,
    AccessToken,
    Visit,
}