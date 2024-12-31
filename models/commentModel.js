//import mongoose
const mongoose=require("mongoose");


const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,//says that we are not not using obejct model but its id 
        ref:"Post",//referen to postModel
    }
    ,
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model("Comment",commentSchema);