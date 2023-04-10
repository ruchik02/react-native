import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../Screens/Dashboard';

const Loginform=()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agree,setAgree]=useState(false);
  const navigation = useNavigation();

  function handleLogin() {
    // handle login logic
    if(username==='Ruchika'&& password==='ruchika'){
        Alert.alert(`Thank You ${username}`);
        navigation.navigate('Dashboard', { username: username });
    }else if(!username || !password){
        Alert.alert('Error', 'Username and password are required.');
    }
    else{
        Alert.alert(`username and password is not coreect`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
          value={agree}
          onValueChange={() => {
            setAgree(!agree);
          }}
          color={agree?"#4630EB":undefined}
        />
        <Text style={styles.label}>I have read and agreed with the TC.</Text>
      </View>
      <TouchableOpacity 
      style={[styles.button,
        {backgroundColor:agree?"#4630EB":"grey" },
        ]}
        disabled={!agree}
       onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems:'center'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Loginform;