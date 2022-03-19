// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database"
import Cargo from "App/Models/Cargo"

export default class CargosController {

    public getCargos = async () => {
        try {
            return await Cargo 
                .query()
                .from('roles')
                .select('*')
        } catch (error) {
            return error
        }
    }

    public addCargo = async ({request}) => {
        try {
            await Database
            .insertQuery()
            .table('roles')
            .insert({name: request.all().name})

            return 'Role Created'
        } catch (error) {
            return error
        }
    }


}

