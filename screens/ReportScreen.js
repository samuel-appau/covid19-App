import React,{useState} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,TextInput,Button,Image,ScrollView,Alert}  from 'react-native'
import {firebase,firebaseDB} from '../firebase'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'

const handleReport=(name,location,contact,condition)=>{
  
  let dataToSubmit={
 name,
 location,
  contact,
  condition
  }
 
  firebaseDB.ref('ReportDetails').push(dataToSubmit)
  .then(()=>{
        Alert.alert("Report has been sent")
       
           
  })
  .catch(error=>{
    
    Alert.alert(error.message)

  })

}

export default function  ReportScreen({navigation}) {
  const [name,setName]=useState('');
  const [location,setLocation]=useState('')
  const [condition,setCondition]=useState('')
  const [contact,setContact]=useState('')
  const [Loading,setLoading]=useState('')
 return(
   <View>
     <ScrollView>
      
        <View style={{flexDirection:'row',marginTop:40}}>
           
                <View style={{backgroundColor:'seagreen',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Full Name</Text>
                   </View>
                   <TextInput 
               placeholder='Enter your name'
               value={name}
               onChangeText={name=>setName({name})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderWidth:2,borderColor:'seagreen'}}
               />
               </View>



               <View style={{flexDirection:'row',marginTop:40}}>
                <View style={{backgroundColor:'seagreen',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Location</Text>
                   </View>
            <TextInput 
               placeholder='Enter your location'
               value={location}
               onChangeText={location=>setLocation({location})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderWidth:2,borderColor:'seagreen'}}
               />
               </View>



               <View style={{flexDirection:'row',marginTop:60}}>
                <View style={{backgroundColor:'seagreen',height:40,width:70}}>
                <Text style={{color:'white',marginTop:10,fontWeight:'bold'}}>Contact</Text>
                   </View>
            <TextInput 
               placeholder='Enter your Contact'
               value={contact}
               onChangeText={contact=>setContact({contact})}
               style={{backgroundColor:'white',height:40,width:"80%",borderRadius:2,borderWidth:2,borderColor:'seagreen'}}
               />
               </View>



               <View  style={{marginTop:40}}>
               <TextInput 
               placeholder='Describe your condition'
               value={condition}
               onChangeText={condition=>setCondition({condition})}
               multiline={true}
               style={{backgroundColor:'white',height:150,width:"98%",borderRadius:2,marginLeft:1,borderWidth:2,borderColor:'seagreen'}}
               />
              </View>
              
              <View style={{marginTop:20,backgroundColor:'seagreen',width:'98%',height:45,marginLeft:3}}>
              <Button  color="white" title="Submit" style={{height:50,width:'80%',}} onPress={()=>handleReport(name,location,contact,condition)}/>
                    
                </View>   
                </ScrollView>  
               {/* {Loading &&
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View> */
               }
            
               
    </View>
 )
}

ReportScreen.navigationOptions =({navigation}) =>({
  title: 'ReportScreen',
  headerTitleStyle: {
    fontWeight: 'bold',
    marginLeft:15
  },
  headerLeft:<MenuButton navigation={navigation}/> , 
  headerRight:<SearchButton/>
});


// const styles=StyleSheet.create({
//   activity: {
//       position: 'absolute',
//       left: 0,
//       right: 0,
//       top: 410,
//       bottom: 0,
//       alignItems: 'center',
//       justifyContent: 'center'
//   },
// })