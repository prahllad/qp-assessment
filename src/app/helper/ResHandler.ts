import ResponseBody from './ResponseBody'

export default {
  handleResponse (request:any, response:any, next:any) {
    const resBody = response.encryptedBody || response.body || {}
    const { statusCode } = resBody

    const handler = ([301, 302].indexOf(statusCode) > -1)
      ? _redirectResponse
      : _sendResponse

    handler(request, response, next)
  },
  
}

// --------- Handle Response -------------------------------------------------
function _sendResponse (request:any, response:any, next:any) {
  let resBody = response.encryptedBody || response.body || {}
  const { statusCode } = resBody

  if (!resBody || !statusCode) {
    resBody = new ResponseBody(500, 'Response Data Not Found!')
  }

  response.status(resBody.statusCode).json(resBody)
}

function _redirectResponse (request:any, response:any, next:any) {
  const resBody = response.encryptedBody || response.body || {}
  const { statusCode, data } = resBody
  response.status(statusCode).redirect(data)
}
// -----------------------------------------------------------------------------
