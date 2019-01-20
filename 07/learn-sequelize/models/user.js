module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
      U_ID: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      U_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      U_PK: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      U_COMPANY: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      U_REGISTER_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('now()'),
      },
    }
    , {
      timestamps: false,
    });
  };