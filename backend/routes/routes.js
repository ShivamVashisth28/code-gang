import { Router } from "express";
import bcrypt from "bcrypt"

const router = Router()

let database = {
    'Shivam001':{
        'fullname':'Shivam Vashisth',
        'username':'Shivam001',
        'leetcode':'vashisth11shivam',
        'github':'shivamVashisth28',
        'password':'123'
    }
}


router.route('/signup').post( async (req,res)=>{
    const data = req.body

    const username = data.username

    // find whether username is unique or not
    if(username in database){
        return res.json({
            message:"Username Already Exists!! Enter unique username"
        });
    }

    const name = data.name
    const password = data.password

    const hashPassword = await bcrypt.hash(password, 10);

    const leetcodeUsername = data.leetcodeUsername
    const githubUsername = data.githubUsername
    
    const temp = {
        'fullname':  name,
        'username':  username,
        'leetcode':  leetcodeUsername,
        'github' : githubUsername,
        'password':  hashPassword
    }

    database[username] = temp

    return res.json({
        message:'User Created',
        data : database
    })
})

export default router;