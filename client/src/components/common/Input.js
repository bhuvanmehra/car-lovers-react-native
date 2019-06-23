import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  console.log('label', label);

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    borderColor: '#ebebeb',
    borderWidth: 2,
    color: '#000',
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    lineHeight: 23,
    height: 40,
  },
  labelStyle: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },
  containerStyle: {
    marginTop: 10,
    marginBottom: 10,
  }
};

export { Input };
