import './App.css'
import socketIO from 'socket.io-client'
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const socket = socketIO.connect('http://127.0.0.1:5000')

function App() {

    const Layout = styled.div`
      width: 100%;
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    `
    const Content = styled.main`
      width: 100%;
    `
    const ContentLayout = styled.div`
      width: 100%;
      display: inline-flex;
    `
    const Header = styled.header`
      width: 100%;
      grid-row: 1;
      height: 50px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 10px;
      padding: 5px 0;
      display: flex;
    `
    const Aside = styled.aside`
      width: 300px;
    `


  return (
      <Layout>
          <Header>
              <img src="/vite.svg" alt=""/>
          </Header>
          <ContentLayout>
              <Aside>
                  <ul>
                      <li>fdf</li>
                  </ul>
              </Aside>
              <Content>
                  <Outlet/>
              </Content>
          </ContentLayout>
      </Layout>
  )
}

export default App
