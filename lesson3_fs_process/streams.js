import { createReadStream, createWriteStream } from "node:fs";
import { open } from "node:fs/promises";

export const runSteams = async () => {
    const readStream = createReadStream('./sync_fs.js', {
        encoding: 'utf-8',
        highWaterMark: 2
    });

    const writeStream = createWriteStream('./output.txt', {
        encoding: 'utf-8',
        highWaterMark: 2,
    })
    readStream.setEncoding('utf-8');
    // readStream.read(5);

    readStream.on('data', (chunk) => {
        // data - подія яка спрацьовує, якщо у буфері зчитані данні
        const canWrite = writeStream.write(chunk);

        if (!canWrite) {
            readStream.pause();
        }
    })

    writeStream.on('drain',()=>{
        // setTimeout(()=>readStream.resume(),500)
        readStream.resume();
    })

    // readStream.on('readable', () => {
    //     let chunk;

    //     while ((chunk = readStream.read(2)) !== null) {
    //         console.log("chunk#:", chunk);
    //         const canWrite = writeStream.write(chunk);

    //         if(!canWrite){
    //             readStream.pause();
    //         }
    //     }
    // })
    readStream.on('end', () => {
        // end - спрацьовує коли дані закінчились
        console.log("File is end");
        writeStream.end("End file");
    })

    const fileHandle = await open('./user.json','r');
    try {
        const buffer = Buffer.alloc(15);
        await fileHandle.read(buffer,0,10,0);
        console.log(buffer.toString('utf-8'))

        const stats = await fileHandle.stat();
        console.log('Size: ', stats.size);
    } catch (error) {
        
    }finally{
        fileHandle.close();
    }
}