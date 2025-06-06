'use server'

import fs from 'fs'
import path from 'path'

export default async function getTemplateByName(templateName: string){
    const jsonFileName = templateName.endsWith('.json') ? templateName : `${templateName}.json`;
    
    const dirPath = path.join(process.cwd(), 'templates');
    const filePath = path.join(dirPath, jsonFileName);
    
    if (!fs.existsSync(filePath)) {
        console.warn(`Archivo '${jsonFileName}' no encontrado` )
        return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    return JSON.parse(fileContent);
}