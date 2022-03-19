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
            await Database
            .insertQuery()
            .table('users')
            .insert({name: request.all().name, role: request.all().role})
            
            return "User Created"
        } catch(error){
            return error
        }
       
    }
}
