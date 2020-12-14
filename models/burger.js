const orm  = require("../config/orm.js")
var burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    Create: function (cb, cols, vals) {
        orm.Create("burgers", cols, vals, function(res){
            cb(res)
        })
    },updateOne: function (cb, condition, objColVals) {
        orm.updateOne("burgers", condition, objColVals, function(res){
            cb(res)
        })
    },
    deleteOne: function (cb,condition)  {
        orm.deleteOne("burgers", condition, function(res){
            cb(res)
        })
    }

}
module.exports = burger
// //create
// //selectAll();
// insertOne();
// updateOne();