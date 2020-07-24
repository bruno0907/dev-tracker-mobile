import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

export default function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username')

    return (
        <WebView style={styles.profile} source={{ uri: `https://github.com/${githubUsername}`}} />
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
    }
});