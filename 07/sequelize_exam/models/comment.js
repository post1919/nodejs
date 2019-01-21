module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('COMMENT', {
        comment : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },

        created_at : {
            type  : DataTypes.DATE,
            allowNull : true,
            defaultValue : sequelize.literal('now()'),
        },
    },
    {
        freezeTableName : true,
        timestamps : false,
        underscored : true,
    });

    return comment;
};