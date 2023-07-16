function unroll(squareArray) {

        const finalArr = []

        while (squareArray.length > 0) {

            // Push top row
            squareArray[0].map((val) => {
                finalArr.push(val)
            })
            squareArray.shift()
    
            // Push right side
            for (let i = 0; i < squareArray.length - 1; i++) {
                finalArr.push(squareArray[i][squareArray.length])
                squareArray[i].pop()
            }
    
            // Push bottom row
            if (squareArray.length >= 1) {
                squareArray[squareArray.length - 1].reverse().map((val) => {
                    finalArr.push(val)
                })
                squareArray.pop()
            } 
    
            // Push left side
            for (let i = squareArray.length - 1; i >= 0; i--) {
                finalArr.push(squareArray[i][0])
                squareArray[i].shift()
            }
        }

        return finalArr
}

module.exports = unroll;
