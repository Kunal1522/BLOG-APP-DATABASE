const Posts=require("../models/postModel");
exports.createPost=async (req,res)=>{
    try{
        const {title,body}=req.body;
        const post =new Posts({
            title,body,
        })
       const savedPost=await post.save();
       res.json({
        post:savedPost
       })
    }
    catch(error){
return res.start(480).json({
    error:"Error while creating post",
})
    }
}