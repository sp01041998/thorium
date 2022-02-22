let url = 'https://www.google.com'

function printMyMessage(message) {
    console.log(message)    
}

function welcome() {
    console.log('Welcome to my application. I am Shreyash and a part of FunctionUp Thorium cohort')
}

module.exports.url = url
module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = welcome