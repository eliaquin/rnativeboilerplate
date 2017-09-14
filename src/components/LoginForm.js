import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { verificarCredenciales } from './../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    componentWillMount() {
        this.props.verificarCredenciales();
    }
    render() {
        return (
            <View>
                <Text>{this.props.codigoUsuario}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { codigoUsuario } = auth;
    return { codigoUsuario };
};

export default connect(mapStateToProps, {
    verificarCredenciales
})(LoginForm);
