import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TableUsers extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('role')
        .references('id')
        .inTable('roles')        
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('role')
    })
  }
}
