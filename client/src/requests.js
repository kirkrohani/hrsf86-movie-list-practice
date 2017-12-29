var app = {};
app.api = 'http://localhost:3000/load';
app.db = [];
app.database = 'http://localhost:3000/movies';

app.headers = {
  'Content-Type': 'application/json'
};

app.getReq = {
  method: 'GET',
  headers: app.headers
};

app.initDb = (component) => {
  fetch(app.api, app.getReq)
  .then((response) => {
    console.log('got response, data was posted');
    fetch(app.database, app.getReq)
    .then((res) => {
      return res.json();
    })
    .then((rJson)=>{
      component.setState({'allMovies': rJson, 'currMovies': rJson});
    })
    .catch (err => console.log(err));
  })
  .catch(err => {
    console.log('error in initDB');
  });
};

app.postReq = {
  method: 'POST',
  headers: app.headers,
};

app.postToDb = (data) => {
  app.postReq.body = data;
  fetch(app.database, app.postReq)
  .then((res) => {
    console.log('Post successful');
  })
  .catch((err)=> {
    console.log('Post failed');
  });
};

export default app;