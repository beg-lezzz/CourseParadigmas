function sumOfProducts(x, y, z) {
    // если не передали третий аргумент (степень), то присваиваем ей значение единицы
    if (!z) {
        z = 1
    }
    // среднее в массиве x
    const meanX = x.reduce((a, b) => (a + b)) / x.length
    // среднее в массиве y
    const meanY = y.reduce((a, b) => (a + b)) / y.length
    // накапливаем сумму произведений для числителя или знаменателя
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum = sum + (x[i] - meanX) ** z * (y[i] - meanY) ** z
    }
    return sum
}

function distributionOfPearson(x, y) {
    // проверям на соответствие условию - массивы имеют одинаковую длину
    if (x.length !== y.length) {
        // если не выполняется условие, то выбрасываем ошибку
        console.log("Массивы должны иметь одинаковую длину")
        return -1
    } else {
        // если выполняется условие, то считаем распределение и выдаем результат
        const distribution = sumOfProducts(x, y) / Math.sqrt(sumOfProducts(x, y, 2))
        console.log(distribution)
        return distribution
    }
}

x = [1, 2, 3, 4, 5]
y = [6, 7, 8, 9, 10]

distributionOfPearson(x, y);
