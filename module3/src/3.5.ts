// Access modifiers

{
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount
        }

        public getBalance() {
            return this._balance
        }
    }

    class StudentAccount extends BankAccount {

        constructor(id: number, name: string, balance: number) {
            super(id,name,balance)
        }

        addBonus(bonus:number) {
            this._balance = this._balance + bonus
        }



    }

    const tomarAccount = new BankAccount(11, "Kakon", 30000);
    const studentAccount = new StudentAccount(11, "Pranojit", 40000);

    studentAccount.addBonus(1000);
    studentAccount.addDeposit(10000);

    console.log(studentAccount.getBalance())

    



}