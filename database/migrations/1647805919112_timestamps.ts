import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Timestamps extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .dateTime('created_at', { useTz: true })
        .defaultTo(this.now())
        
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName,(table)=>{
      table.dropColumn('created_at')
      table.dropColumn('updated_at')

    })
  }
}
