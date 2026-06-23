function balloonCounts(text) {
    const pattern = /[balloon]/g
    const cleanText = text.toLowerCase().match(pattern)
    const count = {b: 0, a: 0, l: 0, o: 0, n: 0}
    for(char in cleanText){
        if(count[char] == b) {
            count[b] = 1
        }
    }
    console.log(cleanText)
    
}

balloonCounts("what balloon")