import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ListScreenArray from "./src/screens/ListScreenArray"
import card from "./src/screens/card"
import StorageScreen from "./src/screens/storagescreen";
import StateScreen from "./src/screens/statescreen"
import StateScreenBox from "./src/screens/statescreenbox";
import InputComponent from "./src/screens/inputcomponent";


// create Home Screen & List Screen or 2 screen
const stack = createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home"> 
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="List" component={ListScreen}/>
        <stack.Screen name="Listarray" component={ListScreenArray}/>
        <stack.Screen name="All Cards" component={card}/>
        <stack.Screen name="Storage Screen" component={StorageScreen}/>
        <stack.Screen name="State Screen" component={StateScreen}/>
        <stack.Screen name="State Screen Box" component={StateScreenBox}/>
        <stack.Screen name="Input Component" component={InputComponent}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;