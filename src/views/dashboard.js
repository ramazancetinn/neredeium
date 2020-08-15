import React from 'react';
import {Container, Header, Content} from 'native-base';
import CustomButton from '../components/button';

function Dashboard() {
  return (
    <Container>
      <Header />
      <Content style={{marginLeft: 20, marginTop: 20}}>
        <CustomButton title="Save" />
      </Content>
    </Container>
  );
}

export default Dashboard;
