module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    dayofWeek: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    taskrAccept: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    requesterAccept: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    taskrMarkComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    requesterMarkComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    taskeeId: {
      type: DataTypes.INTEGER,
    }
  });

 Task.associate = function(models) {
   // A Task must belong to a Taskr; a Task can't be created without a Taskr due to the foreign key constraint
    Task.belongsTo(models.Taskr, {
      foreignKey:{
        allowNull: false
      }
    });
  };

  return Task;
};
