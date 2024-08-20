const express = require('express')
const userRouter = express.Router()
const prisma = require('../prisma/index')
//api/users
//get all users
userRouter.get('/', async(req,res,next)=>{
    try {
        res.send(await prisma.customer.findMany())
    } catch (error) {
        next(error)
    }
})
//get a user
userRouter.get('/:customer_id', async(req,res,next)=>{
    try {
        const customer_id = req.params.customer_id
        res.send(await prisma.customer.findUnique({
            where:{
                id : customer_id
            }
        }))
    } catch (error) {
        next(error)
    }
})

userRouter.post('/', async(req,res,next)=>{
    try {
        const email = req.body.email
        const password = req.body.password
        const newUser = await prisma.customer.create({
            data:{
                email:email,
                password:password
            }
        })
        res.send(newUser)
    } catch (error) {
        next(error)
    }
})
userRouter.put('/:customer_id', async(req,res,next)=>{
    try {
        const customer_id = req.params.customer_id
        const email = req.body.email
        const password = req.body.password
        const updatedUser = await prisma.customer.update({
            data:{
                email:email,
                password:password
            },
            where:{
                id:customer_id
            }
        })
        res.send(updatedUser)
    } catch (error) {
        next(error)
    }
})

userRouter.delete('/:customer_id', async(req,res,next)=>{
    try {
        const customer_id = req.params.customer_id
        const updatedUser = await prisma.customer.delete({
            where:{
                id:customer_id
            }
        })
        res.send({updatedUser, message:"deleted"})
    } catch (error) {
        next(error)
    }
})


module.exports = userRouter