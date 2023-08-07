const {User, Survey} = require('../models/modelsUsers')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../error/ApiError');
const subsService = require('./subs-service');

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
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
        const hashPassword = await bcrypt.hash(password, 5);
        const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

        const user = await User.create({email, password: hashPassword, activationLink})
        mailService.sendActivationMail(email, `${process.env.URL_ACTIVATE_EMAIL}/${activationLink}`);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens}
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}})
        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }

    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userUpdate = await subsService.checkSubs(user)
        const userDto = new UserDto(userUpdate);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return {...tokens}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findOne({where: {email: userData.email}});
        const userUpdate = await subsService.checkSubs(user)
        const userDto = new UserDto(userUpdate);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens}
    }

    async survey(user, email, selectСurrency) {
        await Survey.create({email, selectСurrency})
        user.survey = true
        await user.save()
        return user
    }

}

module.exports = new UserService();