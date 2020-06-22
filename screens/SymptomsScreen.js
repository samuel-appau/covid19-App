import React,{useState} from 'react';
import { ScrollView, StyleSheet,Text,View,TouchableOpacity,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {Ionicons} from '@expo/vector-icons';
import MenuButton from '../components/Menu'
export default function SymptomsScreen({navigation}) {

  

  return (

    <View style={{flex:1}}>
        <View style={{borderBottomColor:'#000',marginTop:18,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'black'}}>
        <MenuButton navigation={navigation}/>
            
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:38}}>Symptoms Logging</Text>
          </View>
    <ScrollView>
    <View>
    <ScrollView>
    <View  style={{
      padding:10,
      height:120,
      width:"95%",
      borderRadius:10, 
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'#f2f2f2',
      padding:20,
      borderRadius:10,
      marginLeft:9.5
      }}>

      <View style={{borderBottomWidth:1,width:'114%',marginTop:-20}}>
        <Text style={{color:'black',marginLeft:2,fontSize:17,fontWeight:'bold'}}>
             Fever
        </Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:9,marginRight:6}}>
       
       <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>4</Text></TouchableOpacity>
       
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
            <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>3</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
      <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>2</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>1</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
           <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>0</Text></TouchableOpacity>
      </View>
         
       </View>
       <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{marginLeft:0,marginRight:10}}> High</Text>
          <Text style={{marginLeft:12,marginRight:11}}> Semi</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mid</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mild</Text>
          <Text style={{marginLeft:12,marginRight:1}}> None</Text>
              
            </View>
    </View>


    <View  style={{
      padding:10,
      height:120,
      width:"95%",
      borderRadius:10, 
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'#f2f2f2',
      padding:20,
      borderRadius:10,
      marginLeft:9.5
      }}>

      <View style={{borderBottomWidth:1,width:'114%',marginTop:-20}}>
        <Text style={{color:'black',marginLeft:2,fontSize:17,fontWeight:'bold'}}>
             Cough
        </Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:9,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>4</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
            <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>3</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
      <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>2</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>1</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
           <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>0</Text></TouchableOpacity>
      </View>
           
       </View>

       <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{marginLeft:0,marginRight:10}}> High</Text>
          <Text style={{marginLeft:12,marginRight:11}}> Semi</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mid</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mild</Text>
          <Text style={{marginLeft:12,marginRight:1}}> None</Text>
              
            </View>
    </View>



    <View  style={{
      padding:10,
      height:120,
      width:"95%",
      borderRadius:10, 
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'#f2f2f2',
      padding:20,
      borderRadius:10,
      marginLeft:9.5
      }}>

      <View style={{borderBottomWidth:1,width:'114%',marginTop:-20}}>
        <Text style={{color:'black',marginLeft:2,fontSize:17,fontWeight:'bold'}}>
             Running nose
        </Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:9,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>4</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
            <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>3</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
      <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>2</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>1</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
           <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>0</Text></TouchableOpacity>
      </View>
           
       </View>
       <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{marginLeft:0,marginRight:10}}> High</Text>
          <Text style={{marginLeft:12,marginRight:11}}> Semi</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mid</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mild</Text>
          <Text style={{marginLeft:12,marginRight:1}}> None</Text>
              
            </View>
    </View>


    <View  style={{
      padding:10,
      height:120,
      width:"95%",
      borderRadius:10, 
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'#f2f2f2',
      padding:20,
      borderRadius:10,
      marginLeft:9.5
      }}>

      <View style={{borderBottomWidth:1,width:'114%',marginTop:-20}}>
        <Text style={{color:'black',marginLeft:2,fontSize:17,fontWeight:'bold'}}>
             Aches and Pains
        </Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:9,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>4</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
            <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>3</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
      <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>2</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>1</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
           <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>0</Text></TouchableOpacity>
      </View>
           
       </View>
       <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{marginLeft:0,marginRight:10}}> High</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Semi</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mid</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mild</Text>
          <Text style={{marginLeft:12,marginRight:1}}> None</Text>
              
            </View>
    </View>

    <View  style={{
      padding:10,
      height:120,
      width:"95%",
      borderRadius:10, 
      marginVertical:10,
      alignItems:'center',
      justifyContent:'center',
      shadowColor:'black',
      shadowOffset:{width:0 ,height:2},
      shadowRadius:6,
      shadowOpacity:0.26,
      backgroundColor:'#f2f2f2',
      padding:20,
      borderRadius:10,
      marginLeft:9.5
      }}>

      <View style={{borderBottomWidth:1,width:'114%',marginTop:-20}}>
        <Text style={{color:'black',marginLeft:2,fontSize:17,fontWeight:'bold'}}>
             Shortness of Breath
        </Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:9,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>4</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
            <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>3</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
      <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>2</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
        <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>1</Text></TouchableOpacity>
      </View>
      <View style={{borderRadius: 24,  width: 42, height: 42,borderWidth: 1,borderColor: 'black',backgroundColor:'ash',marginLeft:7,marginRight:6}}>
           <TouchableOpacity><Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',marginTop:6,marginLeft:14}}>0</Text></TouchableOpacity>
      </View>
           
       </View>
       <View style={{flexDirection:'row',marginTop:4}}>
          <Text style={{marginLeft:0,marginRight:10}}> High</Text>
          <Text style={{marginLeft:12,marginRight:11}}> Semi</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mid</Text>
          <Text style={{marginLeft:12,marginRight:12}}> Mild</Text>
          <Text style={{marginLeft:12,marginRight:1}}> None</Text>
              
            </View>
        </View>



        
     </ScrollView>
    </View>

    <Button title="Submit" style={{width:'98%'}} />
    </ScrollView>
    </View>
  );
}

SymptomsScreen.navigationOptions = {
  title: 'Symptoms Logging',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
