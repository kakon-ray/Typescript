"use strict";
// Access modifiers
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        set deposit(amount) {
            this._balance = this._balance + amount;
        }
        get blance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        addBonus(bonus) {
            this._balance = this._balance + bonus;
        }
    }
    const tomarAccount = new BankAccount(11, "Kakon", 30000);
    const studentAccount = new StudentAccount(11, "Pranojit", 40000);
    studentAccount.deposit = 10000;
    console.log(studentAccount.blance);
}
