import bcrypt from 'bcryptjs'

const users = [
    {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
   {
    name: "Na",
    email: "na@gmail.com",
    password: bcrypt.hashSync('123456', 10),
},
   {
    name: "Khôi",
    email: "khoi@gmail.com",
    password: bcrypt.hashSync('123456', 10),

    },
      {
    name: "Quyền",
    email: "quyen@gmail.com",
    password: bcrypt.hashSync('123456', 10),
},
   {
    name: "Tú",
    email: "tu@gmail.com",
    password: bcrypt.hashSync('123456', 10),

    },
      {
    name: "Lâm",
    email: "lam@gmail.com",
    password: bcrypt.hashSync('123456', 10),

},
]

export default users