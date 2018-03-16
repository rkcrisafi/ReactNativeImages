import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onSubmitEditing, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        onSubmitEditing={onSubmitEditing}
        autoCapitalize="none"
      />
    </View>
  )
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export default Input;
