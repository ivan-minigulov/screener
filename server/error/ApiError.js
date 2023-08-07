class ApiError extends Error {
    status;
    message;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.message = message;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message) {
        return new ApiError(404, message)
    }

    static Internal(message) {
        return new ApiError(500, message)
    }
    
    static Farbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError