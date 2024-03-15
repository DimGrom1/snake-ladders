let dice = document.getElementById("dice")
let diceRoll = 0
let turn = document.getElementById("turn")
let score = 1
let steps = 0
let botSteps = 98
let currentInterval
let player = document.getElementById("player")
let bot = document.getElementById("bot")
let title = document.getElementById("title")
let diceAngle = 0
// функция необходима для движения фишки на sодну клету
function move() {
    if (score == 1) {
        console.log(move);
        if (steps < 10) {
            player.style.left = steps + "0%"
        }
        else {
            // строчка необходима для поднятия фишки на клетку вверх. берется первое число клетки и плюс 0%
            player.style.bottom = Math.floor(steps / 10) + "0%"
            if (Math.floor(steps / 10) % 2 == 0) {
                player.style.left = (steps % 10) + "0%"
                player.style.transform = "scaleX(1)"
            }
            else {
                player.style.left = 9 - (steps % 10) + "0%"
                player.style.transform = "scaleX(-1)"
            }
        }
    }
    else {
        if (botSteps < 10) {
            bot.style.left = botSteps + "0%"
        }
        else {
            // строчка необходима для поднятия фишки на клетку вверх. берется первое число клетки и плюс 0%
            bot.style.bottom = Math.floor(botSteps / 10) + "0%"
            if (Math.floor(botSteps / 10) % 2 == 0) {
                bot.style.left = (botSteps % 10) + "0%"
                bot.style.transform = "scaleX(1)"
            }
            else {
                bot.style.left = 9 - (botSteps % 10) + "0%"
                bot.style.transform = "scaleX(-1)"
            }
        }
    }
}
dice.onclick = function (event) {
    dice.style.pointerEvents = "none"
    // чей ход
    // if (score == 0) {
    //     turn.innerHTML = "Bot"
    //     console.log(123);
    //     score = 1
    // }
    // else {
    //     turn.innerHTML = "Human"
    //     score = 0
    // }
    console.log(dice);
    diceAngle += 1800
    // крутит кубик
    dice.style.transform = "rotate(" + diceAngle + "deg)"
    // функция для кубика
    let diceInterval = setInterval(function () {
        // сколько выпадет
        diceRoll = Math.floor(Math.random() * 6 + 1)
        // diceRoll = 5
        // показывает что выпало
        dice.src = "dice" + diceRoll + ".png"
    }, 200)
    setTimeout(function () {
        clearInterval(diceInterval)

        if (score == 1) {
            // сколько шагов
            let currentSteps = 0
            // сколько раз ходить
            currentInterval = setInterval(function () {
                if (currentSteps == diceRoll) {
                    clearInterval(currentInterval)
                    if (steps == 5) {
                        steps = 26
                    }
                    else if (steps == 8) {
                        steps = 49
                    }
                    else if (steps == 19) {
                        steps = 38
                    }
                    else if (steps == 24) {
                        steps = 56
                    }
                    else if (steps == 52) {
                        steps = 71
                    }
                    else if (steps == 53) {
                        steps = 84
                    }
                    else if (steps == 60) {
                        steps = 81
                    }
                    else if (steps == 95) {
                        steps = 81
                    }
                    else if (steps == 94) {
                        steps = 72
                    }
                    else if (steps == 77) {
                        steps = 41
                    }
                    else if (steps == 69) {
                        steps = 47
                    }
                    else if (steps == 54) {
                        steps = 33
                    }
                    else if (steps == 42) {
                        steps = 15
                    }
                    move()
                    score = 0
                    dice.style.pointerEvents = "auto"
                }
                else {
                    // ходит на одну клетку
                    steps = steps + 1
                    if (steps > 98) {
                        steps = 99
                        title.innerHTML = "human won"
                        dice.style.pointerEvents = "none"
                    }
                    move()

                }

                currentSteps++
            }, 400)

        }
        else {
            // сколько шагов
            let currentSteps = 0
            // сколько раз ходить
            currentInterval = setInterval(function () {
                if (currentSteps == diceRoll) {
                    clearInterval(currentInterval)
                    if (botSteps == 5) {
                        botSteps = 26
                    }
                    else if (botSteps == 8) {
                        botSteps = 49
                    }
                    else if (botSteps == 19) {
                        botSteps = 38
                    }
                    else if (botSteps == 24) {
                        botSteps = 56
                    }
                    else if (botSteps == 52) {
                        botSteps = 71
                    }
                    else if (botSteps == 53) {
                        botSteps = 84
                    }
                    else if (botSteps == 60) {
                        botSteps = 81
                    }
                    else if (botSteps == 95) {
                        botSteps = 81
                    }
                    else if (botSteps == 94) {
                        botSteps = 72
                    }
                    else if (botSteps == 77) {
                        botSteps = 41
                    }
                    else if (botSteps == 69) {
                        botSteps = 47
                    }
                    else if (botSteps == 54) {
                        botSteps = 33
                    }
                    else if (botSteps == 42) {
                        botSteps = 15
                    }
                    move()
                    score = 1
                    dice.style.pointerEvents = "auto"
                }
                else {
                    // ходит на одну клетку
                    botSteps = botSteps + 1
                    if (botSteps > 98) {
                        botSteps = 99
                        title.innerHTML = "zombie won"
                        dice.style.pointerEvents = "none"
                        console.log(title);
                    }
                    move()
                }

                currentSteps++
            }, 400)
        }

        console.log(diceRoll);
    }, 2000)
}