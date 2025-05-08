import { router, useNavigation } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import WebView from "react-native-webview";



export default function Index() {

  const navigation = useNavigation();

  const handleNavigationChange = (navState:any) => {
    const currentUrl = navState.url;

    if(currentUrl.includes('about') || currentUrl === 'https://courses.acadable.com/about'){
      router.replace('/(tabs)/profile')
    }
  }

  return (
    
      <WebView className="w-full h-full"
        source={{
          uri:"https://colourpop.com",
        }}
        onNavigationStateChange={handleNavigationChange}
        startInLoadingState={true}
        renderLoading={() => (
          <View className="flex-1 w-full h-auto min-h-[200px] justify-center absolute align-middle ">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      />

  
  );
}