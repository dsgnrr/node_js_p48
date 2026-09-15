import {readFileSync, writeFileSync} from "node:fs";
import fs from "node:fs";
/**
 * C:\Users\semenyuk_o\Desktop\node_js_fs\index.js
 * ./index.js
 * ./commonjs_import_export/index.cjs
 */

try {
    writeFileSync('lesson2_fs/user.json', JSON.stringify(
        {
            user: "admin",
            password: 'adminadmin',
            role: 'ADMIN',
            rights: ["READ", "DELETE", "UPDATE", "CREATE"]
        }
    ));
    let data = readFileSync('lesson1_import_export/commonjs_import_export/index.cjs','utf-8');
    console.log(data); 
    data = readFileSync('lesson1_import_export/commonjs_import_export/module.cjs','utf-8');
    console.log("\n\n######################\n"); 
    console.log(data); 
} catch (error) {
    console.error("Error: ", error);
    
}

fs.readFile('lesson1_import_export/esm_import_export/module.js',(err, data)=>{
    if(err){
        throw new Error("Open file error: ", err.message);
    }
    console.log("Read file\n", data.toString('utf-8'));
})

const value = 5;
export default value;