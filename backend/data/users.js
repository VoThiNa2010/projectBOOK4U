import bcrypt from 'bcryptjs'

const users = [
    {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
   {
    name: "na@gmail.com",
    email: "na@gmail.com",
    password: bcrypt.hashSync('123456', 10),
},
   {
    name: "Khoi",
    email: "khoi@gmail.com",
    password: bcrypt.hashSync('123456', 10),

},
]

export default users