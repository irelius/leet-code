// // Solution 1: Brute force
// const addLetter = (num, letter) => {
//     let output = ""
//     for (let i = 0; i < num; i++) {
//         output += letter
//     }
//     return output
// }

// export const intToRoman = function (num) {
//     let output = ""

//     while (num > 0) {
//         // m: 1000
//         if (num >= 1000) {
//             let dividend = Math.floor(num / 1000)
//             output += addLetter(dividend, "M")
//             num -= dividend * 1000
//         }
//         // cm: 900
//         else if (num >= 900) {
//             let dividend = Math.floor(num / 900)
//             output += addLetter(dividend, "CM")
//             num -= dividend * 900
//         }
//         // d: 500
//         else if (num >= 500) {
//             let dividend = Math.floor(num / 500)
//             output += addLetter(dividend, "D")
//             num -= dividend * 500
//         }
//         // cd: 400
//         else if (num >= 400) {
//             let dividend = Math.floor(num / 400)
//             output += addLetter(dividend, "CD")
//             num -= dividend * 400
//         }
//         // c: 100
//         else if (num >= 100) {
//             let dividend = Math.floor(num / 100)
//             output += addLetter(dividend, "C")
//             num -= dividend * 100
//         }
//         // xc: 90
//         else if (num >= 90) {
//             let dividend = Math.floor(num / 90)
//             output += addLetter(dividend, "XC")
//             num -= dividend * 90
//         }
//         // l: 50
//         else if (num >= 50) {
//             let dividend = Math.floor(num / 50)
//             output += addLetter(dividend, "L")
//             num -= dividend * 50
//         }
//         // xl: 40
//         else if (num >= 40) {
//             let dividend = Math.floor(num / 40)
//             output += addLetter(dividend, "XL")
//             num -= dividend * 40
//         }
//         // x: 10
//         else if (num >= 10) {
//             let dividend = Math.floor(num / 10)
//             output += addLetter(dividend, "X")
//             num -= dividend * 10
//         }
//         // ix: 9
//         else if (num >= 9) {
//             let dividend = Math.floor(num / 9)
//             output += addLetter(dividend, "IX")
//             num -= dividend * 9
//         }
//         // v: 5
//         else if (num >= 5) {
//             let dividend = Math.floor(num / 5)
//             output += addLetter(dividend, "V")
//             num -= dividend * 5
//         }
//         // iv: 4
//         else if (num >= 4) {
//             let dividend = Math.floor(num / 4)
//             output += addLetter(dividend, "IV")
//             num -= dividend * 4
//         }
//         // i: 1
//         else {
//             let dividend = Math.floor(num / 1)
//             output += addLetter(dividend, "I")
//             num -= dividend * 1
//         }
//     }

//     return output
// };


// Solution 2
export const intToRoman = (num) => {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let output = ""
    for (let i = 0; num > 0; i++) {
        while (num >= val[i]) {
            output += rom[i]
            num -= val[i]
        }
        console.log('booba', num)
    }

    return output
}


console.log(intToRoman(3749))
