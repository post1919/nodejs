module.exports = (sequelize, DataTypes)=>{
    const comment = sequelize.define('COMMENT', {
        comment : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
    },
    {
        //classMethods:{},
        freezeTableName : true, //true => 첫번째 인자의 값으로 테이블명 설정
        timestamps      : true, //true => createdAt, updatedAt 칼럼을 자동으로 만들어줌
        paranoid        : true, // true => deletedAt 칼럼을 자동으로 만들어줌
        underscored     : true, // true => 칼럼명 형식을 xxx_xxx 형식으로 해줌
        //tableName     : 'COMMENT', // tableName속성의 값의 이름으로 테이블명이 만들어짐
    });

    return comment;
}