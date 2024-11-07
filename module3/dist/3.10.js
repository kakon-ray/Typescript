"use strict";
// Access modifiers
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
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
    studentAccount.addBonus(1000);
    studentAccount.addDeposit(10000);
    console.log(studentAccount.getBalance());
}
