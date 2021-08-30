let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function destroy(req) {
  let key = arc.http.helpers.bodyParser(req).key
  await data.destroy({
    key,
    table: 'todos'
  })
  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
