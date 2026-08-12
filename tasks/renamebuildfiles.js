// scripts/cleanup.js
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// rename build files
const mainFiles = [
    {
        oldFile:"main.js",
        newFile:"lbh-webmap.min.js"
    },
    {
        oldFile:"main.js.map",
        newFile:"lbh-webmap.min.js.map"
    },
    {
        oldFile:"all.css",
        newFile:"lbh-webmap.min.css"
    },
]

mainFiles.forEach((mainFile) => {
    const {oldFile,newFile} = mainFile
    console.log(oldFile,newFile)
    const oldPath = path.join(__dirname,"..", "dist", oldFile);
    const newPath = path.join(__dirname,"..", "dist", newFile);

    fs.rename(oldPath, newPath, (err) => {
    if (err) {
        console.error("❌ Error renaming file:", err);
        process.exit(1);
    }
    console.log(`✅ File renamed from ${oldPath} to ${newPath}`);
    });

});

//delete build .map files
// const files = ["main.js.map","all.css.map"]
// files.forEach((file) => {
//     try {
//         const targetFile = path.join(__dirname, "..", "dist", file);
//         fs.unlinkSync(targetFile);
//         console.log(`Deleted: ${targetFile}`);
//     } catch (err) {
//         if (err.code === "ENOENT") {
//             console.log("No file to delete, skipping.");
//         } else {
//             console.error("Failed to delete file:", err);
//             process.exit(1);
//         }
//     }
// });