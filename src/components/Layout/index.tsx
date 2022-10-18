import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const items = [
    {
        key: '1',
        label: (<a href='/'>Todo List</a>)
    },
    {
        key: '2',
        label: 'Quản lý chi tiêu',
        children: [
            { label: (<a href='/nhap-chi-tieu'>Nhập chi tiêu</a>), key: 'submenu-item-1' },
            { label: (<a href="/lich-su-thang">Lịch sử chi tiêu hàng tháng</a>), key: 'submenu-item-2' },
            { label: (<a href="">Thống kê chi tiêu</a>), key: 'submenu-item-3' },

        ],
    }
]
function App() {
    
   
    return (

        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items={items}
                />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                {/* Content */}
                <Outlet context={items}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout >
    )
};

export default App;