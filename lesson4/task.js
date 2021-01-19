<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--Задача 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
              на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
              для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
              Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
              пустой объект.-->

    <script>
        console.log('Ответ задача 1');

        var max = 999;
        var digit = {
          number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
          units: 0,
          tens: 0,
          hundreds: 0,
        };
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= 999){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        }else {
            digit.number = 0;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
        console.log(digit);

    </script>
</body>
</html>