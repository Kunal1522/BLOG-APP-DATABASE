const mongoose=require("mongoose");
const likeSchema=new mongoose.Schema({
    post:{
           type:mongoose.Schema.Types.ObjectId,//says that we are not not using obejct model but its id 
                ref:"Post",//referen to postModel
    },
    user:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Like",likeSchema);
