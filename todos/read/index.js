const data = require('@begin/data')

exports.handler = async function read(req) {
  let pages = await data.get({
    table: 'todos',
    limit: 25
  })

  let todos = []
  for await (let todo of pages) {
    todos.push(todo)
  }

  todos.sort((a, b) => a.created - b.created)

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(todos)
  }
}
