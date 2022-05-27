const users = [
    {id:1, name: "ahmed", email:"ahmed@gmail.com", password: 123456},
    {id:2, name: "ali", email:"ali@gmail.com", password: 123456},
    {id:3, name: "ameen", email:"ameen@gmail.com", password: 123456},
    {id:4, name: "hatem", email:"hatem@gmail.com", password: 123456},
    {id:5, name: "john", email:"john@gmail.com", password: 123456},
    {id:6, name: "khaled", email:"khaled@gmail.com", password: 123456},
    {id:7, name: "Ibrahiem", email:"Ibrahiem@gmail.com", password: 123456},
]



export const findUser = (email, password)=>{
  const user =  users.filter(user=> {
   return user.email === email && user.password == password
  })
  if(user.length) return {user: user[0]};
  else return {error: "user was not found. email or password seems incorrect"}
}