const userService = require('../service/user-service');
const tokenService = require('../service/token-service')
const {validationResult} = require('express-validator');
const ApiError = require('../error/ApiError');
const UserDto = require('../dtos/user-dto');
const UserVisit = require('../dtos/user-visit');
const {User, AccessToken, Visit} = require('../models/modelsUsers');
const subsService = require('../service/subs-service');
const mailService = require('../service/mail-service');
const uuid = require('uuid');
const bcrypt = require('bcrypt');


class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации: некорректный email', errors.array()))
            }
            const {email, password} = req.body;
            const tokens = await userService.registration(email, password);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const tokens = await userService.login(email, password);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json({token});
        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async checkAuth(req, res, next) {
        try {
            const accessToken = req.headers?.authorization?.split(' ')[1] // Bearer accessToken
            if (!accessToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateAccessToken(accessToken)
            if (userData) {
                // return res.json({accessToken})
                const user = await User.findOne({where: {email: userData.email}});
                const userUpdate = await subsService.checkSubs(user)
                const userDto = new UserDto(userUpdate);
                const tokens = tokenService.generateTokens({...userDto});
                await tokenService.saveToken(userDto.id, tokens.refreshToken);
                res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
                return res.json(tokens);
            }
            const {refreshToken} = req.cookies;
            const tokensNew = await userService.refresh(refreshToken);
            res.cookie('refreshToken', tokensNew.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokensNew);
        } catch(e) {
            next(e)
        }
    }

    async checkVisit(req, res, next) {
        try {
            const accessToken = req.headers.authorization.split(' ')[1] // Bearer accessToken
            if (accessToken) {
                const userData = tokenService.validateAccessToken(accessToken)
                if (userData) {
                    return res.json({accessToken})
                } else {
                    await AccessToken.destroy({where: {accessToken}})
                    // remove acessToken from DB
                }
            }
            const time = Date.now()
            const dateToday = new Date()
            const dateTodayString = dateToday.toLocaleDateString()
            let visit = await Visit.findOne({where: {date: dateTodayString}})
            if (visit) {
                visit.count += 1
                await visit.save()
            } else {
                visit = await Visit.create({date: dateTodayString, count: 1})
            }
            const userVisit = new UserVisit({id: visit.count, time: time, date: dateToday});
            const tokens = tokenService.generateAccessTokens({...userVisit}, dateToday.getHours());
            await AccessToken.create({accessToken: tokens.accessToken, date: dateToday})
            
            return res.json({accessToken: tokens.accessToken})
        } catch(e) {
            next(e)
        }
    }

    async subsMonth(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const user = await User.findOne({where: {email: userData.email}});
            const email = userData.email
            const userUpdate = await subsService.subsMonth(user, email)
            const userDto = new UserDto(userUpdate)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }
    async subsThreeMonth(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const user = await User.findOne({where: {email: userData.email}});
            const email = userData.email
            const userUpdate = await subsService.subsThreeMonth(user, email)
            const userDto = new UserDto(userUpdate)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }
    async subsHalfYear(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const user = await User.findOne({where: {email: userData.email}});
            const email = userData.email
            const userUpdate = await subsService.subsHalfYear(user, email)
            const userDto = new UserDto(userUpdate)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }
    async subsYear(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const user = await User.findOne({where: {email: userData.email}});
            const email = userData.email
            const userUpdate = await subsService.subsYear(user, email)
            const userDto = new UserDto(userUpdate)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }

    async survey(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const {selectСurrency} = req.body
            const user = await User.findOne({where: {email: userData.email}});
            const email = userData.email
            
            const userUpdate = await userService.survey(user, email, selectСurrency)
            const userDto = new UserDto(userUpdate)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }

    async accountInfoUpdate(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            if (!refreshToken) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const userData = tokenService.validateRefreshToken(refreshToken);
            const tokenFromDb = await tokenService.findToken(refreshToken);
            if (!userData || !tokenFromDb) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const user = await User.findOne({where: {email: userData.email}});
            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({...userDto});
            await tokenService.saveToken(userDto.id, tokens.refreshToken);
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(tokens)
        } catch (e) {
            next(e);
        }
    }

    async submitEmailInstruction(req, res, next) {
        try {
            const {email} = req.body;
            const user = await User.findOne({where: {email}})
            if (!user) {
                throw ApiError.BadRequest('Пользователь с таким email не найден')
            }
            const link = uuid.v4();
            mailService.sendLinkUpdatePassword(email, `${process.env.CLIENT_URL}/updatepassword/${link}`);
            user.linkUpdatePassword = link
            await user.save()
            return res.json({resolution: true})
        } catch (e) {
            next(e);
        }
    }


    async updatePassword(req, res, next) {
        try {
            const {password, link} = req.body
            const user = await User.findOne({where: {linkUpdatePassword: link}})
            if (!user) {
                throw ApiError.BadRequest('Неккоректная ссылка восстановления пароля')
            }
            if (password.length === 0) {
                throw ApiError.BadRequest('Введите пароль')
            }
            if (password.length < 2) {
                throw ApiError.BadRequest('Слишком короткий пароль')
            }
            if (password.length > 50) {
                throw ApiError.BadRequest('Слишком длинный пароль')
            }
            user.linkUpdatePassword = null;
            const hashPassword = await bcrypt.hash(password, 5);
            user.password = hashPassword
            await user.save();
            return res.json({resolution: true})
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new UserController();