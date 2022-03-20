// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Users from "App/Models/User";

export default class UsersController {

    public getUsers = async () =>{
        return await Users
            .query()
            .from('users')
            .select('*')
    }


    public addUser = async ({request}) => {
        try{
            await Users
            .create({
                name:request.all().name,
                role: request.all().role
            })
            
            return "User Created"
        } catch(error){
            return error
        }
       
    }

    public deleteUser = async ({params})=>{
        try{
            await Users
            .query()
            .where('id',params.id)
            .delete()

            return "User deleted"
        } catch(error) {
            return params.id
        }
    }

    public updateUserRole = async ({request}) => {
        try { 
            const user = request.all()
            await Users
            .query()
            .where('id',user.id)
            .update({
                role: user.role
            })
            return "Role Updated"
        } catch(error) {
            return error
        }
    }
}
