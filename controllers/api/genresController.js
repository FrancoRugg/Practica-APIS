const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let response = {
                    meta:{
                        status: 200,
                        total: genres.length,
                        url: "api/genres",
                    },
                    data: genres               
                }
                res.json(response)
            })

    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    },
    'post': (req, res) => {
        
        db.Movies
        .create(req.body)
        .then(movie => {
          return res.status(200),json({                
              data: movie,
              status: 200,
              created: "ok"
        })
    })
    

},
'delete': (req, res) => { 
    db.Movies
    .destroy({
        where: {
            id: req.params.id
        }
    })
    .then(response => {
        return res.json(response)
    })
  }
}

module.exports = genresController;