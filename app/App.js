// import React, { Component } from 'react';
// import { ListView } from 'react-native';
// import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
// const datas = [
//     'Simon Mignolet',
//     'Nathaniel Clyne',
//     'Dejan Lovren',
//     'Mama Sakho',
//     'Alberto Moreno',
//     'Emre Can',
//     'Joe Allen',
//     'Phil Coutinho',
// ];
// export default class SwipeableListExample extends Component {
//     constructor(props) {
//         super(props);
//         this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//         this.state = {
//             basic: true,
//             listViewData: datas,
//         };
//     }
    // deleteRow(secId, rowId, rowMap) {
    //     rowMap[`${secId}${rowId}`].props.closeRow();
    //     const newData = [...this.state.listViewData];
    //     newData.splice(rowId, 1);
    //     this.setState({ listViewData: newData });
    // }
    // render() {
    //     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //     return (
    //         <Container>
    //             <Header />
    //             <Content>
                    {/*<List*/}
                        {/*leftOpenValue={75}*/}
                        {/*rightOpenValue={-75}*/}
                        {/*dataSource={this.ds.cloneWithRows(this.state.listViewData)}*/}
                        {/*renderRow={data =>*/}
                            {/*<ListItem>*/}
                                {/*<Text> {data} </Text>*/}
                            {/*</ListItem>}*/}
                        {/*renderLeftHiddenRow={data =>*/}
                            {/*<Button full onPress={() => alert(data)}>*/}
                                {/*<Icon active name="information-circle" />*/}
                            {/*</Button>}*/}
                        {/*renderRightHiddenRow={(data, secId, rowId, rowMap) =>*/}
                            {/*<Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>*/}
                                {/*<Icon active name="trash" />*/}
                            {/*</Button>}*/}
                    {/*/>*/}
                {/*</Content>*/}
            {/*</Container>*/}
        {/*);*/}
    {/*}*/}
{/*}*/}



import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists1 from './screens/Lists1';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

export default TabNavigator({
    'Bookcase': {
        screen: Bookcase,
        navigationOptions: {
            tabBarLabel: 'Bookcase',
            tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
        },
    },
    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
        },
    },
    'Add Book': {
        screen: AddBook,
        navigationOptions: {
            tabBarLabel: 'Add Book',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
        },
    },
    // 'Lists1': {
    //     screen: ReadingListStack,
    //     navigationOptions: {
    //         tabBarLabel: 'Lists',
    //         tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
    //     },
    // },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
        },
    },
});

export const createRootNavigator = () => {
    return StackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
    );
};