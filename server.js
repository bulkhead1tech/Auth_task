import {app} from "./index.js"

app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${process.env.PORT}`)
})