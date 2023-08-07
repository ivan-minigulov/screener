// const jwt = require('jsonwebtoken');
// const { validateAccessToken } = require('../service/token-service');

// module.exports = function (req, res, next) {
//     if (req.method === "OPTIONS") {
//         next()
//     }
//     try {
//         console.log(req.cookies.refreshToken)
//         const accessToken = req.headers.authorization.split(' ')[1] // Bearer accessToken
//         if (!accessToken) {
//             return res.status(401).json({message: "Не авторизован"})
//         }
//         let decoded
//         decoded = validateAccessToken(accessToken)
//         if (!decoded) {
//             decoded = jwt.verify(accessToken, process.env.JWT_REFRESH_SECRET)
//         }
//         req.user = decoded
//         next()
//     } catch (e) {
//         res.status(401).json({message: "Не авторизован"})
//     }
// };