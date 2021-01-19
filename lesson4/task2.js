<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<script>
    let number = [];
    let attempts = 0;

    generateNumber();
    guessNumber();

    function generateNumber(){
        number = [];
        let min = 0;
        let max = 9;

        for(let i = 0; i < 4; i++){
            let part = Math.round(min + Math.random() * (max - min));

            if(i === 0){
                number[i] = part;
            }
            else{
                while(number.indexOf(part) !== -1){
                    part = Math.round(min + Math.random() * (max - min));
                }
                number[i] = part;
            }
        }
    }

    function guessNumber(){
        let result = prompt("Введите число (-1 - закончить игру)", 0);
        let gameIsRunning = true;

        let stroke = [];
        stroke.push(result);

        while(gameIsRunning){

            if(parseInt(result) === -1){
                gameIsRunning = false;
            }
            else if(parseInt(result) === 0 || isNaN(parseInt(result))){
                alert("Вы не ввели число");
                result = prompt("Введите число (-1 - закончить игру)", 0);
            }
            else{
                let answer = checkNumber(result);

                if(answer[0]){

                    let history = prompt ("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts +
                        ". Введите номер хода чтобы узнать его результат (0 вывести всю историю)");

                    if (history > 0){
                        history -= 1;
                        alert("Результат хода: " + stroke[history]);
                    }

                    else {
                        a = [];
                        b = 0;
                        for(i = 1;i < stroke.length;i++){
                            b++;
                            c = "Ход " + i + " Результат: " + stroke[b]+'\r\n';
                            a.push(c);
                        }
                        alert(a.join(''));
                    }

                    gameIsRunning = false;
                }
                else{

                    result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
                    stroke.push(result);
                    console.log(stroke);
                }
            }
        }
    }

    function checkNumber(myresult){
        attempts++;
        let answer = [false, 0, 0];
        console.log(myresult);
        console.log(number);
        let ranks = myresult.split("");

        for(let i = 0; i < ranks.length; i++){
            if(parseInt(ranks[i]) === number[i]){
                answer[1]++;
            }
            else if(number.indexOf(parseInt(ranks[i])) !== -1){
                answer[2]++;
            }
        }

        if(answer[1] === 4){
            answer[0] = true;
        }

        return answer;
    }
</script>

</body>
</html>