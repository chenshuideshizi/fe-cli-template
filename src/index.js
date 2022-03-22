const Koa = require('Koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log(`Server listening on http://localhost:3001`)
})