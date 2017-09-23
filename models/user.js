module.exports = function(sequelize, DataTypes) {
    const user = sequelize.define("user", {
        "fullname": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
            }
        },

        "email": {
            "type"       : DataTypes.STRING,
            "allowNull"  : false,
            "validate"   : {
                "isEmail": true,
                "unique" : true
            }
        },

        "username": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "unique": true
            }
        },
        
        "hash": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
            }
        },
       "photo_url": {
            "type"     : DataTypes.STRING,
            "allowNull": false,
            "validate" : {
                "isURL": true
            }
        },
        
        "flagged": {
            "type"     : DataTypes.BOOLEAN,
            "defaultvalue": false,
        }
    });

    return user;
}