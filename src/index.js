const express = require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');

const apiRoutes=require('./routes/index');

const db = require('./models/index')

//const {User,Role} = require('./models/index');
// const bcrypt = require('bcrypt');
//const UserRepository = require('./repository/user-repository');
// const UserService=require('./services/user-service')

const app = express();


const prepareAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',apiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server Started on Port : ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
        // const u1 = await User.findByPk(4);
        // const r1 = await Role.findByPk(1);
        //u1.addRole(r1);
        // const response = await u1.hasRole(r1);
        // console.log(response);
        // const repo=new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);
        // const incomingpassword='12346';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword,user.password);
        // console.log(response);
        // const service = new UserService();
        // const newToken = service.createToken({email:'shitanhu@admin.com',id:1});
        // console.log("new token is",newToken);
        //  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXRhbmh1QGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE2OTI5MTI0MzEsImV4cCI6MTY5MjkxMjQ2MX0.KzTw3n5wbxKHTv7RpokKzGgRFt8g3XKdKU-BuVzv7oE'
        //  const response = service.verifyToken(token);
        //console.log(response);
    })
}
prepareAndStartServer();