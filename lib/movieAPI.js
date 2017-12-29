window.API_KEY = 'af29a1fd92e3ec3f4111aea875ad8350';
var instance = axios.create({
  baseURL: 'https://some-domain.com/' + window.API_KEY,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
