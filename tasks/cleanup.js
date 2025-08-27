// scripts/cleanup.js
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const files = ["main.js.map","all.css.map"]
files.forEach((file) => {
    try {
        const targetFile = path.join(__dirname, "..", "dist", file);
        fs.unlinkSync(targetFile);
        console.log(`Deleted: ${targetFile}`);
    } catch (err) {
        if (err.code === "ENOENT") {
            console.log("No file to delete, skipping.");
        } else {
            console.error("Failed to delete file:", err);
            process.exit(1);
        }
    }
});
