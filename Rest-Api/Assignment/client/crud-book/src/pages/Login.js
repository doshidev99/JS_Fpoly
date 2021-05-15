import { Button, Form, Input, notification, Row } from 'antd';
import { useHistory } from "react-router-dom";
import AuthApi from '../services/AuthApi';



const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 8,
	},
};
const tailLayout = {
	wrapperCol: {
		// offset: 8,
		span: 8
	},
	style: {
		display: 'flex',
		justifyContent: 'center'
	}
};

const Login = () => {

	let history = useHistory();

	const onFinish = (values) => {
		AuthApi.login(values).then(({ data }) => {
			if (data.payload.length > 0) {
				notification.success({
					key: 'login',
					message: data.message
				})
				localStorage.setItem('token', data.token)
				history.push('/')
			} else {
				notification.error({
					key: 'login',
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
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			style={{ marginTop: 200 }}
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
					<Button type="primary" htmlType="submit">
						Login
        </Button>
					<Button type="danger" onClick={() => history.push('/register')}>
						Register
        </Button>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default Login