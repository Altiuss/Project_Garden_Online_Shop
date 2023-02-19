const { request } = require('express'); // подключаем express
const express = require('express'); // подключаем express
const categories = require('./routes/categories'); // подключаем роуты
const products = require('./routes/products');// подключаем роуты
const sequelize = require('./database/database');// подключаем бд
const cors = require('cors')// подключаем cors
const Category = require('./database/models/category'); // подключаем модель
const Product = require('./database/models/product'); // подключаем модель
const PORT = 3333;

Category.hasMany(Product); // связь один ко многим

const app = express(); // создаем экземпляр приложения
app.use(express.static('public')) // подключаем статические файлы
app.use(cors({ // подключаем cors
    origin: '*' // разрешаем доступ со всех адресов
}));

app.use('/categories', categories); // подключаем роуты
app.use('/products', products); // подключаем роуты



app.use(express.json()); // подключаем парсер json

const start = async () =>{          // функция для подключения к бд
    try{
        await sequelize.sync().then(
            result => {/*console.log(result) */},
            err => console.log(err)
        );
        
        app.listen(PORT, ()=>{
            console.log(`\n\nServer started on ${PORT} port...`)
        })
    }catch(err){
        console.log(err);
    }
}
start();

// app.listen('3333');