var express = require("express");
var _ = require("lodash");
var db = require("../models");

var router = express.Router();
module.exports = router;

// Task routes ========================================================

// POST route for saving a new message
router.post("/api/messages", function(req, res) {
  db.Message.create(req.body).then(function(dbTask) {
    res.json(dbTask);
  });
});



// GET route for getting all taskr received messages
router.get("/api/messages/:id", function(req, res) {
  db.Message.findAll({
    where: {
      taskrId: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
    // console.log("For Test" , dbTask);
  });
});

// GET route for getting all taskr sent messages
router.get("/api/messages1/:id", function(req, res) {
  db.Message.findAll({
    where: {
      taskeeId: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
    // console.log("For Test" , dbTask);
  });
});


// GET route for getting all taskr sent messages
router.get("/api/messages2/:id", function(req, res) {
  db.Message.findAll({
    where: {
      id: req.params.id,
    }
  }).then(function(dbTask) {
    res.json(dbTask);
    // console.log("For Test" , dbTask);
  });
});

// Post.findAll({
//   where: {
//     authorId: 12,
//     status: "active"
//   }
// });







// GET route for getting all of the taskee tasks associate with user logged in
router.get("/api/taskee/:id", function(req, res) {
  db.Task.findAll({
    where: {
      taskeeId: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
    // console.log("For Test" , dbTask);
  });
});

// GET route for getting all of the tasks
router.get("/api/tasks", function(req, res) {
  db.Task.findAll({}).then(function(dbTask) {
    res.json(dbTask);
  });
});

// GET route for returning all available tasks
router.get("/api/availabletasks", function(req, res) {
  db.Task.findAll({
    where: {
      taskrAccept: false,
      requesterAccept: false,
      taskrMarkComplete: false
    }
  }).then(function(dbTasks) {
    res.json(dbTasks);
  });
});

// GET route for returning tasks of a specific category
router.get("/api/tasks/category/:category", function(req, res) {
  db.Task.findAll({
    where: {
      category: req.params.category
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// GET rotue for retrieving a single task
router.get("/api/tasks1/:id", function(req, res) {
  db.Task.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});


// DELETE route for deleting tasks
router.delete("/api/tasks/:id", function(req, res) {
  db.Task.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// PUT route for updating tasks
router.put("/api/tasks", function(req, res) {
  db.Task.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

// PUT route to update Taskee to Task
router.put("/api/updateTaskee", function(req, res) {
  console.log(req.body);
  db.Task.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

//Delete all Foreign Keys
router.delete("/api/tasks/delete/:id", function(req, res) {
  db.Task.destroy({
    where: {
      TaskrId: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});
