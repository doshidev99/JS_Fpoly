import { LogoutOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useHistory } from 'react-router';

export const AppHeader = () => {

	const history = useHistory();

	const handleLogout = () => {
		let token = !!localStorage.getItem('token');
		if (token) {
			localStorage.removeItem('token')
			history.push('/login')
			notification.warn({
				key: 'logout',
				message: 'LOGOUT!'
			})
		}
		return
	}

	return (
		<div style={{
			display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
			fontSize: 30, padding: 10, cursor: 'pointer'
		}}
			onClick={handleLogout}
		>
			<p style={{
				margin: 0,
				marginRight: 10
			}}>  Logout </p>
			<LogoutOutlined />
		</div>
	)
}
