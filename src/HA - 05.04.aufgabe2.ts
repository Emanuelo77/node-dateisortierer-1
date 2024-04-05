const fs = require('fs');

function createDirs(folderPath: string, folderNames: string): {
  // Iteriere durch jedes Element in folderNames
  for (const folderName of folderNames) {
    // Konstruiere den vollständigen Pfad zum Ordner
    const fullPath = `${folderPath}/${folderName}`;

    // Überprüfe, ob der Ordner bereits existiert
    if (!fs.existsSync(fullPath)) {
      // Wenn nicht, erstelle den Ordner
      fs.mkdirSync(fullPath);
      console.log(`Ordner ${folderName} wurde erfolgreich erstellt.`);
    } else {
      console.log(`Ordner ${folderName} existiert bereits.`);
    }
  }
}

// Beispielaufruf
createDirs("./output", [".png", ".mp4", ".gif"]);