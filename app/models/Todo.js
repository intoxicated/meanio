/**
 * Created by R3alFr3e on 12/2/14.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text : String
});