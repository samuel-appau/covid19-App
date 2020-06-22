import React,{Component} from 'react';
import {firebaseDB} from '../firebase'
import {View,Text,Button,StyleSheet,FlatList} from 'react-native'
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'

export default class NotificationScreen extends Component{
  
    static navigationOptions = ({ navigation }) => ({
      title: 'NotificationScreen',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft:15
      },
      headerLeft:
        <MenuButton navigation={navigation}/>,
    
      
      headerRight:<SearchButton/>
    });


  state={
         students:''
  }

  componentDidMount(){
    
    firebaseDB.ref('ReportDetails').once('value')
    .then(snapshot=>{
      const students=[]
  
      snapshot.forEach(childSnapshot=>{
        const data=childSnapshot.val()
        students.push(data)
      })
      this.setState({students:students})

    })
    .catch(error=>console.log(error))
  }



  render(){
    return(
      <View>
      
        <FlatList
          data={this.state.students}
          numColumns="2"
          renderItem={({ item }) =>
          ( <View style={{borderBottomColor:"ash",borderBottomWidth:1,marginBottom:10,paddingHorizontal:3,paddingVertical:11}}>
               <View style={{flexDirection:'row'}}>
              <View style={{}}>
                <Text style={{fontSize:9,fontWeight:'bold'}}>
                      {item.name.name} 
                </Text>
                
                <Text style={{fontSize:9,color:"seagreen"}}>
                      {item.location.location}
                </Text>
                <Text style={{fontSize:9,color:"seagreen"}}>
                      {item.contact.contact}
                </Text>
              </View>

               <View>
                   <Text style={{fontSize:6,fontSize:12,marginLeft:12,fontWeight:'bold'}}>
                        {item.condition.condition}
                    </Text>
                </View>
            </View>
            </View>
            )
          }
        
        />

      </View>
      
    )
  }
}




