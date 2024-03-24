const Npmpackages = require("../models/npmpackages");
const User = require("../models/userModel");

exports.createPackage = (req, res, next) => {
  const npmpackages = new Npmpackages({
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    userId: req.body.userId,
    category: req.body.category ? req.body.category : null,
  });
  npmpackages
    .save()
    .then((npmpackage) => {
      res.status(201).json(npmpackage);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getPackages = (req, res, next) => {
  Npmpackages.find({ userId: req.user })
    .then((npmpackages) => {
      res.status(200).json(npmpackages);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.getPackage = (req, res, next) => {
  Npmpackages.findOne({ _id: req.params.id })
    .then((npmpackage) => {
      res.status(200).json(npmpackage);
    })
    .catch((error) => {
      res.status(404).json({ error: error });
    });
};

exports.editPackage = (req, res, next) => {
  const npmpackages = new Npmpackages({
    _id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    userId: req.body.userId,
    category: req.body.category ? req.body.category : null,
  });
  Npmpackages.updateOne({ _id: req.params.id }, npmpackages)
    .then(() => {
      console.log(npmpackages);
      res.status(201).json({ npmpackages });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deletePackage = (req, res, next) => {
  Npmpackages.findOne({ _id: req.params.id, userId: req.user._id })
    .then((npmpackage) => {
      if (!npmpackage) {
        return res.status(404).json({
          error: "Package not found or you don't have permission to delete it",
        });
      }
      // Only delete the package if it belongs to the authenticated user
      Npmpackages.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({ id: req.params.id });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
