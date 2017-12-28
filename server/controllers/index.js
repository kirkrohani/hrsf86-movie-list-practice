// var models = require('../../database/index.js');

// module.exports = {
//     selectAll: (req, res) => {
//       console.log('hi from controllers GET');
//       models.get(function(data) {
//         res.json(data);
//       });
//     },
//     insertOne: (req, res) => {
//       // var params = [
//       //   req.body.title,
//       //   req.body.release_date,
//       //   req.body.overview,
//       //   req.body.popularity,
//       //   req.body.vote_average
//       // ]
//       console.log('hi from controllers POST');
//       models.post(params, function(data) {
//         res.send('success');
//       });
//     },
//     insertMany: (req, res) => {
//       // res.forEach((movie) => {
//       //   models.post(movie, function(data) {
//       //     res.send('success');
//       //   })
//       // })
//     }
// };