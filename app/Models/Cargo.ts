import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Users from './User'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public nome: string

  @belongsTo(() => Users)
  public role: BelongsTo<typeof Users>
}
