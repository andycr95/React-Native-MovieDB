import React from 'react'
import {TabNavigator, TabBarBottom} from 'react-navigation'
import {Icon} from 'react-native-elements'

import SplashScreen from './components/SplashScreen'
import MoviesStack from './routes/Movies'
import TvShowStack from './routes/TvShows'
import SearchStack from './routes/Search'
import SettingsStack from './routes/Settings'

import { primaryColor } from './styles/styles.js'

// Application router
const MainScreen = TabNavigator({
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'Movies',
      tabBarIcon: ({tintColor}) => <Icon name='movie' size={30} color={tintColor} />
    }
  },
  TvShows: {
    screen: TvShowStack,
    navigationOptions: {
      tabBarLabel: 'TV Shows',
      tabBarIcon: ({tintColor}) => <Icon name='tv' size={30} color={tintColor} />
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Icon name='search' size={30} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Icon name='settings' size={30} color={tintColor} />
    }
  }
},
{
  initialRouteName: 'Movies',
  tabBarOptions: {
    activeTintColor: primaryColor,
    inactiveTintColor: '#a9a9a9',
    style: {
      backgroundColor: '#222',
      borderTopColor: '#181818',
      borderTopWidth: 1
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false
})

export default MainScreen
