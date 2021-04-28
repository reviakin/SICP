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
