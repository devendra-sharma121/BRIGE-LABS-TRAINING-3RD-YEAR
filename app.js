const fs = require("fs")
const express= require("express")

const app = express()

const data = "Hello  World";

const writeFileAsync = async () => {
    try {
        await fs.promises.writeFile("output.txt", data)
        console.log("File write successfully");
    } catch (err) {
        console.log("File not write successfully:", err);
    }
}

writeFileAsync()

const readFileAsync = async () => {
    try {
        const data = await fs.promises.readFile("output.txt", "utf8")   
        console.log("File read successfully:", data);
    } catch (err)  {
        console.log("File not read successfully:", err);    
    }
}

readFileAsync()

const countWordsAsync = async () => {
    try {
        const data = await fs.promises.readFile("output.txt", "utf8")
        const wordCount = data.split(/\s+/).length
        console.log("Word count:", wordCount);  
    } catch (err) {
        console.log("File not read successfully:", err);    
    }   

}

countWordsAsync()

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:${3000}`);
});


