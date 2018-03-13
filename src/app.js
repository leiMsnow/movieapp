/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './screens';

import {iconsMap, iconsLoaded} from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'black',
	navBarButtonColor: 'black',
	statusBarTextColorScheme: 'dark',
	drawUnderTabBar: true
};

class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			App.startApp();
		});
	}

	static startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Movies',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-film-outline'],
					selectedIcon: iconsMap['ios-film'],
					title: 'Movies',
					navigatorStyle,
					navigatorButtons: {
						rightButtons: [
							{
								title: 'Search',
								id: 'search',
								icon: iconsMap['ios-search']
							}
						]
					}
				}, {
					label: 'Movies',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-film-outline'],
					selectedIcon: iconsMap['ios-film'],
					title: 'Movies',
					navigatorStyle,
					navigatorButtons: {
						rightButtons: [
							{
								title: 'Search',
								id: 'search',
								icon: iconsMap['ios-search']
							}
						]
					}
				},
				{
					label: 'TV Shows',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-desktop-outline'],
					selectedIcon: iconsMap['ios-desktop'],
					title: 'Movies',
					navigatorStyle
				},
				{
					label: 'TV Shows',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-desktop-outline'],
					selectedIcon: iconsMap['ios-desktop'],
					title: 'Movies',
					navigatorStyle
				}
			],
			tabsStyle: {
				tabBarButtonColor: 'black',
				tabBarSelectedButtonColor: 'black',
				tabBarBackgroundColor: 'white'
			},
			appStyle: {
				forceTitlesDisplay: true,
				tabBarBackgroundColor: 'white',
				tabBarButtonColor: 'black',
				tabBarSelectedButtonColor: 'red'
			}
		});
	}
}

export default App;
