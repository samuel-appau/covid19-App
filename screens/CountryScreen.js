import React from 'react';
import {StyleSheet,Text,View,Image,FlatList,ActivityIndicator} from 'react-native';
import MenuButton from '../components/Menubar'
import SearchButton from '../components/SearchButton'
import { StructureNum } from '../components/World';
import { GET_TOP_CASES } from '../components/GetData';
import { useQuery } from 'react-apollo';


const CountryScreen = ({ navigation }) => {
  
    const { data: sortedData, loading: sortedDataLoading } = useQuery(
  
      GET_TOP_CASES
  
    );
  
    return (
  
      <View style={styles.container}>
  
        <View>
  
          <View style={{ paddingHorizontal: 10, height: 520 }}>
  
            <Text style={styles.topCountriesTitle}>
  
              Countries and their statistics
  
            </Text>
  
            <View style={styles.topCountries}>
  
              <Text style={[styles.topSubTitles, { flex: 6 }]}>Country</Text>
  
              <Text style={[styles.topSubTitles, { flex: 4 }]}>Cases</Text>
  
              <Text style={[styles.topSubTitles, { flex: 3 }]}>Today</Text>
  
              <Text style={[styles.topSubTitles, { flex: 4,marginLeft:4 }]}>Recovered</Text>
  
              <Text style={[styles.topSubTitles, { flex: 3 }]}>Deaths</Text>
  
            </View>
  
            <View>
  
              {sortedDataLoading ? (
  
                <ActivityIndicator size="large" color="#ED4430" />
  
              ) : sortedData ? (
  
                <FlatList
  
                  data={sortedData.countries}
  
                  keyExtractor={(item) => item.countryInfo.iso3}
  
                  renderItem={({ item }) => (
  
                    <View style={styles.topCountries}>
  
                      <View style={{ flex: 2, marginVertical: 5 }}>
  
                        <Image
  
                          style={{ width: 25, height: 15 }}
  
                          source={{ uri: item.countryInfo.flag }}
  
                        />
  
                      </View>
  
                      <View style={{ flex: 5, marginVertical: 5 }}>
  
                        <Text style={{ fontSize: 13 }}>{item.country}</Text>
  
                      </View>
  
                      <View style={{ flex: 4, marginVertical: 5 }}>
  
                        <Text
  
                          style={{
  
                            fontSize: 13,
  
                            color: '#4081F1',
  
                            textAlign: 'right',
  
                          }}
  
                        >
  
                          {StructureNum(item.result.cases)}
  
                        </Text>
  
                      </View>
  
                      <View style={{ flex: 3, marginVertical: 5 }}>
  
                        <Text style={{ fontSize: 13, textAlign: 'right' }}>
  
                          {StructureNum(item.result.todayCases)}
  
                        </Text>
  
                      </View>
  
                      <View style={{ flex: 4, marginVertical: 5 }}>
  
                        <Text
  
                          style={{
  
                            fontSize: 13,
  
                            color: '#51AB5A',
  
                            textAlign: 'right',
  
                          }}
  
                        >
  
                          {StructureNum(item.result.recovered)}
  
                        </Text>
  
                      </View>
  
                      <View style={{ flex: 3, marginVertical: 5 }}>
  
                        <Text
  
                          style={{
  
                            fontSize: 13,
  
                            color: '#EA4335',
  
                            textAlign: 'right',
  
                          }}
  
                        >
  
                          {StructureNum(item.result.deaths)}
  
                        </Text>
  
                      </View>
  
                    </View>
  
                  )}
  
                />
  
              ) : null}
  
            </View>
  
          </View>
  
        </View>
  
      </View>
  
    );
  
  };
  
  
  
  export default CountryScreen;
  
  CountryScreen.navigationOptions =({navigation})=>({
    title: 'CountryStatisticsScreen',
    headerTitleStyle: {
      fontWeight: 'bold',
      },
    headerLeft:<MenuButton navigation={navigation}/>,
    headerRight:<SearchButton/>
  });

  
  const styles = StyleSheet.create({
  
    container: {
  
      flex: 1,
  
      backgroundColor: '#FFF',
  
    },
  
    topCountriesTitle: {
  
      fontSize: 16,
  
      fontWeight: 'bold',
  
      color: 'gray',
  
      borderBottomColor: '#000',
  
      borderBottomWidth: 1,
  
      paddingVertical: 5,
  
    },
  
    topSubTitles: {
  
      fontSize: 12,
  
      fontWeight: 'bold',
  
      textAlign: 'right',
  
    },
  
    topCountries: {
  
      flexDirection: 'row',
  
    },
  
  });