
const {okResponse,badRequestError } = require("../../global_functions");
const User = require("../../models/userModel");

// Add user Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const AddUser = async (req,res)=>{
    let data  = req.body;
    if(!data.fullName) return badRequestError(res,"Enter FullName");
    if(!data.dob) return badRequestError(res,"Enter Date of birth");

    let user_added = await User.query().skipUndefined().insert(data).returning("*");
    if(!user_added) return badRequestError(res,"User not added");

    return okResponse(res,user_added,"User Added");
}


// Get user Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const GetUser = async (req,res)=>{
    let data = req.params;
    console.log(data.fullName);
    if(!data.fullName) return badRequestError(res,"Enter Fullname");

    let user = await User.query().skipUndefined().where("fullName",data.fullName).first();
    if(user === undefined ) return badRequestError(res,"No user found");

    return okResponse(res,user,"User Details")
}

// Get users Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const GetUsers = async (req,res)=>{
    
    let users = await User.query().skipUndefined();
    
    return okResponse(res,users,"Users Details");
}

// Update user Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const UpdateUser = async(req,res)=>{
    let data = req.params;

    let updated_user = await User.query().skipUndefined().update(data).where("id",data.id);

    if(!updated_user) return badRequestError(res,"User not updated");

    return okResponse(res,"User Updated");
}

// Remove user Controller 
// req : HTTP Request Object
// res : HTTP Response Object
const RemoveUser = async(req,res)=>{
    let data = req.params;

    let removed_user = await User.query().skipUndefined().deleteById(data.id);

    if(!removed_user) return badRequestError("User not removed");

    return okResponse(res,"User Removed");
}



// Export Controllers
module.exports = {
    AddUser,
    GetUser,
    GetUsers,
    UpdateUser,
    RemoveUser
}
