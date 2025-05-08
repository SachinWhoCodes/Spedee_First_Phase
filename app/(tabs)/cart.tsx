import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import WebView from 'react-native-webview';

const Cart = () => {
    return(
        <WebView className="w-full h-full"
                source={{
                  uri:"https://colourpop.com/collections/all",
                }}
                // onNavigationStateChange={handleNavigationChange}
                startInLoadingState={true}
                renderLoading={() => (
                  <View className="flex-1 w-full h-auto min-h-[200px] justify-center">
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                )}
        />
    );
}

export default Cart