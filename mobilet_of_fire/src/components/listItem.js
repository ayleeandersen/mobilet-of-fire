import React, { Component } from 'react';
import { StyleSheet,   
} from 'react-native';
import style from '../styles/styles'
import {Button, Card, CardItem, Thumbnail, Text, Left, Body, Right, Icon} from 'native-base';
import styles from '../styles/styles';

export default class MovieCard extends Component {
    render() {
        //image url
        let pic =  ''
        return (
            <Card style={{flex: 0}}>
            <CardItem>
            <Left style={{flex: 0}}>
                <Thumbnail square source={{ uri: pic }} />
            </Left>
            <Body style={{flex: 1, padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}></Text>
            </Body>
            <Right style={{flex: 0}}>
                <Button transparent
                onPress = {() => this.props.pressed(this.props.id,this.props.name,this.props.overview,this.props.date)}
                >
                    <Text style={{fontWeight: 'bold'}}>
                        View
                    </Text>
                </Button>
            </Right>
            </CardItem>
            <CardItem>
                <Text style={{fontSize: 12}} numberOfLines={2}></Text>
            </CardItem>
            <CardItem footer>
                <Text style={{fontSize: 12}}>Release: {this.props.date}</Text>
            </CardItem>
            </Card>
        );
    }
}