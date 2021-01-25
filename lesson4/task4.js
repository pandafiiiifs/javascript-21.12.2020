<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <script>
        'use strict'
        const Basket = {
            goods: [
                {
                    id_product: 123,
                    product_name: "Сноуборд",
                    price: 30000,
                    quantity: 2
                }, {
                    id_product: 456,
                    product_name: "Горные Лыжи",
                    price: 50000,
                    quantity: 6
                }, {
                    id_product: 789,
                    product_name: "Велосипед",
                    price: 20000,
                    quantity: 3
                }
                , {
                    id_product: 321,
                    product_name: "Беговые лыжи",
                    price: 10000,
                    quantity: 4
                }
            ],

            countBasketPrice() {
                return this.goods.reduce((totalPrice, currtItem) => totalPrice += currtItem.price * currtItem.quantity, 0);
            }
        };


        console.log(`Итоговвая стоимость корзины = ${Basket.countBasketPrice()}`);

    </script>


</body>
</html>