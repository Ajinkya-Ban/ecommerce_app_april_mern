import userModel from '../models/userModel.js';
import { hashPassword } from '../helper/authHelper.js'


export const registerController = async (req,res) =>{

    try 
    {
        const {uname, email, password, mobile, address } = req.body;

        //apply some validations here
        if(!uname){
            return res.send({
                error:"Name is required"
            })
        }
        if(!email){
            return res.send({
                error:"email is required"
            })
        }
        if(!password){
            return res.send({
                error:"Password is required"
            })
        }
        if(!mobile){
            return res.send({
                error:"Mobile is required"
            })
        }
        if(!address){
            return res.send({
                error:"Address is required"
            })
        }

        //check the existing user
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"User is already exist, Please login"

            });
        }

        //before post the data we convert the password into hash
        const hashedPassword = await hashPassword(password);

        //If not existing user then save the user
        const user = await new userModel({
            uname,
            email,
            password:hashedPassword,
            mobile,
            address
        }).save();

        res.status(201).send({
            success:true,
            message:"User Register successfully",
            user
        })

    } 
    catch (error) 
    {
        console.log(error);
        res.status(404).send({
            success:false,
            message:"Error in user register",
            error
        });
    }

}
