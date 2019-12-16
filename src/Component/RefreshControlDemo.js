import React, { Component } from 'react';
import { ScrollView, RefreshControl, StyleSheet, Text, View } from 'react-native';
const [refreshing, setRefreshing] = React.useState(false);
// const onRefresh
// const refreshing = false
// const setRefreshing = false

class RefreshControlDemo extends Component {

onRefresh = () => {
    React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);
}

    wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing} onRefresh={this.onRefresh} />
                    }
                >
                    <Text>Pull down to see RefreshControl indicator</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RefreshControlDemo