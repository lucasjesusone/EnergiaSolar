import React, {useEffect, useState} from 'react';
import { Text, View, Button,TextInput } from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import styles from '../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'





export default function ClientsScreen() {
    const [text, setText] = React.useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [cpf, setCpf] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [zipCode, setZipCode] = useState("");
    return (
      <>
    <ScrollView>
      <View >
      <Text style={styles.label}>Dados Pessoais</Text>
      <ButtonGroup
          containerStyle={styles.buttonGroup}
          buttons={['Pessoa Física', 'Pessoa Jurídica']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
        />
          <TextInput
              label={selectedIndex == 0 ? 'Digite seu Nome Completo' : 'Digite sua Razão Social'}
              placeholderTextColor= '#333'
              placeholder={selectedIndex == 0 ? 'Digite seu Nome Completo' : 'Digite sua Razão Social'}
              style={styles.input}
            />
             <TextInputMask
              label={selectedIndex == 0 ? 'Digite seu CPF' : 'Digite seu CNPJ'} 
              placeholder={selectedIndex == 0 ? 'Digite seu CPF' : 'Digite seu CNPJ'} 
              placeholderTextColor= '#333'
              type={selectedIndex == 0 ? 'cpf' : 'cnpj'}
              value={selectedIndex == 0 ? cpf : cnpj}
              style={styles.input}
              onChangeText={selectedIndex == 0 ? text => setCpf(text) : text => setCnpj(text)}
            />
             <TextInput
              label={selectedIndex == 0 ? 'Digite seu RG' : 'Digite sua IE'} 
              placeholder={selectedIndex == 0 ? 'Digite seu RG' : 'Digite sua Inscrição Estadual'} 
              placeholderTextColor= '#333'
              required
              style={styles.input}
            />
            <TextInput
              label={'Email'}
              placeholderTextColor= '#333'
              placeholder='Digite seu email'
              style={styles.input}
            />
             <TextInputMask
              label={'Contato'}
              placeholder='Digite seu Telefone'
              placeholderTextColor= '#333'
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true
              }}
              style={styles.input}
              value={cellphone}
              onChangeText={text => setCellphone(text)}
            />
      </View>
  
      
      <View >
      <Text style={styles.label}>Endereço</Text>
      <ButtonGroup
          containerStyle={styles.buttonGroup}
          buttons={['Residêncial', 'Comercial']}
          selectedIndex={selectedAddress}
          onPress={(value) => {
            setSelectedAddress(value);
          }}
        />
          <TextInput
              label={selectedAddress == 0 ? 'Logradouro Residêncial' : 'Logradouro Comercial'} 
              placeholder={selectedAddress == 0 ? 'Logradouro Residêncial' : 'Logradouro Comercial'} 
              placeholderTextColor= '#333'
              style={styles.input}
            />
             <TextInput
              label={selectedAddress == 0 ? 'Número Residêncial' : 'Número Comercial'} 
              placeholder={selectedAddress == 0 ? 'Número Residêncial' : 'Número Comercial'} 
              placeholderTextColor= '#333'
              required
              style={styles.input}
            />
             <TextInput
              label={selectedAddress == 0 ? 'Complemento Residêncial' : 'Complemento Comercial'} 
              placeholder={selectedAddress == 0 ? 'Complemento Residêncial' : 'Complemento Comercial'} 
              placeholderTextColor= '#333'
              required
              style={styles.input}
            />
            <TextInput
              label={selectedAddress == 0 ? 'Bairro Residêncial' : 'Bairro Comercial'} 
              placeholder={selectedAddress == 0 ? 'Bairro Residêncial' : 'Bairro Comercial'} 
              placeholderTextColor= '#333'
              style={styles.input}
            />
            <TextInputMask
              label={selectedAddress == 0 ? 'CEP Residêncial' : 'CEP Comercial'} 
              placeholder={selectedAddress == 0 ? 'CEP Residêncial' : 'CEP Comercial'} 
              placeholderTextColor= '#333'
              type={'zip-code'}
              value={zipCode}
              onChangeText={text => setZipCode(text)}
              style={styles.input}
            />
             <TextInput
              label={selectedAddress == 0 ? 'Selecione o Estado Residêncial' : 'Selecione o Estado Comercial'} 
              placeholder={selectedAddress == 0 ? 'Selecione o Estado Residêncial' : 'Selecione o Estado Comercial'} 
              placeholderTextColor= '#333'
              required
              style={styles.input}
            />
             <TextInput
              label={selectedAddress == 0 ? 'Selecione a Cidade Residêncial' : 'Selecione a Cidade Comercial'} 
              placeholder={selectedAddress == 0 ? 'Selecione a Cidade Residêncial' : 'Selecione a Cidade Comercial'} 
              placeholderTextColor= '#333'
              required
              style={styles.input}
            />
      </View>
      <Button title='Cadastrar Usuário'/>
      </ScrollView>
    </>
    );
  }