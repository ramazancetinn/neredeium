import React from 'react';
import {Button, Text} from 'native-base';
import {theme} from '../assets/theme';

function CustomButton(props) {
  const {title} = props;

  return (
    <Button style={buttonStyle}>
      <Text>{title}</Text>
    </Button>
  );
}

export default CustomButton;

const buttonStyle = {
  backgroundColor: theme.colors.orange,
  borderRadius: theme.radius.button,
  padding: 10,
};
