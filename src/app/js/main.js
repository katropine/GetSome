/**var fs = require('fs');
var gui = require('nw.gui');

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./data/db.sqlite');
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS schadule (_id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, repeat INTEGER, created DATETIME)");
});




function fetch(){
	var data = [];
	db.serialize(function(){
		db.each("SELECT * FROM schadule", function(err, row) {
			data.push(row);
			return data;
		});

	});
	
}



function save(){
	db.serialize(function() {
		var stmt = db.prepare("INSERT INTO schadule (title,repeat,created) VALUES (?,?,?)");
		stmt.run([form.title, form.repeat, new Date()]);
		stmt.finalize();
		
	});
}


var data = fetch();
document.write(data[0].title);
*/

// /***********************************************************************/





// // require(['domReady!'], function (document) {
// // 	ng.bootstrap(document, ['app']);
// // });
// /***********************************************************************/
// // function saveText(){
// // 	var text = document.getElementById('title').value;
// // 	$('#message').html(text);
// // }



// // Create a tray icon
//     var tray = new gui.Tray({
//         icon : 'icon.png',
//         title: 'App Tray'
//     });
 
//     // Give it a menu
//     var menu = new gui.Menu();
//     menu.append(new gui.MenuItem({
//         type: 'checkbox',
//         label: 'Are you sure?'
//     }));
//     tray.menu = menu;



//exec("/home/kriss/Desktop/node/getsome/node-webkit-v0.10.3-linux-x64/project/getsome/sails lift", puts);


// var moment = require('moment');
// //var sys = require('sys');
// var sails = require('sails');
// var gui = require('nw.gui');
// var win = gui.Window.get();



    
// win.on('loaded', function() { 
//     // Start sails and pass it command line argument
//     sails.lift(require('optimist').argv);
// });

// win.on('close', function() {
// 	//  sails.lift(options, function(err, sails) {
// 	//    // Do some stuff with sails, then...
// 	//    sails.lower();
// 	// });

// 	this.close(true);
// });