import { DateTime } from 'luxon'
import { BaseModel, column,hasOne,HasOne } from '@ioc:Adonis/Lucid/Orm'
import Cargo from './Cargo'

export default class Users extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public nome: string

  @hasOne(() => Cargo)
  public role: HasOne<typeof Cargo>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
