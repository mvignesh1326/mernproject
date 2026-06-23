import Admin from "../model/admin.js";
const registerAdmin=async(req,res)=>{
    try{
        const{username,email,password,confirmpassword,confirmPassword}=req.body;
        const confirmValue = confirmpassword ?? confirmPassword;

        if(!username || !email || !password || !confirmValue){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password!==confirmValue){
            return res.status(400).json({message:"Password do not match"});
        }
        const newAdmin=new Admin({ username,email,password});
        await newAdmin.save();
        res.status(201).json({message:"Admin registered successfully"});        
    }catch (error){
        if (error.code === 11000) {
            return res.status(409).json({message:"Username or email already exists"});
        }
        res.status(500).json({message:error.message});
    }
};

const loginAdmin=async(req, res)=>{
    try{
        const{email,password}=req.body; 
        if(!email || !password){
            return res.status(400).json({message:"Email and password are required"});
        }
        const admin=await Admin.findOne({email});
        if(!admin || admin.password!==password){
            return res.status(401).json({message:"Invalid email or password"});
        }
        res.status(200).json({message:"Admin logged in successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

export {registerAdmin,loginAdmin};

