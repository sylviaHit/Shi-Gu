import React, {
    Component,
    PropTypes
} from 'react';

import {
    MapView,
    MapTypes,
    Geolocation
} from 'react-native-baidu-map';

import {
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Dimensions from 'Dimensions';

export default class CultureMap extends Component {

    // static navigationOptions = {
        // title: '文化地图',
        // headerTitle: <Button title="文化地图"/>,
        // headerRight: (
        //     <Button
        //         onPress={() => alert('This is a button!')}
        //         title="Info"
        //         color="#fff"
        //     />
        // ),
    // };

    constructor() {
        super();

        this.state = {
            mayType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 113.981718,
                latitude: 22.542449
            },
            markers: [{
                longitude: 113.981718,
                latitude: 22.542449,
                title: "Window of the world"
            },{
                longitude: 113.995516,
                latitude: 22.537642,
                title: ""
            }]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}
                    onMarkerClick={(e) => {
                        console.warn(JSON.stringify(e));
                    }}
                    onMapClick={(e) => {
                    }}
                >
                </MapView>

                <View style={styles.row}>
                    <Button title="Normal" onPress={() => {
                        this.setState({
                            mapType: MapTypes.NORMAL
                        });
                    }} />

                    <Button style={styles.btn} title="Locate" onPress={() => {
                        console.warn('center', this.state.center);
                        Geolocation.getCurrentPosition()
                            .then(data => {
                                console.warn(JSON.stringify(data));
                                this.setState({
                                    zoom: 15,
                                    marker: {
                                        latitude: data.latitude,
                                        longitude: data.longitude,
                                        title: 'Your location'
                                    },
                                    center: {
                                        latitude: data.latitude,
                                        longitude: data.longitude,
                                        rand: Math.random()
                                    }
                                });
                            })
                            .catch(e =>{
                                console.warn(e, 'error');
                            })
                    }} />
                    <Button
                        title='详情页'
                        onPress={()=>{this.props.navigation.navigate('PointDetail')}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 40
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        marginBottom: 16
    }
});