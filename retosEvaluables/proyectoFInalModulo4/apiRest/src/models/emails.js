
const { email } = require('./email');

class Emails {
     
    constructor() {
        this.emails = [];
    }

    addEmail(email){
        return this.emails.push(email);
    }

    getList(){
        return this.emails
    }
}

module.exports = { Emails };