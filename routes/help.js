const router = require('koa-router')()

router.prefix('/help')

router.get('/', async (ctx, next) => {
  await ctx.render('help/help', {
    title: 'Hello Koa 2!'
  })
})


module.exports = router