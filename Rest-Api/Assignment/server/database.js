const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let _db;

MongoClient.connect('mongodb://localhost:27017/manageBooks', { useNewUrlParser: true })
	.then(client => {
		console.log('connected!');
		_db = client.db();
	}).catch(err => {
		console.log(err);
		throw err;
	});


const getDb = () => {
	if (_db) {
		return _db;
	}
	throw 'No database found!'
}

exports.getDb = getDb;