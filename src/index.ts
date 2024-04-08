import * as fs from 'node:fs'
import * as path from 'node:path'
import { extractFileExtensions } from './helpers'
import { createDirs } from './helpers'

// Step 1. List the contents of the folder.

const inhalteOrdner = fs.readdirSync('./input')
console.log(inhalteOrdner)

// Step 2. Identufy file types.

const endungen = dateiEndungenErstellen(inhalteOrdner)
console.log(endungen)

// Step 3. Sort file based on conditions.

for ( const endung of endungen) {
    try {
       fs.mkdirsync('./output' + endung)
   } catch (e) {
     console.error("Das Verzeichnis existiert schon.")
   }
}
inhalteOrdner.forEach(file=> {
    const ext = path.extname (file)
    fs.copyFileSync('./input/' + file './output' + ext + '/' + file ) 
})