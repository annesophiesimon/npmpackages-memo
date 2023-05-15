const mongoose = require('mongoose');

const npmpackagesSchema = mongoose.Schema({
    name: { type: String, required: true },
    link: {type: String, required: true},
    description: { type: String, required: true },
    userId: { type: String, required: true },
    category: { type: String, required: false}
});

module.exports = mongoose.model('Npmpackages', npmpackagesSchema);