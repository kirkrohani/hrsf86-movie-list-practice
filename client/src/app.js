var app = {};
app.server = 'http://localhost:3000/movies';
app.db = [];

app.headers = {
  'Content-Type': 'application/json'
};

app.getReq = {
  method: 'GET',
  headers: app.headers
};

app.updateDb = (component) => {
  fetch(app.server, app.getReq)
  .then((response) => {
    return response.json();
  })
  .then((rJson)=>{
    component.setState({'allMovies': rJson, 'currMovies': rJson});
  });
};

app.postToDb;

export default app;