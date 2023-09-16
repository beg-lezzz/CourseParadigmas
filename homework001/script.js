const arr1 = [1, 15, 0, -3, 17, 0, 1, 3]
const arr2 = [1, 15, 0, -3, 17, 0, 1, 3]

// Решение в императивном стиле
function sortListImperative(numbers) { //сортировка пузырьком
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[j] > numbers[j - 1]) {
                let tmp = numbers[j -1]
                numbers[j - 1] = numbers[j]
                numbers[j] = tmp
            }
        }
    }
    return numbers
}

// Решение в декларативном стиле
function sortListDeclarative(numbers) {
    numbers.sort((a, b) => b - a)
    return numbers
}

console.log(`Результат сортировки в императивном стиле:\n ${arr1}\n ${sortListImperative(arr1)}`)
console.log(`Результат сортировки в декларативном стиле:\n ${arr2}\n ${sortListImperative(arr2)}`)
