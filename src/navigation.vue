<template>
<root>
  <app-navigator></app-navigator>
</root>

</template>

<script>

import { createStackNavigator,
           createBottomTabNavigator,
           createDrawerNavigator,
           createAppContainer } 
           from "vue-native-router";
           
           
           

 import HomeScreen from '@/screens/HomeScreen.vue'
 import Hello from '@/components/Hello.vue'
 import Screen1 from '@/screens/Screen1.vue'
 import DetailsScreen from "@/screens/DetailsScreen.vue"
 import Screen2 from '@/screens/Screen2.vue'
 import Screen3 from '@/screens/Screen3.vue'

 import { Root } from "native-base";




const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Screen1:Screen1,
    Hello:Hello,
    DetailsScreen: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const SomeOtherStack = createStackNavigator({
  Screen2: Screen2
    
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
}
)
const SomeOtherOtherStack = createStackNavigator({
    Screen3: Screen3
},{
  headerMode: 'none',
  navigationOptions:{
    headerVisible: false
  }
}

)
const DrawerNavigation = createDrawerNavigator({
    DrawerStack1: SomeOtherStack,
    DrawerStack2: SomeOtherOtherStack
}
)
//const DrawerNavigation = createDrawerNavigator({
   // Screen2: Screen2,
    //Screen3: Screen3
//}
//)




const TabNavigation = createBottomTabNavigator(
    {
        Meetups: HomeStack,
        Other: DrawerNavigation,
      

    }
)

const AppNavigator = createAppContainer(TabNavigation);

export default {
  components: { AppNavigator, Root },
}
  

  
    
</script>


