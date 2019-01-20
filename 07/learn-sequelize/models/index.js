const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize; //DataTypes

// /models/user.js
db.User = require('./user.js')(sequelize, Sequelize);

// /models/comment.js
db.Comment = require('./comment.js')(sequelize, Sequelize);

//외래키 설정 => commenter 칼럼을 여기서 만들어줌
db.User.hasMany     (db.Comment, { foreignKey : 'commenter', sourceKey:'id' });
db.Comment.belongsTo(db.User,    { foreignKey : 'commenter', targeyKey:'id' });

module.exports = db;