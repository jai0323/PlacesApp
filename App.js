import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllPaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlaces';
import IconButton from './components/UI/IconButton';
import  {Colors}  from './constrants/colors';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar styles='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{ backgroundColor: Colors.primary500},
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700},

      }}>
        <Stack.Screen 
          name="AllPlaces" 
          component={AllPaces} 
          options={({navigation}) => ({
            title : 'Your Favorite Places',
            headerRight: ({tintColor}) => <IconButton icon="add" color={tintColor} size={24} onPress={() => navigation.navigate('AddPlaces')} />
          })}
        />
        <Stack.Screen 
          name="AddPlaces" 
          component={AddPlace} 
          options={{title:'Add new Place'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
