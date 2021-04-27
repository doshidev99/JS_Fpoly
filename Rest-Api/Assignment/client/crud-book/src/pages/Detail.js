import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from "antd";
import React, { createElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookApi from '../services/BookApi';
import CommentApi from '../services/CommentApi';


const Detail = props => {

	const [state, setState] = useState({
		isLoading: true,
		book: [],
		comment: []
	});

	const { id } = useParams();

	useEffect(() => {
		BookApi.getBook(id).then(({ data }) => {
			setState((preState) => ({ ...preState, isLoading: false, book: data.payload }))
		})
		CommentApi.getComment(id).then(({ data }) => {
			setState((preState) => ({ ...preState, isLoading: false, comment: data.payload }))
		})
	}, [id])

	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [action, setAction] = useState(null);

	const like = () => {
		setLikes(1);
		setDislikes(0);
		setAction('liked');
	};

	const dislike = () => {
		setLikes(0);
		setDislikes(1);
		setAction('disliked');
	};

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likes}</span>
			</span>
		</Tooltip>,
		<Tooltip key="comment-basic-dislike" title="Dislike">
			<span onClick={dislike}>
				{React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
				<span className="comment-action">{dislikes}</span>
			</span>
		</Tooltip>,
		<span key="comment-basic-reply-to">Reply to</span>,
	];
	return (
		<div style={{ padding: 50 }}>
			{
				state.book.map(b => (
					<div key={b._id}>
						<div>
							Title: <b>{b.title}</b>
						</div>
						<div>
							Author: <b>{b.author}</b>
						</div>
						<div>
							Views: <b>{b.review_count}</b>
						</div>
						<div>
							Rate: <b>{b.average_score}</b>
						</div>

					</div>
				))
			}

			{
				state.comment.map(c => (
					<>
						<Comment
							author={<>Han Solo</>}
							actions={actions}
							avatar={
								<Avatar
									src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
									alt="Han Solo"
								/>
							}
							content={c.comment} />
					</>
				))
			}

		</div>
	)
}

Detail.propTypes = {

}

export default Detail
