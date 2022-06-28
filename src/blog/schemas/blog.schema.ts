import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    id:String,
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
})