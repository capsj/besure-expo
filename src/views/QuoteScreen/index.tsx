import React from 'react';
import { StyleSheet, Image, View } from "react-native";
import { WebView } from 'react-native-webview';
// @ts-ignore
import logo from '../../assets/logo-1.jpg';

const QuoteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={{ height: '100%', resizeMode: 'contain' }}/>
            </View>
            <WebView
                source={{ uri: 'https://amedex.web.app/widget?config=GBzUWqXQgdZnGuZNFGqwlcghiNj1&isMobile=true' }}
                containerStyle={{ flex: 9 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        backgroundColor: '#23017e',
        flex: 1,
        alignItems: 'center'
    },
});

export default QuoteScreen;
