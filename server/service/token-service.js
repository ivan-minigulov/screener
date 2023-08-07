const jwt = require('jsonwebtoken');
const {Token} = require('../models/modelsUsers');

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '24h'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '24h'})
        return {
            accessToken,
            refreshToken
        }
    }

    generateAccessTokens(payload, time) {
        const hours = 24 - time
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: `${hours}h`})
        return {
            accessToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            tokenData.save()
            return tokenData
        }
        const token = await Token.create({userId, refreshToken})
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where: {refreshToken}})
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        return tokenData;
    }
}

module.exports = new TokenService();