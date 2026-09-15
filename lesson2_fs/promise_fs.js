import fs from "node:fs/promises";

import path from "node:path";
export const run = async () => {
    const data = await fs.readFile('./package.json', 'utf-8');
    console.log(data)
    const writeData = 'File';
    await fs.writeFile('lesson2_fs/useless-info.txt', writeData, {flag: 'a'})
    await fs.appendFile('lesson2_fs/useless-info.txt',"\nUltra useless info")

    const MAIN_DIR = "lesson2_fs/MAIN_DIR/sub_folder/subsubfolder";
    

    await fs.mkdir(MAIN_DIR,{recursive:true});
    await fs.rm(MAIN_DIR, {recursive:true});

    const contains = await fs.readdir('./');

    const stat = await fs.stat(contains[0]);
    console.log(`${contains[0]} is directory: `, stat.isDirectory());
    console.log(contains);

    await fs.unlink('lesson2_fs/useless-info.txt')
    
    const watcher = fs.watch('lesson2_fs/logs');

    for await(const event of watcher){
        console.log(`Event: ${event.eventType}, file: ${event.filename}`);
    }

}