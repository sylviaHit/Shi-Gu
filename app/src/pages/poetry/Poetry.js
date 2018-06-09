/**
 * homePage
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Image
} from 'react-native';
var {width,height} = Dimensions.get('window');
var dataAry = [];
import data from './data.json';
export default class Poetry extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataAry: dataAry,
        };
    }

    render() {
        return (
            <View style={{marginTop:30}}>
                <FlatList
                    data = {this.state.dataAry}
                    renderItem = {(item) => this.renderRow(item)}
                    keyExtractor={this.keyExtractor}
                />
                <View style={{width:1,height:height,backgroundColor:'red',position:'absolute',left:50}}></View>
            </View>
        );
    }

    renderRow =(item) =>{
        if(item.item.text){
            return(
                <View style={{marginBottom:10,marginLeft:60}}>
                    <Text>{item.item.text}</Text>
                </View>
            )
        }else{
            return(
                <View style={{flexDirection:'row',marginBottom:10}}>
                    {/*左边*/}
                    <View style={{width:60,marginBottom:10}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>{item.item.time}</Text>
                            <View style={{width:10,height:10,borderRadius:5,backgroundColor:'red',position:'absolute',left:45}}></View>
                        </View>
                    </View>
                    {/*右边*/}
                    <View style={{backgroundColor:"#F2F2F2",marginLeft:5,width:width-70}} onLayout = {(event)=>this.onLayout(event)} >
                        <Text style={{}}>{item.item.content}</Text>
                        {/*<View style={{flexDirection:'row',flexWrap:'wrap'}}>*/}
                            {/*{this.renderImg(item.item.text)}*/}
                        {/*</View>*/}
                    </View>
                </View>
            )

        }



    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }

    onLayout = (event)=>{
        console.log(event.nativeEvent.layout.height)
    }

    renderImg = (imgAry) =>{
        var renderAry = []
        for(var i = 0;i < imgAry.length; i++){
            if(imgAry.length == 1){
                renderAry.push(
                    <Image key={i} source={{uri:imgAry[0].url}} style={{width:200,height:200}}/>
                )
            }else if(imgAry.length == 2 || imgAry.length == 4){
                renderAry.push(
                    <Image key={i} source={{uri:imgAry[i].url}} style={{width:(width-70)*0.5-2,height:(width-70)*0.5-2,marginLeft:1,marginTop:1}}/>
                )
            }else {
                renderAry.push(
                    <Image key={i} source={{uri:imgAry[i].url}} style={{width:(width-70)/3-2,height:(width-70)/3-2,marginLeft:1,marginTop:1}}/>
                )
            }
        }

        return renderAry
    }

    componentDidMount() {
        this.setState({
            dataAry:data
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});