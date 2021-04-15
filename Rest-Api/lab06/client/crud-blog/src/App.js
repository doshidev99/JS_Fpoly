import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Layout, Menu } from 'antd';

import Blog from './pages/Blog'

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/home"> Home </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Switch>
        <Route path="/">
          <Layout>
            <Content className="site-layout" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Blog />
            </Content>
          </Layout>
        </Route>
      </Switch>
      <Footer style={{ textAlign: 'center' }}>Web503 - pd03335</Footer>

    </Router>
  )
}

export default App
