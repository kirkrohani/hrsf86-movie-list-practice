var app = {};
app.server = 'http://localhost:3000/load';
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
    console.log(rJson);
    component.setState({'allMovies': rJson, 'currMovies': rJson});
  });
};

app.postReq = {
  method: 'POST',
  headers: app.headers,
};

app.postToDb = (data) => {
  app.postReq.body = data;
  fetch(app.server, app.postReq)
  .then((res) => {
    console.log('Post successful');
  })
  .catch((err)=> {
    console.log('Post failed');
  });
};

export default app;