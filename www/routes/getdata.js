var mysql = require('mysql');
/*var connection = mysql.createConnection({ host: 'localhost', user: 'munjala',
    password: 'artika12', database: 'cbbdb'});*/

var openConnection = function() {
    return mysql.createConnection({ host: 'localhost', user: 'munjala',
        password: 'artika12', database: 'cbbdb'});
};

exports.onemessage = function(req, res){
    var finalMessages = new Array();
    console.log("Entered");
    var Id = req.params.id;
    if ((connection = openConnection())) {
        console.log("Connection Open");
        var queryString = "select allmessages, registerdate from participants where ID=" + Id;
        connection.query(queryString, function(err, rows, fields) {
            console.log("Error check");
            if (err) throw err;
            console.log("After throw");
            var registerDate = rows[0].registerdate;
            if (rows[0].allmessages) {
                console.log("entered allmessages");
                queryString = "select * from outbound a, user" + Id +" b where a.ID = b.ID";
                if ((connection = openConnection())) {
                    connection.query(queryString, function(err, rows, fields) {
                        if (err) throw err;
                        rows.unshift({
                            "ID": 27,
                            "subject": "Welcome",
                            "message": "Welcome to Bright Beginnings.",
                            "releasedate": "2013-11-22T16:00:00.000Z",
                            "directmessage": 1,
                            "inflag": 0,
                            "nextmessage": -1,
                            "day": 2,
                            "lastmessage": 0,
                            "inb": null,
                            "outb": 1,
                            "registerday": 2
                        });
                        res.send(rows);
                    });
                    connection.end();
                }
            } else {
                console.log("Entered all else");
                queryString = "select * from outbound a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday<=a.day AND a.releasedate<=now()";
                if ((connection = openConnection())) {
                    connection.query(queryString, function(err, rows, fields) {
                        if (err) throw err;
                        if (rows[0] != undefined) {
                            if (rows[rows.length - 1].lastmessage) {
                                console.log("Last Message Check");
                                var abc1 = new Array();
                                var finalRows = new Array();
                                var startDate =new Date(2013, 10, 20);    //Month is 0-11 in JavaScript
                                var thisday = new Date();                        //Get 1 day in milliseconds
                                var one_day=1000*60*60*24
                                var daysSinceStart = ((thisday.getTime() - startDate.getTime())/one_day) % 30;
                                queryString = "select * from outbound a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday>a.day AND a.day<" + daysSinceStart;
                                if ((connection = openConnection())) {
                                    connection.query(queryString, function(err, rows1, fields) {
                                        console.log("Date Check");
                                        if (err) throw err;
                                        finalRows = rows1.slice(0);
                                        finalMessages = rows1.slice(0);
                                        rows1 = rows1.concat(rows);
                                        console.log(rows1.length);
                                        if(rows1.length == 26) {
                                            if ((connection = openConnection())) {
                                                queryString = "update participants set allmessages = true where ID=" + Id;
                                                connection.query(queryString, function(err, rowdata, fields) {
                                                    if (err) throw err;
                                                });
                                            }
                                            connection.end();
                                        }
                                        rows1.unshift({
                                            "ID": 27,
                                            "subject": "Welcome",
                                            "message": "Welcome to Bright Beginnings.",
                                            "releasedate": "2013-11-22T16:00:00.000Z",
                                            "directmessage": 1,
                                            "inflag": 0,
                                            "nextmessage": -1,
                                            "day": 2,
                                            "lastmessage": 0,
                                            "inb": null,
                                            "outb": 1,
                                            "registerday": 2
                                        });
                                        res.send(rows1);
                                        //return rows1;
                                    });
                                }
                                connection.end();
                            } else {
                                console.log("Not last message");
                                rows.unshift({
                                    "ID": 27,
                                    "subject": "Welcome",
                                    "message": "Welcome to Bright Beginnings.",
                                    "releasedate": "2013-11-22T16:00:00.000Z",
                                    "directmessage": 1,
                                    "inflag": 0,
                                    "nextmessage": -1,
                                    "day": 2,
                                    "lastmessage": 0,
                                    "inb": null,
                                    "outb": 1,
                                    "registerday": 2
                                });
                                res.send(rows);
                            }
                        } else {
                            rows.unshift({
                                "ID": 27,
                                "subject": "Welcome",
                                "message": "Welcome to Bright Beginnings.",
                                "releasedate": "2013-11-22T16:00:00.000Z",
                                "directmessage": 1,
                                "inflag": 0,
                                "nextmessage": -1,
                                "day": 2,
                                "lastmessage": 0,
                                "inb": null,
                                "outb": 1,
                                "registerday": 2
                            });
                            res.send(rows);
                        }
                    });
                }
                connection.end();
            }
        });
    }
    console.log("Close");
    connection.end();
};

