'use strict';
var TopBar = require('../../components/main/topBar');
var CarBar = require('../../components/main/carBar');

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
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

var width = Dimensions.get('window').width - 20;

class MaintenanceDetail extends Component {

    constructor(props) {
      super(props);
      var passProps = this.props.navigator._navigationContext._currentRoute.passProps;
      this.state = {
        id: passProps.category,
        name:passProps.name,
        lowCost:Number(passProps.lowCost).toFixed(0),
        highCost:Number(passProps.highCost).toFixed(0),
        time:passProps.time,
        timeInterval:passProps.timeInterval,
        intervalMile:passProps.intervalMile,
        intervalMonth:passProps.intervalMonth,
        position:passProps.position,
        desc:passProps.desc,
        whatIsIt:passProps.whatIsIt,
        whyDoThis:passProps.whyDoThis,
        whatIf:passProps.whatIf,
        factors:passProps.factors,
        laborLow:Number(passProps.laborLow).toFixed(0),
        laborHigh:Number(passProps.laborHigh).toFixed(0),
        partLow:Number(passProps.partLow).toFixed(0),
        partHigh:Number(passProps.partHigh).toFixed(0),
        partName:passProps.partName,
        partPrice:passProps.partPrice,
        parts:passProps.parts,
        fluids:(passProps.fluids || []).filter(fluid => fluid.literal_name == 'Engine Oil Fluid Type'),
      };
    }

    renderLabor()
    {
        if (isNaN(parseFloat(this.state.laborLow))) {
            return null;
        } else {
            return (
              <Text><Text>LABOR ESTIMATE:</Text><Text style={styles.textBold}>  ${this.state.laborLow}-${this.state.laborHigh}{"\n"}</Text></Text>
            )
        }
    }
    renderTime()
    {
        if (this.state.intervalMonth != 0) {
            return (
                <Text style={styles.textBold}>{this.state.intervalMonth} MONTHS</Text>
            );
        } else {
            return null;
        }
    }
    renderOr()
    {
        if (this.state.intervalMonth != 0 && this.state.intervalMile != 0) {
            return (
                <Text> OR </Text>
            );
        } else {
            return null;
        }
    }
    renderMile()
    {
        if (this.state.intervalMile != 0) {
            return (
                <Text style={styles.textBold}>{this.state.intervalMile} MILES</Text>
            );
        } else {
            return null;
        }
    }

    renderParts()
    {
        if (this.state.parts.length != 0) {
            return (
              <View style={styles.partList}>
                <View>
                  <Text style={styles.textHd}>Part Replacement Estimate</Text>
                  {this.state.parts.length ?
                    this.state.parts.map(this.createPartsRow) :
                    <View style={styles.noServicesBg}><View style={styles.noServicesContainer}><Text style={styles.noServices}>None</Text></View></View>}

                </View>
              </View>
            );
        } else {
            return null;
        }
    }

    renderFluids()
    {
        if (this.state.fluids.length != 0) {
            return (
              <View style={styles.partList}>
                <View>
                  <Text style={styles.textHd}>Fluid Detail</Text>
                  {this.state.fluids.length ?
                    this.state.fluids.map(this.createFluidsRow) :
                    <View style={styles.noServicesBg}><View style={styles.noServicesContainer}><Text style={styles.noServices}>None</Text></View></View>}

                </View>
              </View>
            );
        } else {
            return null;
        }
    }

