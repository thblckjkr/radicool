const readline = require('readline');
const fs = require('fs');

// Convert radkfile to parent->childs association
var nodes = [];

let i = 0;
fs.readFile('data/kradfile3', 'utf-8', function (err, content) {
	var parent;
	if (err) {
		console.log("err"+err); return;
	}

	lines = content.split('\n');
	lines.some(line => {
		i++; if(i > 60) return true;

		if ( line.indexOf('#') !== 0 ){
			let items = line.split(' ');
			child = items[0];

			characters = items.slice(2);
			characters.forEach(parent => {
				index = nodes.findIndex( node => node.name == parent );

				if (index == -1) {
					nodes.push({ name: parent, children : [ { name: child, value: 1 } ] } );
				}else{
					nodes[index].children.push( { name: child, value: 1 } );
				}

				// characters.forEach( (character) => nodes[index].children.push( { name: character, value: 1 }  ));
			});
		}
	});
	console.log(nodes);
	var save = fs.writeFile('public/generated.json', JSON.stringify(nodes), () => {});
});

