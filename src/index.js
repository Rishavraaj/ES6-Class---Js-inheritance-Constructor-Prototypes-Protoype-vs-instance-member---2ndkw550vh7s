

class API{
  constructor(url)
  this.url = url
  this.method = "GET"
  this.#secure = url.startWith("https");
}
isSecure() {
    return this.#secure
}
updateURL(url) {
  this.url = url
}
let firstAPI = new API('http://api.com/api/hello')
console. log(s.isSecure()) // false
let secondAPI = new API('https://api.com/api/hello')
console. log(s.isSecure()) // true
    
module.exports = { API }
