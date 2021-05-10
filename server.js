const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize')

let receipes = [];

app.use(cors());

const sequelize = new Sequelize('receipe', 'username', 'password', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})

const Category = sequelize.define('category', {
    name: Sequelize.STRING,
})

const Receipe = sequelize.define('receipe', {
    name: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
    description: Sequelize.STRING,
})


Receipe.belongsTo(Category, {foreignKey: 'category_id', targetKey: 'id'})

app.use('/', express.static('frontend'))


app.use(express.json()); 

app.use(express.urlencoded())

app.get('/createdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables')
    })
})

async function getCategories(request, response) {
    try {
        let categories = await Category.findAll();
        response.status(200).json(category)
    } catch(err) {
        response.status(500).send('something bad happened')
    }
}

app.get('/categories', getCategories)

app.get('/categories/:id', function(request, response) {
    Category.findOne({where: {id:request.params.id}}).then(function(category) {
        if(category) {
            response.status(200).send(category)
        } else {
            response.status(404).send()
        }
    })
})


//create a new category
app.post('/categories', function(request, response) {
    Category.create(request.body).then(function(category) {
        response.status(201).send(category)
    })
})

app.put('/categories/:id', function(request, response) {
    Category.findByPk(request.params.id).then(function(category) {
        if(category) {
            category.update(request.body).then(function(category){
                response.status(201).send(category)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/categories/:id', function(request, response) {
    Category.findByPk(request.params.id).then(function(category) {
        if(category) {
            category.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.get('/receipes', function(request, response) {
    Receipe.findAll(
        {
            include: [{
                model: Category,
                where: { id: Sequelize.col('receipe.category_id') }
            }, {
                model: Category,
                where: { id: Sequelize.col('receipe.id')},
                required: false
            }]
        }
        
        ).then(
            function(receipe) {
                response.status(200).send(receipe)
            }
        )
})



app.post('/receipes', function(request, response) {
    Receipe.create(request.body).then(function(receipe) {
        response.status(201).send(receipe)
    })
})

app.put('/receipes/:id', function(request, response) {
    Receipe.findByPk(request.params.id).then(function(receipe) {
        if(receipe) {
            receipe.update(request.body).then(function(receipe){
                response.status(201).send(receipe)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.delete('/receipes/:id', function(request, response) {
    Receipe.findByPk(request.params.id).then(function(receipe) {
        if(receipe) {
            receipe.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})

app.get('/categories/:id/receipes', function(request, response) {
    Receipe.findAll({
            where:{category_id: request.params.id},
            
            include: [{
                model: Category,
                where: { id: Sequelize.col('receipe.category_id') }
            }]
        }
            ).then(
            function(receipe) {
                response.status(200).send(receipe)
            }
        )
})



app.listen(8080)