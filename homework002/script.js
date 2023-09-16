// выбрано сочетание парадигм - структурной и процедурной, т.к. мы создаем функцию (для дальнейшего переиспользования),
// в которой используем цикл (для обработки и получения результата)

const number = 9

function multiplicationTable (number) {
    let stringArr = []                                                  // создаем временный массив для вывода строки
    for (let i = 0; i < number + 1; i++) {
        i === 0 ? stringArr.push('') : stringArr.push(i)                      // для пропуска первой строки первого столбца при выводе
        for (let j = 0; j < number; j++) {
            i === 0 ? stringArr.push(j + 1) : stringArr.push(i * (j + 1))     // заполняем строку значениями
        }
        console.log(stringArr.join('\t'))                                     // выводим с табуляцией для ровной матрицы
        stringArr.length = 0                                                  // обнуляем временный массив для вывода строки
    }
}

multiplicationTable(number)
