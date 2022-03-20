import { BaseModel, column,hasOne,HasOne } from '@ioc:Adonis/Lucid/Orm'
import Cargo from './Cargo'

export default class Users extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public name: string
  
  @column({ isPrimary: true })
  public role: string

  // @hasOne(() => Cargo)
  // public role: HasOne<typeof Cargo>

}
