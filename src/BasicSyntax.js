export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const currentValue = romanMap[str[i]];
        const nextValue = romanMap[str[i + 1]];

        if (nextValue && currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}
