import {app} from "./index.js"
import {connectdb} from "./utils/database.js"
connectdb();
app.listen(process.env.PORT, ()=>{
    console.log(`server started at port ${process.env.PORT}`)
})