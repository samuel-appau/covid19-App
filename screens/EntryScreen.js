import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity,Image, Platform } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";


export default function PhoneAuth({navigation}) {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = {
    apiKey: "AIzaSyAVXoRF91ZadKBshaNuXUTHSNXYADTvUcw",
    authDomain: "covid19-app-47a49.firebaseapp.com",
    databaseURL: "https://covid19-app-47a49.firebaseio.com",
    projectId: "covid19-app-47a49",
    storageBucket: "covid19-app-47a49.appspot.com",
    messagingSenderId: "431634387632",
    appId: "1:431634387632:web:fe49af97765c6541442175",
    measurementId: "G-RDZ8KLNTWX"
  };
  const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: ""}
    : undefined);

  return (
  <View style={{flex:1}}>
    <Image  source={require('../assets/images/covid.jpg')} style={{height:'100%',width:'100%'}}/>

    <View style={{ padding: 20, marginTop: -500}}>
      
     <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={{fontSize:40,fontWeight:'bold',color:'white',marginLeft:40}}>COVID-19 </Text>
      <Text style={{fontSize:40,fontWeight:'bold',color:'white'}}>TRACKER APP</Text>
     
      <Text style={{ marginTop: 15,fontWeight:'bold',fontSize:20  }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10,backgroundColor:'white',height:40,fontSize: 17 }}
        placeholder="+233500228273"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
            
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      <Text style={{ marginTop: 20,fontWeight:'bold',fontSize:20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10,backgroundColor:'white',height:40, fontSize: 20 }}
        editable={!!verificationId}
        placeholder="123456"

        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            navigation.navigate('dash')
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
          onPress={() => showMessage(undefined)}>
          <Text style={{color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      </View>
    </View>
  );
}  