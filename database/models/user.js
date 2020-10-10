module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userID: {
        filed: "user_id",
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        field: "password",
        type: DataTypes.STRING(30),
        allowNull: false
    }, 
    name: {
      field: "name",
      type: DataTypes.STRING(30),
    },
    email: {
      field: "email",
      type: DataTypes.STRING(30),
    },
  }, {        
    underscored: true,
    freezeTableName: true,
    tableName: "user"
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return User;
};