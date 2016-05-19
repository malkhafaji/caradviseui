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
  Navigator,
  TouchableOpacity,
} from 'react-native';

class Approvals extends Component {

    constructor(props){
      super(props);
    }

    _navigateToApprovals(){
      this.props.navigator.push({
        ident: 'Approvals',
      })
    }

    render() {
        return (
          <View>
            <TopBar />
            <CarBar />
            <View style={styles.approvalsContainer}>

              <Text style={styles.textHd}>Services To Approve</Text>

              <View style={styles.newServicesList}>

                  <View style={styles.newServicesRow}>
                    <Text style={styles.newServiceItem}>Tire Rotation</Text>

                    <View style={styles.fairPriceContainer}>
                      <Text style={styles.fairPriceText}>FAIR PRICE</Text>
                      <View style={styles.fairPriceRange}>
                        <Text>$30</Text>
                        <Image
                          source={require('../../images/arrow-range.png')}
                          style={styles.fairPriceArrow} />
                        <Text>$50</Text>
                      </View>
                    </View>

                    <View style={styles.newServicePriceContainer}>
                      <Text style={styles.newServicePriceHd}>PRICE</Text>
                      <Text style={styles.newServicePrice}>$45</Text>
                    </View>
                  </View>

                  <View style={styles.btnRow}>
                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-save.png')}
                        style={styles.btnSave} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-remove.png')}
                        style={styles.btnRemove} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.newServicesRow}>
                    <Text style={styles.newServiceItem}>Brake Pads</Text>

                    <View style={styles.fairPriceContainer}>
                      <Text style={styles.fairPriceText}>FAIR PRICE</Text>
                      <View style={styles.fairPriceRange}>
                        <Text>$30</Text>
                        <Image
                          source={require('../../images/arrow-range.png')}
                          style={styles.fairPriceArrow} />
                        <Text>$50</Text>
                      </View>
                    </View>

                    <View style={styles.newServicePriceContainer}>
                      <Text style={styles.newServicePriceHd}>PRICE</Text>
                      <Text style={styles.newServicePrice}>$50</Text>
                    </View>
                  </View>

                  <View style={styles.btnRow}>
                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-save.png')}
                        style={styles.btnSave} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-remove.png')}
                        style={styles.btnRemove} />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.newServicesRow}>
                    <Text style={styles.newServiceItem}>Air Filter</Text>

                    <View style={styles.fairPriceContainer}>
                      <Text style={styles.fairPriceText}>FAIR PRICE</Text>
                      <View style={styles.fairPriceRange}>
                        <Text>$30</Text>
                        <Image
                          source={require('../../images/arrow-range.png')}
                          style={styles.fairPriceArrow} />
                        <Text>$50</Text>
                      </View>
                    </View>

                    <View style={styles.newServicePriceContainer}>
                      <Text style={styles.newServicePriceHd}>PRICE</Text>
                      <Text style={styles.newServicePrice}>$35</Text>
                    </View>
                  </View>

                  <View style={styles.btnRow}>
                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-save.png')}
                        style={styles.btnSave} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      underlayColor='#dddddd'>
                      <Image
                        source={require('../../images/btn-remove.png')}
                        style={styles.btnRemove} />
                    </TouchableOpacity>
                  </View>

              </View>

              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../../images/btn-add-service.png')}
                    style={styles.btnAddService} />
                </TouchableOpacity>
              </View>

              <View style={styles.newTotal}>
                <Text style={styles.newTotalText}>New Total: $210.00</Text>
              </View>

              <View style={styles.approveDecline}>
                <TouchableOpacity>
                  <Image
                    source={require('../../images/btn-approve-big.png')}
                    style={styles.btnApprove} />
                </TouchableOpacity>

              </View>

            </View>
          </View>
        );
    }
}

var styles = StyleSheet.create({
  approvalsContainer: {
    alignItems: 'center',
  },
  textHd: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    color: '#666666',
  },
  newServicesList: {
    flexDirection: 'column',
  },
  newServicesRow: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    width: 360,
  },
  newServiceItem: {
    width: 190,
    marginTop: 17,
    marginBottom: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#11325F',
    alignItems: 'center',
  },
  fairPriceContainer: {
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    alignItems: 'center',
  },
  newServicePriceContainer: {
    width: 45,
    marginTop: 10,
    marginRight: 5,
  },
  newServicePrice: {
    textAlign: 'right',
    color: '#11325F',
    fontWeight: 'bold',
  },
  newServiceRange: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
  fairPriceRange: {
    flexDirection: 'row',
  },
  fairPriceText: {
    color: '#F49D11',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fairPriceArrow: {
    width: 22,
    height: 10,
    marginTop: 4,
    marginLeft: 2,
    marginRight: 2,
  },
  newServicePriceHd: {
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  btnRow: {
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 3,
  },
  btnSave: {
    width: 169,
    height: 34,
    marginLeft: 8,
    marginRight: 6,
  },
  btnRemove: {
    width: 169,
    height: 34,
  },
  btnAddService: {
    width: 110,
    height: 10,
    margin: 20,
  },
  newTotal: {
    flexDirection: 'row',
    backgroundColor: '#FEF1DC',
    alignItems: 'center',
    marginBottom: 20,
  },
  newTotalText: {
    width: 330,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    color: '#11325F',
    textAlign: 'center',
  },
  btnApprove: {
    width: 350,
    height: 46,
  },
});

module.exports = Approvals;
