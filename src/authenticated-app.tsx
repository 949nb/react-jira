import { ProjectListScreen } from './screens/project-list'
import { useAuth } from './context/auth-context'
import styled from '@emotion/styled'
import { Row } from './components/lib'
import { Button, Dropdown, Menu } from 'antd'

export const AuthenticatedApp = () => {
    const {logout, user} = useAuth()
    return <Container>
        <PageHeader between={ true }>
            <HeaderLeft gap={ true }>
                <h2>Logo</h2>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown
                    overlay={
                        <Menu>
                            <Menu.Item key={ 'logout' }>
                                <Button type={"link"} onClick={ logout }>登出</Button>
                            </Menu.Item>
                        </Menu>
                    }
                >
                    <Button type={"link"} onClick={ e => e.preventDefault() }>
                        Hi, { user?.name }
                    </Button>
                </Dropdown>
            </HeaderRight>
        </PageHeader>
        <Main>
            <ProjectListScreen/>
        </Main>
    </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-areas: 
"header"
"main";
  height: 100vh;
`

const PageHeader = styled(Row)`
  grid-area: header;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled.div`
`

const Main = styled.main`
  grid-area: main;
`