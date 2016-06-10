'use strict';
var TopBar = require('../components/main/topBar');
var CarBar = require('../components/main/carBar');


import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Component,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

var btnWidth = Dimensions.get('window').width - 40;

class Main extends Component {

    render() {
        return (
          <View style={styles.base}>
            <TopBar navigator={this.props.navigator} showMenu />
            <CarBar />
            <ScrollView>
            <View style={styles.btnContainer}>
              <Image
                source={require('../../images/img-vehicle.png')}
                style={styles.vehicle} />

              <TouchableOpacity onPress={() => this.props.navigator.push({ indent:'Maintenance' })}>
                <View style={styles.btnRow}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../../images/btn-view-maintenance.png')}
                    style={styles.btnMain} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigator.push({ indent:'Approvals' })}>
                <View style={styles.btnRow}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../../images/btn-services.png')}
                    style={styles.btnMain} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.btnRow}>
                  <Image
                    resizeMode={'contain'}
                    source={require('../../images/btn-call.png')}
                    style={styles.btnMain} />
                </View>
              </TouchableOpacity>

            </View>
            </ScrollView>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#fff',
  },
  vehicle: {
    height: 250,
    width: Dimensions.get('window').width,
    marginTop: 1,
    marginBottom: 20,
  },
  btnRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btnText: {
    flex: 4,
    color: '#11325F',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 2,
  },
  arrowContainer: {
    flex: 1,
    paddingTop: 6,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  arrow: {
    textAlign: 'right',
  },
  arrowBlue: {
    width: 8,
    height: 13,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btnMain: {
    width: btnWidth,
    height: 60,
  },
});

module.exports = Main;
