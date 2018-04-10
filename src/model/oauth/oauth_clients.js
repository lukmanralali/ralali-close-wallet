/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_clients', {
    client_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    client_secret: {
      type: DataTypes.STRING,
      allowNull: false
    },
    redirect_uri: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'oauth_clients'
  });
};
