// app.js

window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'allyjfuller.auth0.com',
    clientID: 'Gol2UehzfqEzKOrZ2JG8TZNcovQ2AaYd',
    responseType: 'token id_token',
    audience: 'https://allyjfuller.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
      });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});