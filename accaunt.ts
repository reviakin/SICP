import { make_monitor } from './function_monitor';

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
    function password_required(operation: Function) {
        return (_password: string, amount: number) => {
            if (_password !== password) throw 'invalid password';
            return operation(amount);
        };
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

/**
 * @module 3.4.
 * @param {number} balance 
 * @param {string} password 
 * @returns {Function}
 */
function make_account_with_password_with_guard(
    balance: number,
    password: string
) {
    function call_the_cops() {
        console.log('call_the_cops');
    }

    function get_error(message: string) {
        throw message;
    }

    function get_password_error() {
        return get_error('invalid password');
    }

    const PASSWORD_ERROR_MAX_COUNT = 7;

    let monitored_password_error = make_monitor(get_password_error);

    function password_required(operation: Function) {
        return (_password: string, amount: number) => {
            if (_password !== password) {
                if (
                    monitored_password_error('how many?') <
                    PASSWORD_ERROR_MAX_COUNT
                ) {
                    return monitored_password_error();
                } else return call_the_cops();
            }
            monitored_password_error('reset count');
            return operation(amount);
        };
    }

    function deposit(amount: number) {
        return (balance += amount);
    }
    function withdraw(amount: number) {
        if (balance < amount) return get_error('not enough money');
        return (balance -= amount);
    }

    function dispatch(operator: string) {
        if (operator === 'deposit') return password_required(deposit);
        if (operator === 'withdraw') return password_required(withdraw);
        return get_error('unknown operator');
    }
    return dispatch;
}

export {
    make_account,
    make_account_with_password,
    make_account_with_password_with_guard,
};