    renderWhat()
    {
        if (this.state.whatIsIt) {
            return (
              <View>
                <Text style={styles.textHd}>What is it?</Text>
                <View style={styles.whatContainer}><View style={styles.whatTxtContainer}><Text style={styles.whatTxt}>{this.state.whatIsIt}</Text></View></View>
              </View>
            );
        } else {
            return null;
        }
    }
    renderWhy()
    {
        if (this.state.whyDoThis) {
            return (
              <View>
              <Text style={styles.textHd}>Why do this?</Text>
              <View style={styles.whatContainer}><View style={styles.whatTxtContainer}><Text style={styles.whatTxt}>{this.state.whyDoThis}</Text></View></View>
              </View>
            );
        } else {
            return null;
        }
    }
    renderWhatIf()
    {
        if (this.state.whatIf) {
            return (
              <View>
              <Text style={styles.textHd}>What if I decline?</Text>
              <View style={styles.whatContainer}><View style={styles.whatTxtContainer}><Text style={styles.whatTxt}>{this.state.whatIf}</Text></View></View>
              </View>
            );
        } else {
            return null;
        }
    }
    renderFactors()
    {
        if (this.state.factors) {
            return (
              <View>
              <Text style={styles.textHd}>Factors to consider</Text>
              <View style={styles.whatContainer}><View style={styles.whatTxtContainer}><Text style={styles.whatTxt}>{this.state.factors}</Text></View></View>
              </View>
            );
        } else {
            return null;
        }
    }

    render() {
      return (
        <View style={styles.base}>
          <TopBar navigator={this.props.navigator} />
          <CarBar />
          <View style={styles.maintenanceContainer}>

            <ScrollView style={styles.scrollView}>
            <Text style={styles.textHd}>Maintenance Detail</Text>

            <View style={styles.maintenanceList}>
              <View>
                <View style={styles.maintenanceRow}>
                  <Text style={styles.maintenanceItem}>{this.state.name} {this.state.position}</Text>

                  <View style={styles.fairPriceContainer}>
                    <Text style={styles.fairPriceText}>FAIR PRICE</Text>
                    <View style={styles.fairPriceRange}>
                      <Text style={styles.fairPrice}>${this.state.lowCost}</Text>
                      <Image
                        source={require('../../../images/arrow-range.png')}
                        style={styles.fairPriceArrow} />
                      <Text style={styles.fairPrice}>${this.state.highCost}</Text>
                    </View>
                  </View>

                </View>
                <View style={styles.maintenanceTime}>
                  <View style={styles.maintenanceTimeTextContainer}><Text style={styles.maintenanceTimeText}>{this.renderLabor()}TIME ESTIMATE:  <Text style={styles.textBold}>{this.state.time} {this.state.timeInterval}</Text></Text></View>
                </View>
                <View style={styles.maintenanceReco}>
                  <View style={styles.maintenanceRecoTextContainer}><Text style={styles.maintenanceRecoText}>RECOMMENDED EVERY {this.renderTime()}{this.renderOr()}{this.renderMile()}</Text></View>
                </View>
              </View>
              {this.renderParts()}
              {this.renderFluids()}
              {this.renderWhat()}
              {this.renderWhy()}
              {this.renderWhatIf()}
              {this.renderFactors()}
            </View>

            </ScrollView>

          </View>

        </View>
      );
    }

    createPartsRow = (part, i) => <Part key={i} part={part} partLow={this.state.partLow} partHigh={this.state.partHigh}/>;
    createFluidsRow = (fluid, i) => <Fluid key={i} fluid={fluid} />;
}

var Part = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },

  render: function() {
      return(
        <View style={styles.partRow}>
          <Text style={styles.partItem}>{this.props.part.name} {this.props.part.qualifier_name}</Text>
          <View style={styles.fairPriceContainer}>
            <Text style={styles.fairPriceText}>FAIR PRICE</Text>
            <View style={styles.fairPriceRange}>
              <Text style={styles.fairPrice}>${this.props.partLow}</Text>
              <Image
                source={require('../../../images/arrow-range.png')}
                style={styles.fairPriceArrow} />
              <Text style={styles.fairPrice}>${this.props.partHigh}</Text>
            </View>
          </View>
        </View>
      );
  }
});

var Fluid = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },

  render: function() {
      return(
        <View style={styles.partRow}>
          <View style={styles.fluidContainerLeft}>
            <Text style={styles.fairPriceText}>{this.props.fluid.literal_name}</Text>
            <View style={styles.fairPriceRange}>
              <Text style={styles.fluidViscosityTxt}>{this.props.fluid.fluid_type_name}</Text>
            </View>
          </View>
          { this.props.fluid.viscosity ? (
          <View style={styles.fluidContainerRight}>
            <Text style={styles.fairPriceText}>Viscosity</Text>
            <View style={styles.fairPriceRange}>
              <Text style={styles.fluidViscosityTxt}>{this.props.fluid.viscosity}</Text>
            </View>
          </View>
          ) : null }
        </View>
      );
  }
});

var styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  maintenanceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textHd: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 8,
    color: '#002d5e',
    fontWeight: 'bold',
    fontFamily: 'RobotoCondensed-Light',
    textAlign: 'center',
  },
  maintenanceList: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginBottom: 50,
  },
  maintenanceRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintenanceItem: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#002d5e',
    alignItems: 'center',
  },
  maintenanceTime: {
    width: width,
    backgroundColor: '#EFEFEF',
  },
  maintenanceTimeTextContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    backgroundColor: '#FFF',
  },
  maintenanceTimeText: {
    backgroundColor: '#FFF',
    margin: 10,
    textAlign: 'center',
    color: '#002d5e',
    fontSize: 12,
  },
  maintenanceReco: {
    width: width,
    backgroundColor: '#EFEFEF',
  },
  maintenanceRecoTextContainer: {
    margin: 5,
    backgroundColor: '#FFF',
  },
  maintenanceRecoText: {
    backgroundColor: '#FFF',
    margin: 10,
    textAlign: 'center',
    color: '#002d5e',
    fontSize: 12,
  },
  maintenanceDesc: {
    width: width,
    backgroundColor: '#EFEFEF',
    marginBottom: 10,
  },
  maintenanceDescText: {
    backgroundColor: '#FFF',
    margin: 5,
    padding: 10,
    color: '#002d5e',
    fontSize: 12,
  },
  maintenancePrice: {
    flex: 1,
    textAlign: 'right',
    color: '#002d5e',
  },
  partList: {
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  partRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    width: width,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partItem: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#002d5e',
    alignItems: 'center',
  },
  partPrice: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#002d5e',
    textAlign: 'right',
  },
  priceContainer: {
    flex: 1,
    marginTop: 15,
    marginRight: 10,
  },
  priceHd: {
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    color: '#002d5e',
    fontWeight: 'bold',
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    backgroundColor: '#002d5e',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  totalText: {
    flex: 3,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002d5e',
  },
  totalPrice: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  fairPriceContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3,
    alignItems: 'center',
  },
  fairPriceRange: {
    flexDirection: 'row',
  },
  fairPriceText: {
    color: '#f8991d',
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
  fairPrice: {
    fontSize: 14,
    color: '#002d5e',
    fontWeight: 'bold',
  },
  fluidContainerLeft: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 3
  },
  fluidContainerRight: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 10,
    alignItems: 'flex-end'
  },
  fluidViscosity: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    marginRight: 3
  },
  fluidViscosityTxt: {
    color: '#002d5e',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  rowAddService: {
    alignItems: 'center',
  },
  btnAddService: {
    width: 110,
    height: 10,
    marginBottom: 20,
  },
  bookIt: {
    alignItems: 'center',
  },
  btnCheckout: {
    width: 300,
    height: 40,
  },
  textBold: {
    fontWeight: 'bold',
  },
  whatContainer: {
    backgroundColor: '#EFEFEF',
    width: width,
  },
  whatTxtContainer: {
    margin: 5,
    backgroundColor: '#FFF',
  },
  whatTxt: {
    backgroundColor: '#FFF',
    margin: 10,
    color: '#002d5e',
    fontSize: 12,
  },
  noServicesBg: {
    backgroundColor: '#F4F4F4',
    width: width,
  },
  noServicesContainer: {
    margin: 10,
  },
  noServices: {
    color: '#002d5e',
    width: width,
    textAlign: 'center',
  }
});

function mapStateToProps(state) {
  let user = state.user || {};
  return {
    isLoggedIn: !!user.authentication_token,
    authentication_token: user.authentication_token,
    vehicleId : user.vehicles[0].id,
    miles : user.vehicles[0].miles,
  };
}

module.exports = connect(mapStateToProps)(MaintenanceDetail);
