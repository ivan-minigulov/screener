module.exports = class UserVisit {
    id;
    time;

    constructor(model) {
        this.id = model.id;
        this.time = model.time;
        this.date = model.date;
    }
}