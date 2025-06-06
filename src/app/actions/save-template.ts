'use server'

import fs from 'fs';
import path from 'path';
import { masterJSONType } from "../context/MasterJSONContext"

export default async function saveJSON(masterJSON: masterJSONType, fileName: string) {
    const dirPath = path.join(process.cwd(), 'templates')
    const filePath = path.join(dirPath, fileName)
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(masterJSON, null, 2));
}