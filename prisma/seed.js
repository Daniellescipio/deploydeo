const prisma = require('./index')
const {faker} = require('@faker-js/faker')
const bcrypt = require('bcrypt')

const createUser = async(userName, password)=>{
  const newUser =  await prisma.customer.create({
        data:{
            email:userName,
            password:password
        }
    })
    console.log(newUser)
}

const seedUsers = async ()=>{
    const newUsers = await prisma.customer.createManyAndReturn({
        data:[
            {email:"admin@admin.com", password:"password"},
            {email:faker.internet.email(), password: await bcrypt.hash(faker.internet.password(), 5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)},
            {email:faker.internet.email(), password:await bcrypt.hash(faker.internet.password(),5)}
        ]
    })
    console.log(newUsers)
}
seedUsers()
// createUser("test@test.com", "password")