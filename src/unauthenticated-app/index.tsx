import { useState } from 'react'
import { RegisterScreen } from './register'
import { LoginScreen } from './login'
import { Button, Card, Divider, Typography } from 'antd'
import styled from '@emotion/styled'

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    return <Container>
        <ShadowCard>

            <Title> {isRegister ? '请注册': '请登陆'} </Title>

            {error ? <Typography.Text type={"danger"}>{error.message}</Typography.Text> : null}

            { isRegister ? <RegisterScreen onError={setError}/> : <LoginScreen onError={setError}/> }

            <Divider/>

            <LongButton onClick={ () => setIsRegister(!isRegister) }>
                { isRegister ? "did u have accent？click this!" : "switch to register" }
            </LongButton>
        </ShadowCard>
    </Container>
}

export const LongButton = styled(Button)`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem;
  border-radius: .3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, .1) 0 0 10px;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`