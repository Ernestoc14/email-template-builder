'use server'

import fs from 'fs';
import path from "path";

export default async function getAllJSON() {
    try{
        const dirPath = path.join(process.cwd(), 'templates');
        if (!fs.existsSync(dirPath)) {
            return [];
        }
        const allTemplates = fs.readdirSync(dirPath);
        const jsonTemplates = allTemplates.filter(file => file.endsWith('.json'));

        const templates = jsonTemplates.map(template=>{
            const filePath = path.join(dirPath, template)
            const info = fs.statSync(filePath)

            return {
                name: template.replace('.json', ''),
                dateCreated: info.birthtime,
                dateModified: info.mtime
            }
        })
        return templates
    }catch(error){
        console.error("Error al listar los JSON: ", error)
    }
}