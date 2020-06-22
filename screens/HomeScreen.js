import React,{useState} from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,Picker,View,FlatList,ActivityIndicator} from 'react-native';
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import {StructureNum,countries,communicate,statsData} from '../components/World';
import {Ionicons,AntDesign, Feather,MaterialCommunityIcons,Entypo} from  '@expo/vector-icons'
import { useQuery } from '@apollo/react-hooks'
import { GET_GLOBAL_DATA } from '../components/GetData'


function HomeScreen({navigation}) {
 
  const { data: globalData, loading: globalDataLoading } = useQuery(
       GET_GLOBAL_DATA
     );
  const [search, setsearch] = useState('');

  return (
    <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
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
        backgroundColor:'seagreen',
        padding:20,
        borderRadius:10,
        marginLeft:9.5
        }}>


        <Text style={{color:'white',marginLeft:12,fontSize:14}}>
            Report any case when you start to experience any symptoms of covid-19 by calling the covid-19 emergency response team
        </Text>
        <Text style={{color:'white',fontWeight:'bold',fontSize:18,marginTop:8}}>#Stay Home  #Stay Safe</Text>
       

      </View>

      <View style={{padding:10,
        height:140,
        width:"95%",
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginLeft:9.5}}>
        <View style={{flexDirection:'row',marginTop:-10,marginLeft:-120}}>
           <Ionicons name="ios-globe"  size={25}/>
           <Text style={{fontWeight:'bold',fontSize:20,marginTop:1,marginLeft:6}}>World Statistics</Text>
          </View>
          {globalDataLoading ? (

          <ActivityIndicator size="large" color="#ED4430" />

          ) : globalData ? (
            
          <View style={{flexDirection:'row',marginTop:20}}>
          <View style={{borderRightWidth:1,height:50,flex:5}}>
              <Text style={{color:'blue'}}>Confirmed</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>{StructureNum(globalData.globalTotal.cases)}</Text>
            </View>
            
            <View style={{borderRightWidth:1,height:50,flex:5}}>
              <Text style={{color:'green',marginLeft:10}}>Recovered</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>{StructureNum(globalData.globalTotal.recovered)}</Text>
            </View>

            <View style={{height:50,flex:5}}>
              <Text style={{color:'red',marginLeft:10}}>Deaths</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>{StructureNum(globalData.globalTotal.deaths)}</Text>
            </View>

          </View>

        ) : null}


       
      </View>

       <View>
         
      </View>

      
      <View style={{margin: 10}}>

          <Picker

            style={{  borderWidth: 1,

    borderColor: '#fff',

    borderRadius: 2,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginVertical: 10,

    backgroundColor: '#eee',

    fontSize: 16,

    color: 'gray',

    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 2,

    },}}

            onValueChange={(itemValue, itemIndex) => {

              setsearch(itemValue);

            }}

            selectedValue={search}

          >

            <Picker.Item value="" label="Select a country" />

            {countries.map((country) => {

              return (

                <Picker.Item label={country} value={country} key={country} />

              );

            })}

          </Picker>



          <TouchableOpacity

            style={{ width: 80,

    height: 35,

    backgroundColor: 'seagreen',

    borderRadius: 5,

    alignSelf: 'flex-end',

    justifyContent: 'center',

    alignItems: 'center',

    shadowColor: '#000',

    shadowOffset: {

      width: 0,

      height: 2,
    shadowOpacity: 0.25,

    shadowRadius: 3.84,



    elevation: 5,

  },}}

            onPress={() => {

              search !== ''

                ? navigation.navigate('country', {

                    countryName: search,

                  })

                : null;

            }}

          >
          <Entypo name="arrow-with-circle-right" size={24} color="white" />

          </TouchableOpacity>

          

        </View>
        <View style={{ paddingHorizontal: 10 }}>

        <Text style={styles.topCountriesTitle}>World Dashboard</Text>

      </View>
 
      
      <View>

        <View style={styles.otherSummary}>

          {globalDataLoading ? (

            <ActivityIndicator size="large" color="#FFF" />

          ) : globalData ? (

            <View

              style={{

                justifyContent: 'center',

                alignItems: 'center',

                flex: 1,

              }}

            >

              <View style={{ alignItems: 'center' }}>

                <Text style={styles.otherSummaryNum}>

                  {globalData.globalTotal.affectedCountries}

                </Text>

                <Text style={{ color: '#FFF' }}>COUNTRIES AFFECTED</Text>

              </View>

              <View

                style={{

                  flexDirection: 'row',

                  marginTop: 10,

                }}

              >

                <View style={{ alignItems: 'center', marginRight: 10 }}>

                  <Text style={styles.otherSummaryNum}>

                    {StructureNum(globalData.globalTotal.todayCases)}

                  </Text>

                  <Text style={{ color: '#FFF', fontSize: 12 }}>

                    CASES TODAY

                  </Text>

                </View>

                <View style={{ alignItems: 'center', marginLeft: 10 }}>

                  <Text style={styles.otherSummaryNum}>

                    {StructureNum(globalData.globalTotal.todayDeaths)}

                  </Text>

                  <Text style={{ color: '#FFF', fontSize: 12 }}>

                    DEATHS TODAY

                  </Text>

                </View>

              </View>

            </View>

          ) : null}

        </View>

      </View>

    

      {/* <View  style={{height:190,
        width:"95%",
        
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginLeft:9.5}}>
        <View style={{flexDirection:'row',marginTop:-20,marginLeft:-90}}>
           <Ionicons name="ios-stats"  size={28}/>
           <Text style={{fontWeight:'bold',fontSize:20,marginTop:4,marginLeft:6}}>Statistics</Text>
           <Text style={{marginLeft:60,fontWeight:'bold',fontSize:20,marginTop:4}}>Ghana
           </Text>
          </View>

          <View style={{flexDirection:'row',marginTop:5}}>
          <View style={{borderRightWidth:1,height:120,flex:5}}>
          <Text style={{color:'blue'}}>Confirmed</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>1,550</Text>
              
              <Text style={{color:'gold',marginTop:20}}>Active</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10}}>1,384</Text>
            </View>
            
            <View style={{borderRightWidth:1,height:120,flex:5}}>
              <Text style={{color:'green',marginLeft:10}}>Recovered</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>155</Text>
              <Text style={{color:"brown",marginTop:20,marginLeft:10}}>Critical</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>4</Text>
            </View>

            <View style={{height:120,flex:5}}>
              <Text style={{color:'red',marginLeft:10}}>Deaths</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>11</Text>

              <Text style={{color:'#f14897',marginTop:20,marginLeft:10}}>Tests</Text>
              <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,marginLeft:10}}>100,622</Text>
            </View>

          </View>

          </View> */}

          <View >

          <View style={{flex:8}}>
          <Image  source={require('../assets/images/covid.jpg')}  style={{height:200,width:'94%',marginLeft:10,borderRadius:4,marginTop:20}}/>
          </View>
          <View  style={{marginTop:-100,marginLeft:29}}>
          
            <Text style={{fontWeight:'bold',fontSize:20}}>Prevention</Text>
            <Text>1.Wash your hands regularly</Text>
            <Text>2.Wear nose mask when going out</Text>
            <Text>3.Praticing social distancing</Text>
          
          </View>
        
          </View>

    
          </ScrollView>
    </View>

  );


 

  }

  HomeScreen.navigationOptions =({navigation})=> ({
    title: 'Covid-19 Tracker',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft:15
    },
    headerLeft:<MenuButton navigation={navigation} />,
    headerRight:<SearchButton/>
  });

  export default HomeScreen;
  
