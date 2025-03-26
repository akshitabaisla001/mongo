const User=require('../models/user');
async function handleGetAllUsers(req,res){
    const allDbusers=await User.find({});
    return res.json(allDbusers);
};
async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found"});
    return res.json(user);
}
async function handleUpdateUserById(req,res){
    await User.findByAndUpdate(req.params.id ,{lastName:"changed"});
    return res.json({status:"success"});
}
async function handleDeleteUserById(req,res){
    await User.findByAndDelete(req.params.id);
  return res.json({status:"Success"});
}
async function handleCreateNewUser(req,res){
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "all fields are required" });
     }

        const result = await user.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });
        console.log("Result from create:", JSON.stringify(result));
        return res.status(201).json({ msg: "success" ,id: result._id});
    }

module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}