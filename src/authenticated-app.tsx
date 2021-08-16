import { ProjectListScreen } from './screens/project-list'
import { useAuth } from './context/auth-context'
import styled from '@emotion/styled'
import { Row } from './components/lib'

export const AuthenticatedApp = () => {
    const {logout} = useAuth()
    return <Container>
        <PageHeader between={true}>
            <HeaderLeft gap={true}>
                <h2>Logo</h2>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <button onClick={ logout }>登出</button>
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
`

const HeaderLeft = styled(Row)``
const HeaderRight = styled.div`
`

const Main = styled.main`
  grid-area: main;
`