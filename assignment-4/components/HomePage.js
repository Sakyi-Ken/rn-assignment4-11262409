import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Card } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomePage() {
  return (
    <View style={headStyles.homeContainer}>
      <View style={headStyles.headDetails}>
        <View style={headStyles.headText}>
          <Text style={headStyles.headName}>Sakyi Ken</Text>
          <Text style={headStyles.headEmail}>sakyiken7@gmail.com</Text>
        </View>
        <Image source={require('../assets/profile.png')} style={headStyles.headImage} />
      </View>
      <View style={headStyles.headContainer}>
        <View style={headStyles.headSearch}>
          <Icon style={headStyles.searchIcon} name="search" size={20} color="gray" />
          <TextInput style={headStyles.searchBar}
            placeholder="Search a job or position"
            placeholderTextColor={"gray"}
          />
        </View>
        <TouchableOpacity style={headStyles.headFilter}>
          <Image source={require('../assets/filter.5.png')} style={headStyles.filterImage} />
        </TouchableOpacity>
      </View>

             
       <SearchBar
        placeholder="Search a job or position."
        lightTheme
        round
        onChangeText={() => {
          console.log('searching')
        }}
        onClearText={() => {
          
        }}
        icon={{ type: 'font-awesome', name: 'search' }}
        inputStyle={{ backgroundColor: 'white' }}
        containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 15, borderColor: '#eee' }}

      /> 
      
      <View style={headStyles.headJobs}>
        <Text style={headStyles.headTitle}>Featured Jobs</Text>
        <Text style={headStyles.headSee}>See all</Text>
      </View>

      <ScrollView horizontal={true} indicatorStyle={'white'}>
        <View style={headStyles.jobContainer}>
          <View style={headStyles.cardContainer}>
            <View style={headStyles.imageContainer}>
              <Image source={require('../assets/Vector.png')} style={headStyles.socialImage} />
            </View>
            <View style={headStyles.jobTitle}>
              <Text style={headStyles.jobName}>Software Engineer</Text>
              <Text style={headStyles.social}>Facebook</Text>
            </View>
          </View>
          <View style={headStyles.jobDetails}>
            <Text style={headStyles.jobDetail}>$180,00</Text>
            <Text style={headStyles.jobDetail}>Accra, Ghana</Text>
          </View>
        </View>

        <View style={headStyles.jobsContainer}>
          <View style={headStyles.cardContainer}>
            <View style={headStyles.googleContainer}>
              <Image source={require('../assets/google.png')} style={headStyles.googleImage} />
            </View>
            <View style={headStyles.jobTitle}>
              <Text style={headStyles.jobName}>Software Engineer</Text>
              <Text style={headStyles.social}>Facebook</Text>
            </View>
          </View>
          <View style={headStyles.jobDetails}>
            <Text style={headStyles.jobDetail}>$180,00</Text>
            <Text style={headStyles.jobDetail}>Accra, Ghana</Text>
          </View>
        </View>

        <View style={headStyles.jobContainer}>
          <View style={headStyles.cardContainer}>
            <View style={headStyles.imageContainer}>
              <Image source={require('../assets/Vector.png')} style={headStyles.socialImage} />
            </View>
            <View style={headStyles.jobTitle}>
              <Text style={headStyles.jobName}>Software Engineer</Text>
              <Text style={headStyles.social}>Facebook</Text>
            </View>
          </View>
          <View style={headStyles.jobDetails}>
            <Text style={headStyles.jobDetail}>$180,00</Text>
            <Text style={headStyles.jobDetail}>Accra, Ghana</Text>
          </View>
        </View>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Text>
              Card content
            </Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </ScrollView>

      <View style={headStyles.headJobs}>
        <Text style={headStyles.headTitle}>Popular Jobs</Text>
        <Text style={headStyles.headSee}>See all</Text>
      </View>

      <ScrollView>
        <View style={headStyles.popularHeadJobs}>
          <Image source={require('../assets/Group.png')} />
          <View style={headStyles.popularJobs}>
            <View style={headStyles.popularHeadText}>
              <Text Style={headStyles.popularHeadName}>Jr Executive</Text>
              <Text style={headStyles.popularName}>Burger King</Text>
            </View>
            <View style={headStyles.popularHeadDetails}>
              <Text style={headStyles.popularNameText}>$96,000/y</Text>
              <Text style={headStyles.popularName}>Los Angels, US</Text>
            </View>
          </View>
        </View>

        <View style={headStyles.popularHeadJobs}>
          <Image source={require('../assets/image 8.png')} />
          <View style={headStyles.popularJobs}>
            <View style={headStyles.popularHeadText}>
              <Text Style={headStyles.popularHeadName}>Product Manager</Text>
              <Text style={headStyles.popularName}>Burger King</Text>
            </View>
            <View style={headStyles.popularHeadDetails}>
              <Text style={headStyles.popularNameText}>$96,000/y</Text>
              <Text style={headStyles.popularName}>Los Angels, US</Text>
            </View>
          </View>
        </View>

        <View style={headStyles.popularHeadJobs}>
          <Image source={require('../assets/Group.png')} />
          <View style={headStyles.popularJobs}>
            <View style={headStyles.popularHeadText}>
              <Text Style={headStyles.popularHeadName}>Jr Executive</Text>
              <Text style={headStyles.popularName}>Burger King</Text>
            </View>
            <View style={headStyles.popularHeadDetails}>
              <Text style={headStyles.popularNameText}>$96,000/y</Text>
              <Text style={headStyles.popularName}>Los Angels, US</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

const headStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    margin: 15,
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
  headImage: {
    width: 70,
    height: 70,
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
  },
  jobContainer: {
    backgroundColor: '#5386E4',
    borderRadius: 36,
    padding: 40,
    marginVertical: 30,
    margin: 2,
  },
  jobsContainer: {
    backgroundColor: '#041E42',
    borderRadius: 36,
    padding: 40,
    marginVertical: 30,
    margin: 2,
  },
  jobName: {
    color: 'white',
    fontSize: 20
  },
  social: {
    color: "white",
    fontSize: 18,
    fontWeight: "100",
  },
  jobDetail: {
    color: "white",
    fontSize: 18,
    fontWeight: "100"
  },
  jobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  imageContainer: {
    backgroundColor: 'white',
    width: 55,
    borderRadius: 10,
  },
  socialImage: {
    width: 30,
    alignSelf: 'center',
    padding: 18,
    marginTop: 10,
  },
  googleContainer: {
    alignContent: 'center',
    marginTop: -15,
  },
  googleImage: {
    marginLeft: -20,
  },
  popularHeadJobs: {
    flexDirection: 'row',
    marginVertical: 15,
    gap: 15,
  },
  popularJobs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popularHeadText: {
    justifyContent: "space-between",
  },
  popularHeadName: {
    fontSize: 20,
    fontWeight: "bold",
  },

})