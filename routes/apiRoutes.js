var db = require("../models/workouts.js");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.find({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    db.find({})
      .limit(5)
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.put("/api/workouts/:id", function (req, res) {
    db.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  app.post("/api/workouts", function (req, res) {
    console.log(req.body);
    db.create({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};
