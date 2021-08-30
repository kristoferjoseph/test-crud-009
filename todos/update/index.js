let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function update(req) {
  let todo = arc.http.helpers.bodyParser(req)
  todo.completed = !!todo.completed
  await data.set({
    table: 'todos',
    ...todo
  })
  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
