import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text} from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {
    componentDidMount(){
        this.props.FetchCoinData();
    }
    renderCoinCards() {
        const { crypto } = this.props;
        console.log(crypto)
    }
    render() {
        const { crypto } = this.props;        
        return (
            <View>
                <Text>
                    {this.renderCoinCards()}
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