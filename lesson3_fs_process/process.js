import { exec, spawn } from "child_process";
const cb = (error, stdout, stderr)=>{
        if(error){
            console.error("Error:", error);
            return;
        }
        console.log(stdout);
    }
export const runProcess= async()=>{
    exec('dir', cb)

    exec('npx cowsay Hello', cb)

    const myProccess = spawn('npx', ['cowsay hello'],{
        shell: true
    })
    // console.log(myProccess.pid)

    myProccess.stdout.on('data',(chunk)=>{
        console.log("STDOUT: ", chunk.toString());
        
    })

    myProccess.stderr.on('data',(chunk)=>{
        console.log("stderr: ", chunk.toString());
        
    })
}

/**
 * Створіть свій нодмун
 * Він має працювати до тих пір поки ви його не зупинете
 * node your_nodemon --watch <папка> --watch <file> index.js 
 * якщо у index.js внесені зміни ваш нодмун перезапускае скріпт
 * 
 * 
 */