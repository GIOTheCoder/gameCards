/*

Collect info
store info
put the stored info in arrays
build cards


*/

const submitBtn = document.getElementById('submitBtn')
let games = []

console.log(submitBtn)

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    // collect info
    const gameName = document.getElementById('gameName').value
    const category = document.querySelector('select[name=category').value
    const gameImage = document.getElementById('gameImage').value
    
    // store info in an object
    
    let data ={
        gameName,
        category,
        gameImage
    }

    //put stored info in arrays

    games = [...games, data]
    console.log(gameArr)

})

// Spread operators

// coders = ['coder1', 'coder2', 'coder3', 'coder4']

// let newCoders = [...coders, 'coder5']
// console.log(coders)
// console.log(newCoders)