import React, { useEffect, useState } from 'react';

import { Row, Col, Table, Form, Input, Button, notification, Typography } from 'antd';

import UserApi from "../../services/axios";

const Blog = () => {

	const [state, setState] = useState({});

	useEffect(() => {
		UserApi.getPosts().then(({ data, status }) => setState(() => data))
	}, []);



	const handleDelete = (postId) => {
		UserApi.deletePost(postId).then(({ data, status }) => notification.success({
			key: "delete",
			message: data.message,
		})).then(() => {
			UserApi.getPosts().then(({ data, status }) => setState(() => data))
		});
	}

	const columns = [
		{
			title: 'id',
			dataIndex: 'postId',
			key: 'id',
			render: postId => <p>{postId}</p>,
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: title => <p>{title}</p>,
		},
		{
			title: 'Content',
			dataIndex: 'content',
			key: 'content',
			render: content => <p>{content}</p>,
		},
		{
			title: 'Action',
			dataIndex: 'postId',
			key: 'content',
			render: (postId) => (<>
				<Button danger onClick={() => handleDelete(postId)}>Delete</Button>
				<Button type="primary" style={{ marginLeft: 5 }}>Sửa</Button>
			</>)
		},
	];

	const onFinish = (values) => {
		UserApi.addNewPost(values).then(({ data, status }) => notification.success({
			key: "delete",
			message: data.message,
		})).then(() => {
			UserApi.getPosts().then(({ data, status }) => setState(() => data))
		});
	}

	return (
		<Row gutter={24} style={{ width: '100%', marginTop: 20 }}>
			<Col xs={16}>
				<Table columns={columns} dataSource={state.posts} />
			</Col>
			<Col xs={8}>
				<Typography.Title level={4}>Add New Post</Typography.Title>
				<Form
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						name="title"
						rules={[{ required: true, message: 'Please input your title!' }]}
					>
						<Input placeholder="Your title" />
					</Form.Item>
					<Form.Item
						name="content"
						rules={[{ required: true, message: 'Please input your content!' }]}
					>
						<Input.TextArea placeholder="Your Content" />
					</Form.Item>
					<Form.Item >
						<Button type="primary" htmlType="submit"> add </Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

Blog.propTypes = {

}

export default Blog
