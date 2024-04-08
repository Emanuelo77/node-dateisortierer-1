import * as path from 'node:path'
import 

export function dateiEndungenErstellen(inhalteOrnder: string[]) {

  const endungen = new Set()

  for (let i = 0; i < inhalteOrnder.length; i = i + 1) {
    const dateiName = inhalteOrnder[i] // wir laden hier den aktuellen Dateinamen in die Variable
    const dateiEndung = path.extname(dateiName) // wir finden die Dateieindung der eingegebenen Variable heraus
    console.log(dateiEndung)
    endungen.add(dateiEndung)
  }

  return endungen

}

