import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  input: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 12,
    color: '#000',
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  container: {
    width: '80%',
    borderRadius: 10,
    marginBottom: 10
  },
  borderError: {
    borderWidth: 1,
    borderColor: 'rgba(200,0,50,1)'
  },
  errorMessage: {
    fontSize: 12,
    color: 'rgba(200,0,50,1)',
    textAlign: 'center',
    marginTop: 5
  },
  buttonGroup: {
    borderRadius: 8
  }
})

export default styles