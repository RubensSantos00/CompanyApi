import Route from '@ioc:Adonis/Core/Route'


Route.group(()=>{
  Route.get('/', 'UsersController.getUsers')
  Route.post('/newuser', 'UsersController.addUser')
  Route.delete('/deleteuser/:id', 'UsersController.deleteUser')
  Route.put('/updaterole/', 'UsersController.updateUserRole')


}).prefix('/users')

Route.group(()=>{
  Route.get('/', 'CargosController.getCargos')  
  Route.post('/newrole', 'CargosController.addCargo')  
}).prefix('/cargos')


