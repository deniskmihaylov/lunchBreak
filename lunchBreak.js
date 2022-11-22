function lunchBreak(input) {

    let movieName = input[0]; 
    let episodeLenght = Number(input[1]); 
    let breakLenght = Number(input[2]); 

    let lunchTime = ((1 / 8) * breakLenght); 
    let breakTime = (1/4) * breakLenght; 

    let timeLeft = breakLenght - lunchTime - breakTime

    if (timeLeft >= episodeLenght) {
        timeToWatch = Math.ceil(timeLeft - episodeLenght); 
        console.log (`You have enough time to watch ${movieName} and left with ${timeToWatch} minutes free time.`)
    } else {
        timeNeeded = Math.ceil(episodeLenght - timeLeft)
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`)
    }
}

lunchBreak (["Teen Wolf",

"48", '60'])