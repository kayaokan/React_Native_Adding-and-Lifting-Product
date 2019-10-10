import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <TouchableOpacity title="Electronics" onPress={() =>this.props.navigation.navigate('Electronics')}>
            <Text style={{ fontSize: 20}}>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity title="Books" onPress={() =>this.props.navigation.navigate('Books')}>
            <Text style={{ fontSize: 20, marginTop: 10}}>Books</Text>
          </TouchableOpacity>
          
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});