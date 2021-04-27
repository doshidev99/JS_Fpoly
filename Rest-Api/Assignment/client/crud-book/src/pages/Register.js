import { Button, Form, Input, notification, Row } from 'antd';
import { useHistory } from "react-router-dom";
import AuthApi from '../services/AuthApi';



const layout = {
	labelCol: {
		span: 8,
		offset: 8,

	},
	wrapperCol: {
		span: 8,
		offset: 8,
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 8
	},
	style: {
		display: 'flex',
		justifyContent: 'center'
	}
};

const Register = () => {

	let history = useHistory();

	const onFinish = (values) => {
		AuthApi.register(values).then(({ status, data }) => {
			if (status === 200 ) {
				notification.success({
					key: 'register',
					message: data.message
				})
				history.push('/login')
			} else {
				notification.error({
					key: 'register',
					message: 'Please try again!'
				})
			}

		})
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			{...layout}
			name="basic"
			initialValues={{
				remember: true,
			}}
			layout="vertical"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Username"
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your username!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input.Password />
			</Form.Item>


			<Form.Item {...tailLayout}>
				<Row justify="space-around">
					<Button type="primary" onClick={() => history.push('/login')}>
						Login
        </Button>
					<Button type="danger" htmlType="submit">
						Register
        </Button>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default Register