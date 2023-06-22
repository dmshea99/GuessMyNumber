import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function StartGameScreen(){
    return (
        <View style= {styles.inputContainer}>
           <TextInput style={styles.numberInput} maxLength={2} /> 
           <PrimaryButton>Reset</PrimaryButton>
           <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
    
     
        padding: 16,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 12,
       
        marginTop: 100,
        elevation: 4, // for Android
        shadowColor: 'black', // for Ios
        shadowOffset: { width: 0, height: 2}, // IOS
        shadowRadius: 6,
        shadowOpacity: .25
        
    },
    numberInput: {
        height: 50,
        color: '#ddb52f',
        fontSize: 32,
        width: 80,
       
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 3,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    }
})