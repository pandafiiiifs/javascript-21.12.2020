//Задать температуру в градусах по Цельсию.
  //  Вывести в alert соответствующую температуру в градусах по Фаренгейту.
  //  Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.


let t_grad = prompt ('Введите температуру в градусах Цельсия', '');
t_far = t_grad * 1.8 + 32;
alert (t_far);