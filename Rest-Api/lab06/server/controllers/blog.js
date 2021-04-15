// exports.getPosts = (req, res, next) => {
// 	res.status(200).json({
// 		posts: [{ title: 'first post', content: ' this is the first post!' }]
// 	})
// }

// exports.getPostById = (req, res, next) => {
// 	res.status(200).json({
// 		posts: [{ title: 'first post', content: ' this is the first post!' }]
// 	})
// }

// exports.createPost = (req, res, next) => {
// 	const { title = 'default title', content = 'default-content' } = req.body

// 	res.status(201).json({
// 		message: 'Post created successfully!',
// 		posts: {
// 			id: new Date().toISOString(),
// 			title,
// 			content
// 		}
// 	})
// }

// exports.deletePost = (req, res, next) => {
// 	const { title = 'default title', content = 'default-content' } = req.body

// 	res.status(201).json({
// 		message: 'Post created successfully!',
// 		posts: {
// 			id: new Date().toISOString(),
// 			title,
// 			content
// 		}
// 	})
// }

// exports.updatePost = (req, res, next) => {
// 	const { title = 'default title', content = 'default-content' } = req.body

// 	res.status(201).json({
// 		message: 'Post created successfully!',
// 		posts: {
// 			id: new Date().toISOString(),
// 			title,
// 			content
// 		}
// 	})
// }



const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
	// res.setHeader("Access-Control-Allow-Origin", "*");

	Post.findAll()
		.then(posts =>
			res.status(200)
				.json({ message: `Fetched posts successfully.`, posts })
		)
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}


exports.getPostById = (req, res, next) => {
	const { postId } = req.query;
	Post.findByPk(postId)
		.then(post => {
			if (!post) {
				const error = new Error('find not found!');
				error.statusCode = 404;
				throw error;
			}
			res.status(200)
				.json({ message: `Fetched post detail successfully.`, post })
		}

		)
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}

exports.createPost = (req, res, next) => {

	const { title = 'test-create-post', content = 'test-content-post' } = req.body

	const post = new Post({ title, content, create_date: new Date().toISOString() })

	post.save()
		.then(r => {
			res.status(201)
				.json({ message: `Create new a post successfully.`, post: r })
		})
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}

exports.deletePost = (req, res, next) => {
	const { postId } = req.query;
	Post.destroy({
		where: {
			postId
		}
	})
		.then(() => {
			res.status(201).json({
				message: `Delete a blog successfully.`
			})
		})
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}