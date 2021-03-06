'use strict';
var path = require('path');
var Users = require('../models/users.js');
var Rooms = require('../models/rooms.js');

function roomHandler () {
    
    this.getRooms = function(req,res) {
        Rooms.find({})
            .exec(function(err,result) {
                if (err) { throw err; }
                res.json(result);
            });
    }
    
    this.addRoom = function(req,res) {
        var newRoomName = req.body.newRoomName;
        var newRoomDescription = req.body.newRoomDescription;
        //insert a new room
        new Rooms({name:newRoomName,description:newRoomDescription, history:[]}).save();
    };
    
    // this.addClick = function(req,res) {
    //     Users.findOneAndUpdate({'github.id':req.user.github.id},{$inc:{'nbrClicks.clicks':1}})
    //     .exec(
    //         function(err,result) {
    //             if(err) { throw err; }
    //             res.json(result.nbrClicks);
    //         }
    //     );
    // }
    // this.resetClicks = function(req,res) {
    //     Users.findOneAndUpdate({'github.id':req.user.github.id},{'nbrClicks.clicks':0})
    //     .exec(
    //         function(err,result) {
    //             if(err) { throw err; }
    //             res.json(result.nbrClicks);
    //         }
    //     );
    // }
}
module.exports = roomHandler;