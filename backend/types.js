const z = require('zod');

const createToDo = z.object({
    title: z.string().min(8),
    description: z.string().min(8)
})

const updateToDo = z.object({
    id: z.string()
})

module.exports  = { createToDo, updateToDo }