exports.spanishone = function(req, res){
    var finalMessages = new Array();
    console.log("Entered");
    var Id = req.params.id;
    if ((connection = openConnection())) {
        console.log("Connection Open");
        var queryString = "select allmessages, registerdate from participants where ID=" + Id;
        connection.query(queryString, function(err, rows, fields) {
            console.log("Error check");
            if (err) throw err;
            console.log("After throw");
            var registerDate = rows[0].registerdate;
            if (rows[0].allmessages) {
                console.log("entered allmessages");
                queryString = "select * from outboundspanish a, user" + Id +" b where a.ID = b.ID";
                if ((connection = openConnection())) {
                    connection.query(queryString, function(err, rows, fields) {
                        if (err) throw err;
                        rows.unshift({
                            "ID": 27,
                            "subject": "Welcome",
                            "message": "Welcome to Bright Beginnings.",
                            "releasedate": "2013-11-22T16:00:00.000Z",
                            "directmessage": 1,
                            "inflag": 0,
                            "nextmessage": -1,
                            "day": 2,
                            "lastmessage": 0,
                            "inb": null,
                            "outb": 1,
                            "registerday": 2
                        });
                        res.send(rows);
                    });
                    connection.end();
                }
            } else {
                console.log("Entered all else");
                queryString = "select * from outboundspanish a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday<=a.day AND a.releasedate<=now()";
                if ((connection = openConnection())) {
                    connection.query(queryString, function(err, rows, fields) {
                        if (err) throw err;
                        if (rows[0] != undefined) {
                            if (rows[rows.length - 1].lastmessage) {
                                console.log("Last Message Check");
                                var abc1 = new Array();
                                var finalRows = new Array();
                                var startDate =new Date(2013, 10, 20);    //Month is 0-11 in JavaScript
                                var thisday = new Date();                        //Get 1 day in milliseconds
                                var one_day=1000*60*60*24
                                var daysSinceStart = ((thisday.getTime() - startDate.getTime())/one_day) % 30;
                                queryString = "select * from outboundspanish a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday>a.day AND a.day<" + daysSinceStart;
                                if ((connection = openConnection())) {
                                    connection.query(queryString, function(err, rows1, fields) {
                                        console.log("Date Check");
                                        if (err) throw err;
                                        finalRows = rows1.slice(0);
                                        finalMessages = rows1.slice(0);
                                        rows1 = rows1.concat(rows);
                                        console.log(rows1.length);
                                        if(rows1.length == 26) {
                                            if ((connection = openConnection())) {
                                                queryString = "update participants set allmessages = true where ID=" + Id;
                                                connection.query(queryString, function(err, rowdata, fields) {
                                                    if (err) throw err;
                                                });
                                            }
                                            connection.end();
                                        }
                                        rows1.unshift({
                                            "ID": 27,
                                            "subject": "Bienvenido",
                                            "message": "Bienvenido a Bright Beginnings.",
                                            "releasedate": "2013-11-22T16:00:00.000Z",
                                            "directmessage": 1,
                                            "inflag": 0,
                                            "nextmessage": -1,
                                            "day": 2,
                                            "lastmessage": 0,
                                            "inb": null,
                                            "outb": 1,
                                            "registerday": 2
                                        });
                                        res.send(rows1);
                                        //return rows1;
                                    });
                                }
                                connection.end();
                            } else {
                                console.log("Not last message");
                                rows.unshift({
                                    "ID": 27,
                                    "subject": "Bienvenido",
                                    "message": "Bienvenido a Bright Beginnings.",
                                    "releasedate": "2013-11-22T16:00:00.000Z",
                                    "directmessage": 1,
                                    "inflag": 0,
                                    "nextmessage": -1,
                                    "day": 2,
                                    "lastmessage": 0,
                                    "inb": null,
                                    "outb": 1,
                                    "registerday": 2
                                });
                                res.send(rows);
                            }
                        } else {
                            rows.unshift({
                                "ID": 27,
                                "subject": "Bienvenido",
                                "message": "Bienvenido a Bright Beginnings.",
                                "releasedate": "2013-11-22T16:00:00.000Z",
                                "directmessage": 1,
                                "inflag": 0,
                                "nextmessage": -1,
                                "day": 2,
                                "lastmessage": 0,
                                "inb": null,
                                "outb": 1,
                                "registerday": 2
                            });
                            res.send(rows);
                        }
                    });
                }
                connection.end();
            }
        });
    }
    console.log("Close");
    connection.end();
};

