const readline = require('readline');
const fs = require('fs');

// Convert radkfile to parent->childs association
var nodes = [];

let i = 0;
fs.readFile('data/radkfile3', 'utf-8', function (err, content) {
	var parent;
	if (err) {
		console.log("err"+err); return;
	}

	lines = content.split('\n');
	lines.some(line => {
		i++; if(i > 46) return true;

		if ( line.indexOf('$') === 0 ) {
			parent = line.substring(2, 3);
			nodes.push({ name: parent, children : []});
		} else if ( line.indexOf('#') !== 0 ){
			let characters = line.split('');
			index = nodes.findIndex( node => node.name == parent );
			characters.forEach( (character) => nodes[index].children.push( {name: character, value: 1}  ));
		}
	});
	console.log(nodes);
	var save = fs.writeFile('public/generated.json', JSON.stringify(nodes), () => {});
});

