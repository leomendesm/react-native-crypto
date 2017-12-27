import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends Component {
    componentDidMount(){
        this.props.FetchCoinData();
    }
    render() {
        return (
            <View>
                <Text>
                    Container
                </Text>
            </View>
        )
    }
}
function mapStatetoProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStatetoProps, {FetchCoinData})(CryptoContainer);