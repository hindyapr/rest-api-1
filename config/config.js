module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": "rest_api_devlopment",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "yfrzzjkwriajsf",
        "password": "3e69441efc6129274cade5678d0fa790fb54ce2926c309d1c7a2b4a39553809b",
        "database": "dcq6evf750tdjb",
        "host": "ec2-54-225-76-136.compute-1.amazonaws.com",
        "dialect": "postgres"
    }
}