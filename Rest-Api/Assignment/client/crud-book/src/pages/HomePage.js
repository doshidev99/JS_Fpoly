import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Form, Input, Button, notification } from "antd";

import { Link } from 'react-router-dom'

import BookApi from '../services/BookApi'

import { useHistory } from "react-router-dom";

const { Search } = Input;
const HomePage = props => {
	let history = useHistory();

	const [state, setState] = useState({
		isLoading: true,
		listBook: []
	});

	useEffect(() => {
		BookApi.getBooks().then(({ data }) => {
			setState((preState) => ({ ...preState, isLoading: false, listBook: data.payload }))
		})
	}, [])


	const columns = [
		{
			title: 'Title',
			dataIndex: ['title', '_id'],
			key: 'title',
			render: (_, record) => (
				<Link to={`/${record._id}`} >
					{record.title}
				</Link >
			)
		},
		{
			title: 'Author',
			dataIndex: 'author',
			key: 'author',
		},
		{
			title: 'Year',
			dataIndex: 'year',
			key: 'year',
		},
		{
			title: 'Action',
			dataIndex: '_id',
			key: '_id',
			render: (bookId) => (<>
				<Button danger onClick={() => handleDelete(bookId)}>Delete</Button>
				{/* <Button type="primary" style={{ marginLeft: 5 }}>Sửa</Button> */}
			</>)
		},
	];


	const handleDelete = (id) => {
		BookApi.deleteBook(id).then(({ data, message }) => notification.success({
			key: "delete",
			message: data.message,
		})).then(() => {
			BookApi.getBooks().then(({ data, status }) => setState((preState) => ({ ...preState, isLoading: false, listBook: data.payload }))
			)
		});
	}

	const onFinish = (value) => {
		BookApi.createBook({ ...value, isbn: 'B01' }).then(({ data }) => notification.success({
			key: "create",
			message: data.message,
		})).then(() => {
			BookApi.getBooks().then(({ data, status }) => setState((preState) => ({ ...preState, isLoading: false, listBook: data.payload }))
			)
		});
	}

	const onSearch = (value) => {
		BookApi.searchBook(value).then(({ data }) => {
				// eslint-disable-next-line no-console
			console.log(data.payload, '<----');
			setState((preState) => ({ ...preState, isLoading: false, listBook: data.payload }))
		})

	}

	const flag = !!localStorage.getItem('token')

	if (!flag) {
		history.push('/login')
	}

	return (
		<div style={{ padding: 50 }}>
			<Row gutter={24}>
				<Col md={16}>
					<Search placeholder="Search The book" onSearch={onSearch} enterButton style={{ marginBottom: 20 }} />

					<Table loading={state.isLoading} dataSource={state.listBook} columns={columns} />
				</Col>


				<Col md={8}>
					<Form
						name="basic"
						layout="vertical"
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item label="Title" name="title">
							<Input />
						</Form.Item>
						<Form.Item label="Author" name="author">
							<Input />
						</Form.Item>
						<Form.Item label="Year" name="year">
							<Input />
						</Form.Item>
						<Form.Item label="Book Code" name="isbn">
							<Input />
						</Form.Item>

						<Button type="primary" htmlType="submit">Add</Button>
					</Form>
				</Col>
			</Row>

		</div>
	)
}

HomePage.propTypes = {

}

export default HomePage
