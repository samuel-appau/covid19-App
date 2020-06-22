import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet,ScrollView, TouchableOpacity, Platform } from "react-native";
import MenuButton from '../components/Menu'
import SearchButton from '../components/SearchButton'

export default function CovidInformation({navigation}){

return(
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',borderBottomColor:"ash",borderBottomWidth:1,marginBottom:10,marginTop:32}}>
        <MenuButton navigation={navigation} style={{marginLeft:-10}}/>
             <Text style={{fontWeight:'bold',fontSize:25,marginLeft:60,marginTop:-8,marginBottom:5}}>Covid Information</Text>

        </View>

        <ScrollView>
            <View>
        <Text style={{fontWeight:"bold",fontSize:19}}>What is Covid-19</Text>
        <Text style={{ fontSize:14,color: '#000',textAlign: 'left',fontFamily:"Arial"}}>

        COVID-19 is the infectious disease caused by the most
        recently discovered coronavirus. This new virus and 
        disease were unknown before the outbreak began in Wuhan,
        China, in December 2019.COVID-19 is now a pandemic 
        affecting many countries globally.
        </Text>
      

        <Text style={{fontWeight:"bold",fontSize:19,marginTop:16}}>Symptoms of Covid</Text>
        <Text style={{fontSize:14,color: '#000',textAlign: 'left',fontFamily:"Arial"}}>
        The most common symptoms of COVID-19 are fever, 
        dry cough,and tiredness. Other symptoms that 
        are less common and may affect some patients 
        include aches and pains, nasal congestion,
        headache, conjunctivitis, sore throat, diarrhea,
        loss of taste or smell or a rash on skin or
        discoloration of fingers or toes.
        These symptoms are usually mild and begin gradually. 
        Some people become infected but only have very mild symptoms
        </Text>


        <Text style={{fontWeight:"bold",fontSize:19,marginTop:16}}>Prevention</Text>
        <Text style={{ fontSize:14,color: '#000',textAlign: 'left',fontFamily:"Arial"}}>
        Regularly and thoroughly clean your hands 
        with an alcohol-based hand rub or wash them 
        with soap and water.
        Why? Washing your hands with soap and water or 
        using alcohol-based hand rub kills viruses that
        may be on your hands.

        Maintain at least 1 metre distance between
        yourself and others.
        Why? When someone coughs, sneezes, or speaks they
        spray small liquid droplets from their nose or mouth
        which may contain virus. If you are too close,you can 
        breathe in the droplets, including the COVID-19 virus 
        if the person has the disease.

        Avoid going to crowded places. 
        Why? Where people come together in crowds,
        you are more likely to come into close contact with 
        someone that has COVID-19 and it is more difficult to
        maintain physical distance of 1 metre.

        Avoid touching eyes, nose and mouth. 
        Why? Hands touch many surfaces and can pick up viruses.
        Once contaminated, hands can transfer the virus to your eyes, 
        nose or mouth. From there, the virus can enter your body and
        infect you.

        Make sure you, and the people around you, follow good
        respiratory hygiene.This means covering your mouth and 
        nose with your bent elbow or tissue when you cough 
        or sneeze. Then dispose of the used tissue immediately 
        and wash your hands.
        Why? Droplets spread virus. By following good respiratory hygiene,
        you protect the people around you from viruses such as cold, 
        flu and COVID-19.

        Stay home and self-isolate even with minor symptoms 
        such as cough,headache, mild fever, until you recover.
        Have someone bring you supplies. If you need to leave your house, 
        wear a mask to avoid infecting others. 
        Why? Avoiding contact with others will protect them
        from possible COVID-19 and other viruses.
        </Text>
        </View>

        </ScrollView>

  </View>
)

}

