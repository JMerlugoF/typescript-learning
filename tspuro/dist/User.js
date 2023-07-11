"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get getName() {
        return this.name;
    }
    get getEmail() {
        return this.email;
    }
}
