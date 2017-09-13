module.exports = function(models) {

  const home = function(req, res, next) {
    res.render('waiter', {});
  };
  /////////////////////////////////////////////////////////////////////////////

  const index = function(req, res, next) {
    var username = req.params.username;
    var days = req.body.days;

    models.waiterShifts.findOne({
      username: req.params.username
    }, function(err, results) {
      console.log('This user already exists');
      if (results) {
        res.render('waiter', {
          username: results.username,
          days: results.days
        });
      }
      if (!results) {
        res.render('waiter', {
          username: username
        });
      }

      if (err) {
        return next(err);
      }
    });
  };

  /////////////////////////////////////////////////////////////////////////////

  const updateOrAdd = function(req, res, next) {
    var username = req.params.username;
    var days = req.body.days;
    models.waiterShifts.findOne({
      username: req.params.username
    }, function(err, waiter) {
      if (waiter) {
        waiter.days = days;
        waiter.save(function(err, results) {
          if (err) {
            return next(err);
          }
          if (results) {
            res.render('waiter', {
              username: results.username,
              days: results.days
            });
          }
        });
      } else {
        var newWaiter = {
          username: username,
          days: days
        };
        models.waiterShifts.create({
          username: req.params.username,
          days: req.body.days
        }, function(err, waiter) {
          console.log('New waiter added');
          console.log(arguments);

          if (err) {
            return next(err);
          }

          console.log('Done');
          res.render('waiter', {
            username: username,
            days: days
          });

        });
      }
    });
  };


  /////////////////////////////////////////////////////////////////////////////

  var list = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };
  const days = function(req, res, next) {
    var color = "";
    var msg = "";

    var color1 = "";
    var msg1 = "";

    var color2 = "";
    var msg2 = "";

    var color3 = "";
    var msg3 = "";

    var color4 = "";
    var msg4 = "";

    var color5 = "";
    var msg5 = "";

    var color6 = "";
    var msg6 = "";

    models.waiterShifts.find({}, function(err, waiter) {

      if (err) {
        return done(err);
      } else {
        for (var i = 0; i < waiter.length; i++) {
          var shift = waiter[i].days;
          for (var j = 0; j < shift.length; j++) {
            if (shift[j] == 'Monday') {
              list.Monday.push(waiter[i].username)
              if (list.Monday.length >= 3) {
                color = 'green';
                msg = 'No more waiters needed'
              } else if (list.Monday.length > 3) {
                color = 'orange';
                msg = "Looks like we've overbooked"
              } else if (list.Monday.length < 3) {
                color = "red";
                msg = "Waiters still needed"
              }
            }

            if (shift[j] == 'Tuesday') {
              list.Tuesday.push(waiter[i].username)
              if (list.Tuesday.length >= 3) {
                color1 = 'green';
                msg1 = 'No more waiters needed'
              } else if (list.Tuesday.length > 3) {
                color1 = 'orange';
                msg1 = "Looks like we've overbooked"
              } else if (list.Tuesday.length < 3) {
                color1 = "red";
                msg1 = "Waiters still needed"
              }
            }
            if (shift[j] == 'Wednesday') {
              list.Wednesday.push(waiter[i].username)
              if (list.Wednesday.length >= 3) {
                color2 = 'green';
                msg2 = 'No more waiters needed'
              } else if (list.Wednesday.length > 3) {
                color2 = 'orange';
                msg2 = "Looks like we've overbooked"
              } else if (list.Wednesday.length < 3) {
                color2 = "red";
                msg2 = "Waiters still needed"
              }
            }
            if (shift[j] == 'Thursday') {
              list.Thursday.push(waiter[i].username)
              if (list.Thursday.length >= 3) {
                color3 = 'green';
                msg3 = 'No more waiters needed'
              } else if (list.Thursday.length > 3) {
                color3 = 'orange';
                msg3 = "Looks like we've overbooked"
              } else if (list.Thursday.length < 3) {
                color3 = "red";
                msg3 = "Waiters still needed"
              }
            }
            if (shift[j] == 'Friday') {
              list.Friday.push(waiter[i].username)
              if (list.Friday.length >= 3) {
                color4 = 'green';
                msg4 = 'No more waiters needed'
              } else if (list.Friday.length > 3) {
                color4 = 'orange';
                msg4 = "Looks like we've overbooked"
              } else if (list.Friday.length < 3) {
                color4 = "red";
                msg4 = "Waiters still needed"
              }
            }
            if (shift[j] == 'Saturday') {
              list.Saturday.push(waiter[i].username)
              if (list.Saturday.length >= 3) {
                color5 = 'green';
                msg5 = 'No more waiters needed'
              } else if (list.Saturday.length > 3) {
                color5 = 'orange';
                msg5 = "Looks like we've overbooked"
              } else if (list.Saturday.length < 3) {
                color5 = "red";
                msg5 = "Waiters still needed"
              }
            }
            if (shift[j] == 'Sunday') {
              list.Sunday.push(waiter[i].username)
              if (list.Sunday.length >= 3) {
                color6 = 'green';
                msg6 = 'No more waiters needed';
              } else if (list.Sunday.length > 3) {
                color6 = 'orange';
                msg6 = "Looks like we've overbooked"
              } else if (list.Sunday.length < 3) {
                color6 = "red";
                msg6 = "Waiters still needed";
              }
            }
          }
        }

        res.render('days', {
          Monday: list.Monday,
          Tuesday: list.Tuesday,
          Wednesday: list.Wednesday,
          Thursday: list.Thursday,
          Friday: list.Friday,
          Saturday: list.Saturday,
          Sunday: list.Sunday,
          color: color,
          msg: msg,
          color1: color1,
          msg1: msg1,
          color2: color2,
          msg2: msg2,
          color3: color3,
          msg3: msg3,
          color4: color4,
          msg4: msg4,
          color5: color5,
          msg5: msg5,
          color6: color6,
          msg6: msg6
        });
      }
    })
  };
  /////////////////////////////////////////////////////////////////////////////
  //functon to reset the waiters days to 0 again
    var reset = function(req, res, next) {
      var list2 = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
      };
      res.render('days' , {
        Monday: list2.Monday,
        Tuesday: list2.Tuesday,
        Wednesday: list2.Wednesday,
        Thursday: list2.Thursday,
        Friday: list2.Friday,
        Saturday: list2.Saturday,
        Sunday: list2.Sunday
      })
    }




  return {
    home,
    index,
    updateOrAdd,
    days,
    reset
  };
}
