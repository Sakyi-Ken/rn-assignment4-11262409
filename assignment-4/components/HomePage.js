import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
//import {SearchBar} from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomePage() {
  return (
    <View>
      <View style={headStyles.headDetails}>
        <View style={headStyles.headText}>
          <Text style={headStyles.headName}>Sakyi Ken</Text>
          <Text style={headStyles.headEmail}>sakyiken7@gmail.com</Text>
        </View>  
        <Image source={require('../assets/profile.png')}/>
      </View>
      <View style={headStyles.headContainer}>
        <View style={headStyles.headSearch}> 
          <Icon style={headStyles.searchIcon} name="search" size={20} color="gray"/>
          <TextInput style={headStyles.searchBar}
            placeholder= "Search a job or position"
            placeholderTextColor={"gray"}
          />
        </View>
        <TouchableOpacity style={headStyles.headFilter}>
          <Image source={require('../assets/filter.5.png')} style={headStyles.filterImage}/>
        </TouchableOpacity>
      </View>

      {/*       
       <SearchBar
        placeholder="Search a job or position."
      /> 
      */}
      <View style={headStyles.headJobs}>
        <Text style={headStyles.headTitle}>Featured Jobs</Text>
        <Text style={headStyles.headSee}>See all</Text>
      </View>

      <ScrollView >
        <View style={headStyles.cardContainer}>
          <View style={headStyles.jobTitle}>
            <Text>Software Engineer</Text>
            <Text style={headStyles.social}>Facebook</Text>
          </View>
          <View style={headStyles.socialImage}></View>
        </View>
        <View style={headStyles.jobDetails}>
          <Text>$180,00</Text>
          <Text>Accra, Ghana</Text>
        </View>
      </ScrollView>

     <View style={headStyles.headJobs}>
        <Text style={headStyles.headTitle}>Featured Jobs</Text>
        <Text style={headStyles.headSee}>See all</Text>
      </View>
    </View>
  
  )
}

const headStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  headDetails: {
    flexDirection: 'row',
    marginTop: 50,
  },
  headText: {
    flexDirection: 'column',
    marginRight: 100,
  },
  headName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headEmail: {
    color: "gray",
    fontSize: 18,
    fontWeight: "200",
    opacity: 0.7,
  },
  searchBar: {
    paddingTop: 10,
    paddingRight: 20,
    marginLeft: 10,
    paddingBottom: 10,
    color: 'gray',
    fontSize: 19,
    fontWeight: "100",  
  },
  headSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 15,
    marginVertical: 50,
    backgroundColor: '#eee',
    padding: 6,
  },
  searchIcon: {
    fontWeight: "100",
    marginLeft: 10,
  },
  headContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headFilter: {
    backgroundColor: "#eee",
    borderRadius: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: 50
  },
  filterImage: {
    width: 35,
    alignSelf: 'center'
  },
  headJobs: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center"
  },
  headTitle: {
    fontWeight: "bold",
    fontSize: 22,
  },
  headSee: {
    fontWeight: '100',
    color: "gray",
    fontSize: 16
  }

})