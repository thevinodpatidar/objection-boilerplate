
const {okResponse,badRequestError } = require("../../global_functions");
const Posts = require("../../models/userPostModel");

const CreatePost = async(req,res)=>{
    let data = req.body;

    let inserted_post = await Posts.query().skipUndefined().insertGraph(data).returning("*");
    console.table(inserted_post);

    return okResponse(res,inserted_post,"Post Inserted");
}

const GetPosts = async(req,res)=>{
    
    let posts = await Posts.query().skipUndefined();

    console.table(posts);

    okResponse(res,posts,"Posts");

}

const GetUserPosts = async(req,res)=>{
    let data = req.params;

    let post = await Posts.query().skipUndefined().where("created_by",data.created_by).returning("*");

    return okResponse(res,post,"User Posts");
}
module.exports = {
    CreatePost,
    GetPosts,
    GetUserPosts
}