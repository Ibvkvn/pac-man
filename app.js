document.addEventListener("DOMContentLoaded", () => {
    const scoreDisplay = document.getElementById("score")
    const width = 28
    let score = 0
    const grid = document.querySelector(".grid")

    const layout =  [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const squares = []
    //console.log(squares)

    const createBoard = () => {
        for(let i = 0; i < layout.length; i++){
            const square = document.createElement("div")
            square.id = i
            grid.appendChild(square)
            squares.push(square)

            if(layout[i] == 0){
                squares[i].classList.add("pac-dot")
            }
            else if(layout[i] == 1){
                squares[i].classList.add("wall")
            }else if(layout[i] == 2){
                squares[i].classList.add("ghost-lair")
            }
            else if(layout[i] == 3){
                squares[i].classList.add("power-pellet")
            }
        }
    }

    createBoard()


    let pacManCurrentIndex = 490
    squares[pacManCurrentIndex].classList.add("pac-man")


    const movePacMan = (e) => {
        squares[pacManCurrentIndex].classList.remove("pac-man")
        console.log(e.key)
        switch(e.key){
            case "ArrowLeft":
                if(
                    pacManCurrentIndex % width !== 0 && 
                    !squares[pacManCurrentIndex -1].classList.contains("wall") &&
                    !squares[pacManCurrentIndex -1].classList.contains("ghost-lair")

                ){
                pacManCurrentIndex--
                }if(squares[pacManCurrentIndex -1] == squares[363]){
                    pacManCurrentIndex = 391
                }
                break
            case "ArrowRight":
                if(
                    pacManCurrentIndex % width < width - 1 &&
                    !squares[pacManCurrentIndex + 1].classList.contains("wall") &&
                    !squares[pacManCurrentIndex + 1].classList.contains("ghost-lair")
                ){
                    pacManCurrentIndex++
                }
                if(
                    squares[pacManCurrentIndex + 1] == squares[392]
                ){
                    pacManCurrentIndex = 364
                }
                break
            case "ArrowUp":
                if(
                    pacManCurrentIndex - width >= 0 &&
                    !squares[pacManCurrentIndex - width].classList.contains("wall") &&
                    !squares[pacManCurrentIndex - width].classList.contains("ghost-lair")
                ){
                    pacManCurrentIndex -= width
                }
                break
            case "ArrowDown":
                if(
                    pacManCurrentIndex + width < width * width &&
                    !squares[pacManCurrentIndex + width].classList.contains("wall") &&
                    !squares[pacManCurrentIndex + width].classList.contains("ghost-lair")
                ){
                    pacManCurrentIndex += width
                }
                break
        }
        squares[pacManCurrentIndex].classList.add("pac-man")
        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }
    document.addEventListener("keyup", movePacMan)

    const pacDotEaten = () => {
        if(squares[pacManCurrentIndex].classList.contains("pac-dot")){
            score++
            scoreDisplay.innerHTML = score
            squares[pacManCurrentIndex].classList.remove("pac-dot")
        }
    }

    const powerPelletEaten = () => {
        if(squares[pacManCurrentIndex].classList.contains("power-pellet")){
            score += 10
            scoreDisplay.innerHTML = score
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacManCurrentIndex].classList.remove("power-pellet")
        }
    }

    const unScareGhosts = () => {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    class Ghost{
        constructor(className, startIndex, speed){
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost("blinky", 348, 250),
        new Ghost("pinky", 376, 400),
        new Ghost("inky", 351, 300),
        new Ghost("clyde", 379, 500),
    ]

    console.log(ghosts)

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
    })

    // ghosts.forEach(ghost => moveGhost(ghost))

    const moveGhost = (ghost) => {
        const directions = [-1, 1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(() => {
            if(
                !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
                !squares[ghost.currentIndex + direction].classList.contains("wall")
            ){
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            }else direction = directions[Math.floor(Math.random() * directions.length)]

            if(ghost.isScared){
                squares[ghost.currentIndex].classList.add("scared-ghost")
            }

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")){
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.startIndex
                score += 100
                scoreDisplay.innerHTML = score
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            }
            checkForGameOver()
        }, ghost.speed)
    }


    const checkForGameOver = () => {
        if(
            squares[pacManCurrentIndex].classList.contains("ghost") &&
            !squares[pacManCurrentIndex].classList.contains("scared-ghost")
        ){
                ghosts.forEach(ghost => clearInterval(ghost.timerId))
                document.removeEventListener("keyup", movePacMan)
                setTimeout( () => {
                    alert("Game Over")
                }, 500)
        }
            
        
    }

    const checkForWin = () => {
        if(score >= 274){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacMan)
            setTimeout(() => {
                alert("Congratulations you Won")
            }, 500)
        }
    }

    ghosts.forEach(ghost => moveGhost(ghost))
    console.log(layout)

})