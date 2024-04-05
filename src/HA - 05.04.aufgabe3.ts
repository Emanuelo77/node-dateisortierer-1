const fs = require('fs');
const path = require('path');

function copyFiles(sourceDir, targetDirs) {
  // Schleife durch alle Dateien im Quellverzeichnis
  fs.readdirSync(sourceDir).forEach(file => {
    const sourceFilePath = path.join(sourceDir, file);
    
    // Ermittle die Dateiendung
    const extension = path.extname(file);

    // Überprüfe, ob die Datei in targetDirs kopiert werden soll
    if (targetDirs.hasOwnProperty(extension)) {
      const targetDir = targetDirs[extension];
      const targetFilePath = path.join(targetDir, file);

      // Kopiere die Datei in den Zielordner
      fs.copyFileSync(sourceFilePath, targetFilePath);
      console.log(`Datei ${file} wurde nach ${targetDir} kopiert.`);
    } else {
      console.log(`Datei ${file} wird nicht kopiert, da keine passende Zielordner gefunden wurde.`);
    }
  });
}

// Beispielaufruf
const sourceDir = "./source";
const targetDirs = {
  ".png": "./output/images",
  ".mp4": "./output/videos",
  ".txt": "./output/documents"
};

copyFiles(sourceDir, targetDirs);