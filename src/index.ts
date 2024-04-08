import * as fs from 'node:fs'
import * as path from 'node:path'
import { extractFileExtensions } from './helpers'
import { createDirs } from './helpers'

// Step 1. List the contents of the folder.

const dirContent = fs.readdirSync('./input')
console.log(dirContent)

// Step 2. Identufy file types.

const extensions = extractFileExtensions(dirContent)
console.log(extensions)

const extensionsArray = Array.from(extensions)
console.log(extensionsArray)
// Step 3. Sort files based on conditions.

createDirs('./output', extensionsArray)

//fs.copyFileSync('./input/', './output/.pdf/document.pdf')

for (const file of dirContent) {
    const ext = path.extname(file)
    try {
        fs.copyFileSync('./input/' + file, './output/' + ext + '/' + file)
    } catch (e) {
        console.error(e)
    }
}