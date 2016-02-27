var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', 'ejs');
//app.set('view engine', '.hbs');
//app.set('view engine', 'jade');

bookRouter.route('/')
    .get(function(req, res){
        res.send('Hello Books!');
    });

bookRouter.route('/single')
    .get(function(req, res){
        res.send('Hello single Book!');
    });

app.use('/books', bookRouter);
app.get('/', function (req, res) {
    res.render('index', {title: 'Hello!', nav: [
        {
            link: '/books',
            text: 'Books'
        },
        {
            link: '/authors',
            text: 'Authors'
        }
    ]});
});

/*app.get('/books', function (req, res) {
    res.send('Hello Books!');
});*/

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});