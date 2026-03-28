import mongoose, {Schema} from "mongoose"
const NotesSchema = new Schema({
    note:{
    type: String,
    },
  createdAt:{
        type:Date,
        default: Date.now,
    },
}, {collection: "notes"})
export const Notes= mongoose.model("Notes", NotesSchema)