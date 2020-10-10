const { User } = require('../../database/models');

/**
 * user data CURD
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {

    // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // var userId = req.body.userID;
    var userId = "test$123";

    // Create a User
    const user = {
      userID : userId,
      email: req.body.email,
      password: req.body.password
    };
  
    // Save User in the database
    User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};