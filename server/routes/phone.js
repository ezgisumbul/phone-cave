const express = require('express');
const router = express.Router();

const Phones = require('./../models/phone');

router.get('/', (req, res, next) => {
  Phones.find()
    .then((phones) => res.json({ phones }))
    .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Phones.findOne({ id: id })
    .then(
      (phone) => res.json({ phone })
      //   console.log(phone)
    )
    .catch((err) => next(err));
});

module.exports = router;