const styles = StyleSheet.create({
  
    container: {
  
      backgroundColor: '#fff',
  
      paddingBottom: 150,
  
    },
  
    hero: {
  
      justifyContent: 'center',
  
      alignItems: 'center',
  
      height: 80,
  
    },
  
    heroBackground: {
  
      width: '100%',
  
      paddingVertical: 10,
  
    },
  
    heroText: {
  
      fontSize: 25,
  
      textAlign: 'center',
  
      fontWeight: 'bold',
  
      color: '#DDD',
  
    },
  
    call: {
  
      backgroundColor: '#51AB5A',
  
    },
  
    message: {
  
      backgroundColor: '#4081F1',
  
    },
  
    callMessageBtn: {
  
      borderRadius: 5,
  
      flexDirection: 'row',
  
      padding: 10,
  
      marginHorizontal: 5,
  
      shadowColor: '#000',
  
      shadowOffset: {
  
        width: 0,
  
        height: 2,
  
      },
  
      shadowOpacity: 0.25,
  
      shadowRadius: 3.84,
  
  
  
      elevation: 5,
  
    },
  
    callMessageBtnText: {
  
      color: '#FFF',
  
      fontWeight: 'bold',
  
      marginLeft: 5,
  
    },
  
    summary: {
  
      justifyContent: 'center',
  
      alignItems: 'center',
  
      paddingVertical: 10,
  
    },
  
    otherSummary: {
  
      backgroundColor: 'seagreen',
  
      height: 160,
  
      marginHorizontal: 15,
  
      borderRadius: 3,
  
      shadowColor: '#000',
  
      shadowOffset: {
  
        width: 0,
  
        height: 1,
  
      },
  
      shadowOpacity: 0.22,
  
      shadowRadius: 2.22,
  
  
  
      elevation: 3,
  
    },
  
    otherSummaryNum: { color: '#FFF', fontSize: 30, fontWeight: 'bold' },
  
    card: {
  
      width: 160,
  
      height: 55,
  
      margin: 3,
  
      justifyContent: 'center',
  
      alignItems: 'center',
  
      borderRadius: 3,
  
      shadowColor: '#000',
  
      shadowOffset: {
  
        width: 0,
  
        height: 1,
  
      },
  
      shadowOpacity: 0.22,
  
      shadowRadius: 2.22,
  
  
  
      elevation: 3,
  
    },
  
    searchContainer: {
  
      margin: 10,
  
    },
  
    search: {
  
      borderWidth: 1,
  
      borderColor: '#fff',
  
      borderRadius: 2,
  
      paddingHorizontal: 10,
  
      paddingVertical: 5,
  
      marginVertical: 10,
  
      backgroundColor: '#eee',
  
      fontSize: 16,
  
      color: 'gray',
  
      shadowColor: '#000',
  
      shadowOffset: {
  
        width: 0,
  
        height: 2,
  
      },
  
      shadowOpacity: 0.25,
  
      shadowRadius: 3.84,
  
  
  
      elevation: 5,
  
    },
  
    btn: {
  
      width: 80,
  
      height: 35,
  
      backgroundColor: '#ED4430',
  
      borderRadius: 5,
  
      alignSelf: 'flex-end',
  
      justifyContent: 'center',
  
      alignItems: 'center',
  
      shadowColor: '#000',
  
      shadowOffset: {
  
        width: 0,
  
        height: 2,
  
      },
  
      shadowOpacity: 0.25,
  
      shadowRadius: 3.84,
  
  
  
      elevation: 5,
  
    },
  
    topCountriesTitle: {
  
      fontSize: 16,
  
      fontWeight: 'bold',
  
      color: 'gray',
  
      borderBottomColor: '#000',
  
      borderBottomWidth: 1,
  
      paddingVertical: 5,
  
    },
  
  });