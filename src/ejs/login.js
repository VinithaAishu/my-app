const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module
const app = express();
const port = 3001;


const users = [];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('log', { users: users });
});

app.post('/submit', (req, res) => {
    const user = {
        username: req.body.sname,
        email: req.body.mail,
        age: req.body.age,
        password: req.body.password
    };
    users.push(user);

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