exports.addMessage = function(req, res) {
    var message = req.params.message;
    var id = req.params.email;
    var messageID = req.params.messageID;
    if((connection = openConnection())) {
        var queryString = "update user" + id + " set inb = '" + message + "'  where ID = '" + messageID + "'";
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            var finalMessages = new Array();
            console.log("Entered");
            var Id = req.params.id;
            if ((connection = openConnection())) {
                var queryString = "select allmessages, registerdate from participants where ID=" + Id;
                connection.query(queryString, function(err, rows, fields) {
                    if (err) throw err;
                    var registerDate = rows[0].registerdate;
                    if (rows[0].allmessages) {
                        console.log("entered allmessages");
                        queryString = "select * from outbound a, user" + Id +" b where a.ID = b.ID";
                        connection.query(queryString, function(err, rows, fields) {
                            if (err) throw err;
                            res.send(rows);
                        });
                    } else {
                        console.log("Entered all else");
                        queryString = "select * from outbound a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday<=a.day AND a.releasedate<=now()";
                        connection = openConnection();
                        connection.query(queryString, function(err, rows, fields) {
                            if (err) throw err;
                            if (rows[0] != undefined) {
                                if (rows[rows.length - 1].lastmessage) {
                                    console.log("Last Message Check");
                                    var abc1 = new Array();
                                    var finalRows = new Array();
                                    var startDate =new Date(2013, 10, 20);    //Month is 0-11 in JavaScript
                                    var thisday = new Date();                        //Get 1 day in milliseconds
                                    var one_day=1000*60*60*24
                                    var daysSinceStart = ((thisday.getTime() - startDate.getTime())/one_day) % 30;
                                    queryString = "select * from outbound a, user" + Id + " b, (select registerday from participants where ID= " + Id + ") c where a.ID = b.ID AND c.registerday>a.day AND a.day<" + daysSinceStart;
                                    connection = openConnection();
                                    connection.query(queryString, function(err, rows1, fields) {
                                        console.log("Date Check");
                                        if (err) throw err;
                                        finalRows = rows1.slice(0);
                                        finalMessages = rows1.slice(0);
                                        rows1 = rows1.concat(rows);
                                        console.log(rows1.length);
                                        if(rows1.length == 26) {
                                            queryString = "update participants set allmessages = true where ID=" + Id;
                                            connection.query(queryString, function(err, rowdata, fields) {
                                                if (err) throw err;
                                            });
                                        }
                                        res.send(rows1);
                                        //return rows1;
                                    });
                                    connection.end();
                                } else {
                                    console.log("Not last message");
                                    res.send(rows);
                                }
                            } else res.send();
                        });
                        connection.end();
                    }
                });
            }
            connection.end();
        });
    }
    connection.end();
};

exports.addFeedback = function(req, res) {
    var feedback = req.params.feedback;
    if((connection = openConnection())) {
        var queryString = "insert into feedback (feedback) values('" + feedback + "')";
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.send("Success");
        });
    }
    connection.end();
};

exports.setMessageAsRead = function (req, res) {
    var id = req.params.id;
    var messageID = req.params.messageID;
    if((connection = openConnection())) {
        var queryString = "update user" + id + " set outb = true where ID = " + messageID;
        console.log(queryString);
        connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            queryString = "select * from outbound a, user" + id + " b where a.ID = b.ID";
            connection = openConnection()
            connection.query(queryString, function(err, rows, fields) {
                if (err) throw err;
                console.log(rows[0].message);
                res.send(rows);
            });
            connection.end();
        });
    }
    connection.end();
};

exports.sendGCM = function(req, res){

    var sender = new gcm.Sender('AIzaSyDu7Q4sbbSFsDDbvJhXtNtgjbgh_W4UP04');
    var message = new gcm.Message();
    var id = req.params.id;


    // Value the payload data to send...
    message.addData('message',"You have a new text message");
    message.addData('title','CBB' );
    message.addData('msgcnt',1); // Shows up in the notification in the status bar
    message.addData('soundname','Voicemail.wav'); //Sound to play upon notification receipt - put in the www folder in app
    message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
    message.delay_while_idle = 1;
    var registrationIds = [];
    registrationIds.push(id);
    sender.send(message, registrationIds, 4, function (err, result) {
        if (err) throw err;
        console.log(result);
    });

};

exports.sendAPN = function(req, res){


    var id = req.params.id;

    var myDeviceID = id;
    var myDevice = new apn.Device(myDeviceID);
    var note = new apn.Notification();
    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 1;
    note.sound = "Voicemail.wav";
    note.alert = "You have a new text message";
    note.payload = {'messageFrom': 'CBB'};
    note.device = myDevice;

    var callback = function(errorNum, notification){
        console.log('Error is: %s', errorNum);
        console.log("Note " + notification);
    }

    var root = process.cwd();
    var options = {
        gateway: 'gateway.push.apple.com', // this URL is different for Apple's Production Servers and changes when you go to production
        errorCallback: callback,
        cert: root + '/routes/CBBProdPushCertAartiMac.pem',
        key:  root + '/routes/CBBProdPushKeyAartiMac.pem',
        passphrase: 'Agil33h3alth',
        port: 2195,
        enhanced: true,
        cacheLength: 100
    };

    var apnsConnection = new apn.Connection(options);

    apnsConnection.pushNotification(note, myDevice);

};
