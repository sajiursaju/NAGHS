const path = require('path')
const express = require('express');
const fileUpload = require("express-fileupload");

const bodyParser = require('body-parser');
var session = require('express-session');
// Routes Import
const home = require('./routes/home/home');
const login = require('./routes/login/login');

const register = require('./routes/register/register');
const email = require('./routes/email/email');
const team = require('./routes/team/team');
const homesetup = require('./routes/homesetup/homesetup');

//Admin_Routes
const admin_dashboard = require('./routes/admin/admin');
const admin_view_teacher = require('./routes/admin/admin_view_teacher');
const admin_teacher = require('./routes/admin/admin_teacher');
const admin_add_teacher = require('./routes/admin/admin_add_teacher');
const admin_approve_teacher = require('./routes/admin/admin_approve_teacher');
const admin_add_student = require('./routes/admin/admin_add_student');

const admin_student = require('./routes/admin/admin_student');
// Database
const db = require('./config/database');
const auth = require('./middleware/auth');
const { allowedNodeEnvironmentFlags } = require('process');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '/public')
    // Setup static directory to serve
app.use(express.static(publicDirectoryPath))
    //static files
app.use(express.static("public"));
app.use(express.static("upload"));


//default option
app.use(fileUpload());

// view engine setup
// app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: path.join(__dirname, 'views/partials') }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// application level middleware
// app.use(auth);

app.use(express.json());
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Session
app.use(session({
    secret: "xyz888",
    resave: true,
    saveUninitialized: true
}));


// Routes
app.use('/', home);
app.use('/login', login);
app.use('/register', register);
// admin teacher's related  routes
app.use('/admin_teacher', admin_teacher);
app.use('/admin_add_teacher', admin_add_teacher);
app.use('/admin_view_teacher', admin_view_teacher);
app.use('/admin_approve_teacher', admin_approve_teacher);

app.use('/admin_dashboard', admin_dashboard);

app.use('/admin_student', admin_student);
//usual routes
app.use('/homesetup', homesetup);
app.use('/email', email);
app.use('/team', team);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));