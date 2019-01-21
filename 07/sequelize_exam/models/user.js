module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('USER', {
        name: {
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },

        age : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },

        married : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },

        comment : {
            type : DataTypes.TEXT,
            allowNull : true,
        },

        created_at : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : sequelize.literal('now()'),
        },
    },
    {
        //classMethods:{},
        freezeTableName : true, //true => 첫번째 인자의 값으로 테이블명 설정 => 'USERS'
        timestamps      : false, //true => createdAt, updatedAt 칼럼을 자동으로 만들어줌
        //paranoid        : true, // true => deletedAt 칼럼을 자동으로 만들어줌
        //underscored     : true, // true => 칼럼명 형식을 xxx_xxx 형식으로 해줌
        //tableName     : 'USERS', // tableName속성의 값의 이름으로 테이블명이 만들어짐
    });

    return user;
}