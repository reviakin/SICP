function make_account(balance: number) {
    function deposit(amount: number) {
        return (balance += amount);
    }
    function withdraw(amount: number) {
        if (balance < amount) throw 'not enough money';
        return (balance -= amount);
    }

    function dispatch(operator: string) {
        if (operator === 'deposit') return deposit;
        if (operator === 'withdraw') return withdraw;
        throw 'unknown operator';
    }
    return dispatch;
}

/**
 * @module 3.3.
 * @param {number} balance 
 * @returns {Function}
 */
function make_account_with_password(balance: number, password: string) {

    function password_required(operation:Function){
        return (_password:string, amount:number) => {
            if (_password !== password) throw 'invalid password'
            return operation(amount)
        }
    }
    
    function deposit(amount: number) {
        return (balance += amount);
    }
    function withdraw(amount: number) {
        if (balance < amount) throw 'not enough money';
        return (balance -= amount);
    }

    function dispatch(operator: string) {
        if (operator === 'deposit') return password_required(deposit);
        if (operator === 'withdraw') return password_required(withdraw);
        throw 'unknown operator';
    }
    return dispatch;
}