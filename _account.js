class Account {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) throw 'not enough balance';
        return (this.balance -= amount);
    }

    dispatch(procedure) {
        if (procedure === 'deposit') return this.deposit.bind(this);
        if (procedure === 'withdraw') return this.withdraw.bind(this);
        throw 'unknown procedure';
    }
}

class Password {
    constructor(value) {
        this.value = value;
    }

    addPassword(procedure) {
        return (password, ...arg) => {
            if (password !== this.value) throw 'invalid password';
            return procedure(...arg);
        };
    }
}

class Monitor {
    constructor(procedure) {
        this.procedure = procedure;
        this.amount = 0;
    }

    reset() {
        return (this.amount = 0);
    }
    how_many() {
        return this.amount;
    }
    call_it(...arg) {
        return this.procedure(...arg);
    }

    dispatch(monitor_procedure) {
        if (monitor_procedure === 'reset') return this.reset();
        if (monitor_procedure === 'how_many') return this.how_many();
        if (monitor_procedure === 'call_it') return this.call_it;

        throw 'unknown action';
    }
}

class AccountWithPassword extends Account {
    constructor(password, balance) {
        super(balance);
        this.password = new Password(password);
    }

    dispatch(procedure) {
        return this.password.addPassword(super.dispatch(procedure));
    }
}

/**
 * @TODO
 */
class AccountWithPasswordWithGuard {}
