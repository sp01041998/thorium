const express = require('express');
const obj = require("../logger/loggers.js");
const helper = require("../util/helpers.js");
const formatter = require('../Validator/formater');
const router = express.Router();
const lodash=require('lodash')



router.get('/test-me', function (req, res) {
    let names = ['Hariom', 'Arpit', 'Akash', 'Sabiha']
    //Module 1 members
    obj.printMessage('thorium')
    console.log(obj.url)
    obj.printWelcomeMessage()
    res.send("hi my name is shreyash")

    helper.printCurrentDate()
    helper.printCurrentMonth()
    helper.printBatchInfo()

    formatter.trim()
    formatter.changeToUpperCase()
    formatter.changetoLowerCase()


    // lodash function solution

    let monthName = ['Jan', 'Feb', "March", "april", 'may', 'June', 'july', 'aug', 'sep', 'Oct', "nov", 'Dec'];
    let monthSubArrays = lodash.chunk(monthName, 3)
    console.log('chunk of months :', monthSubArrays)

    const first10OddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const last9Elelment = lodash.tail(first10OddNumber)
    console.log("lst 9 odd numbers: ", last9Elelment)


    const arr1 = [1, 3, 5, 8, 4, 190]
    const arr2 = [3, 9, 11, 5, 4]
    const arr3 = [14, 2, 4, 9]
    const arr4 = [5, 8]
    const arr5 = [1]

    console.log('merged all arrays in a set :', lodash.union(arr1, arr2, arr3, arr4, arr5))

    const mv1 = ['horror', 'conjuring']
    const mv2 = ['drama', 'the shawshank redemption']
    const mv3 = ['thriller', 'departed']
    const mv4 = ['fantasy', 'avengers']

    const mvObject = lodash.fromPairs([mv1, mv2, mv3, mv4])
    console.log('Movies object :', mvObject)
    // res.send('my first ever api of the week')
})

module.exports = router;