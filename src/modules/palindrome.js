
function isPalindrome (str) {

    // 1. Split string
    const splitStr = str.split('')

    // 2. Reverse string
    const reverseArray = splitStr.reverse()

    // 3. Join string
    const reverseStr = reverseArray.join('')

    // 4. Compare strings
    return (reverseStr === str) ? true : false

}

isPalindrome('bob')