import app from './app';
// import './controllers/dataBase';
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log(`Server on port ${app.listen(app.get('port'))}`);
