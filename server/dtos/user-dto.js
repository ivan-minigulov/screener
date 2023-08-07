module.exports = class UserDto {
    email;
    id;
    isActivated;
    role;
    subsDate;
    subs;
    survey;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.role = model.role;
        this.subsDate = model.subsDate;
        this.subs = model.subs;
        this.survey = model.survey;
    }
}