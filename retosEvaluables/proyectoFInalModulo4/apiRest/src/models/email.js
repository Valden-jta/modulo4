class Email {
    from;
    to;
    subject;
    message;

    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }
}

module.exports = { Email };