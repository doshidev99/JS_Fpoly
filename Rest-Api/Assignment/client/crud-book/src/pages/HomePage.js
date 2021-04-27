import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Form, Input, Button, notification } from "antd";

import BookApi from '../services/BookApi'

const HomePage = props => {

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
			dataIndex: 'title',
			key: 'title',
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
				<Button type="primary" style={{ marginLeft: 5 }}>Sửa</Button>
			</>)
		},
	];


	const handleDelete = (id) => {
		BookApi.deleteBook(id).then(({ data, status }) => notification.success({
			key: "delete",
			message: data.message,
		})).then(() => {
			BookApi.getBooks().then(({ data, status }) => setState((preState) => ({ ...preState, isLoading: false, listBook: data.payload }))
			)
		});
	}


	return (
		<div style={{ padding: 50 }}>
			<Row gutter={24}>
				<Col md={16}>
					<Table loading={state.isLoading} dataSource={state.listBook} columns={columns} />
				</Col>

				<Col md={8}>
					<Form>
						<Form.Item label="Title">
							<Input />
						</Form.Item>
						<Form.Item label="Author">
							<Input />
						</Form.Item>
						<Form.Item label="Year">
							<Input />
						</Form.Item>

						<Button type="primary">Add</Button>
					</Form>
				</Col>
			</Row>

		</div>
	)
}

HomePage.propTypes = {

}

export default HomePage
