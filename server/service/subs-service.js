const {User, Pay} = require('../models/modelsUsers')
const tokenService = require('./token-service');
const ApiError = require('../error/ApiError');
const UserDto = require('../dtos/user-dto');

class SubsService {
    async checkSubs(user) {
        const dateToday = new Date()
        if ((user.subsDate < dateToday) || (!user.subsDate)) {
            user.subsDate = null
            user.subs = false
        } else {
            user.subs = true
        }
        await user.save()
        return user
    }

    async subsMonth(user, email) {
        const dateToday = new Date()
        await Pay.create({email, date: dateToday, amountOfDays: 30})
        if ((user.subsDate < dateToday) || (!user.subsDate)) {
            user.subsDate = new Date(dateToday.getTime() + 30*24*60*60*1000)
            user.subs = true      
        } else {
            user.subsDate = new Date(user.subsDate.getTime() + 30*24*60*60*1000)
            user.subs = true
        }
        await user.save()
        return user
    }
    async subsThreeMonth(user, email) {
        const dateToday = new Date()
        await Pay.create({email, date: dateToday, amountOfDays: 90})
        if ((user.subsDate < dateToday) || (!user.subsDate)) {
            user.subsDate = new Date(dateToday.getTime() + 90*24*60*60*1000)
            user.subs = true
        } else {
            user.subsDate = new Date(user.subsDate.getTime() + 90*24*60*60*1000)
            user.subs = true
        }
        await user.save()
        return user
    }
    async subsHalfYear(user, email) {
        const dateToday = new Date()
        await Pay.create({email, date: dateToday, amountOfDays: 180})
        if ((user.subsDate < dateToday) || (!user.subsDate)) {
            user.subsDate = new Date(dateToday.getTime() + 180*24*60*60*1000)
            user.subs = true
        } else {
            user.subsDate = new Date(user.subsDate.getTime() + 180*24*60*60*1000)
            user.subs = true
        }
        await user.save()
        return user
    }
    async subsYear(user, email) {
        const dateToday = new Date()
        await Pay.create({email, date: dateToday, amountOfDays: 365})
        if ((user.subsDate < dateToday) || (!user.subsDate)) {
            user.subsDate = new Date(dateToday.getTime() + 365*24*60*60*1000)
            user.subs = true
        } else {
            user.subsDate = new Date(user.subsDate.getTime() + 365*24*60*60*1000)
            user.subs = true
        }
        await user.save()
        return user
    }

}

module.exports = new SubsService();