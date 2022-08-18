const fs = require('fs')

fs.writeFileSync('notes.txt', 'My nami is Andrew. ')
fs.appendFileSync('notes.txt', ' I live in Philadelphia')
