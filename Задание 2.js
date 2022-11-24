function primeNumb(num) {
    if (num > 1 && num < 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    } else {
        return "Данные неверны";
    }
}

console.log(primeNumb(3))