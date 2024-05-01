'use strict'

import http from 'http'

export default class ResponseBody {
    private statusCode;
    private status;
    private message;
    private data;
    private error;
  constructor (statusCode?:any, message?:any, data?:any, error?:any) {
    this.statusCode = statusCode
    this.status = http.STATUS_CODES[statusCode]
    this.message = message
    this.data = data
    this.error = error
  }
}
