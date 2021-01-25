<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ДЗ3</title>
</head>
<body>
    <script>
        function getNumber(min, max){
            let number = parseInt(Math.random()*(max - min) + min);
            if (number === -0) number = 0;
            return number;
        }

        // 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

        console.log('======== 1 задание ========');
        let nums = 0;
        while (nums <= 100) {
            let check = true;
            for (let i = 2; i < nums; i++){
                if (nums%i === 0) {
                    check = false;
                    break;
                }
            }
            if (check) console.log(nums);
            nums++;
        }

        // ------------------------------------------------------------------------------------------------------------

        // 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

        console.log('======== 2 задание ========');
        let basket = [
            {
                product: "pen",
                price: getNumber(50, 100)
            },
            {
                product: "pencil",
                price: getNumber(50, 100)
            },
            {
                product: "file",
                price: getNumber(50, 100)
            },
            {
                product: "paper",
                price: getNumber(50, 100)
            }
        ];
        let basketPrice = 0;
        for (let prod of basket){
            basketPrice += prod.price;
            console.log("Товар " + prod.product + " стоит: " + prod.price);
        }

        console.log("Стоимость корзины: " + basketPrice + " у.е.");

        // ------------------------------------------------------------------------------------------------------------

        // 3. Товары в корзине хранятся в массиве. Задачи:
        // a) Организовать такой массив для хранения товаров в корзине;
        // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

        console.log('======== 3 задание ========');
        function countBasketPrice(basket) {
            let funBasketPrice = 0;
            for (let prod of basket){
                funBasketPrice += prod.price;
            }
            return funBasketPrice;
        }

        console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");

        // ------------------------------------------------------------------------------------------------------------

        // 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
        //     for(…){// здесь пусто}

        console.log('======== 4 задание ========');
        for (let i = 0; i < 10; console.log(i++)) {}

        // ------------------------------------------------------------------------------------------------------------

        // 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
        // x
        // xx
        // xxx
        // xxxx
        // xxxxx

        console.log('======== 5 задание ========');
        let row = 'x';
        for (let i = 0; i < 20; i++){
            console.log(row);
            row += 'x';
        }

    </script>
</body>
</html>