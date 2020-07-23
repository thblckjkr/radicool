let fs = require("fs");


const readFile = (path, opts = 'utf8') =>
	new Promise((resolve, reject) => {
		fs.readFile(path, opts, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		 })
	})

exports.handler = async (event, context, callback) => {
	// Solution is to use absolute path using `__dirname`

	let text = await readFile( require.resolve('./generated.json') );
	let data = JSON.parse(text);

	let query = data.find( item => item.name = event.queryStringParameters['character'] );
	query.children = query.children.slice( 0, 20 );

	return callback(null, {
		statusCode: 200,
		body: JSON.stringify(query)
	});
}
