import { Plugin } from 'vite';
import fs from 'fs'
import path from 'path'
import script from '../header'

export default (): Plugin => {
    return {
        name: 'sync-plugin',
        closeBundle(){
            const files = fs.readdirSync('temp/Tampermonkey/sync',{ withFileTypes: true })
            const jsonFiles = files.filter(file => file.isFile() && file.name.endsWith('.meta.json'))
            for(const file of jsonFiles){
                const filePath = path.join('temp/Tampermonkey/sync', file.name);
                const content = fs.readFileSync(filePath, 'utf-8')
                const {uuid,name} = JSON.parse(content);
                if(name === script.name){
                    const jsName = path.join('temp/Tampermonkey/sync',`${uuid}.user.js`)
                    fs.copyFileSync('dist/main.js',jsName)
                    console.log('copied file to:', jsName)
                    return;
                }
            }

            throw new Error("找不到对应名称的脚本:" + script.name)
        }
    }
}