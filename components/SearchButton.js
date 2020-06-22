import React,{Component} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity,ViewProperties } from 'react-native';


export default class SearchButton extends Component{
    render(){
        
        return(
          
            <Ionicons  
               name="ios-search"
               color="#000"
               size={32}
               style={styles.menuicon}
              
               
            />
            
        )
    }
}


const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:8,
        right:15,
        
    }
})
