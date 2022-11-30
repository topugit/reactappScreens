import React from "react";
import { Text, View, StyleSheet,ScrollView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

//list screen array

const ListScreenArray = (props) => {
    const uni = [
        {name: "Buet" , key: '1'},
        {name: "Ruet" , key: '2'},
        {name: "Cuet" , key: '3'},
        {name: "Sust" , key: '4'},
        {name: "IUB" , key: '5'},
        {name: "NSU" , key: '6'},
        {name: "SUST" , key: '7'},
        {name: "Aust" , key: '8'},
    ]

    return(
        <ScrollView>
            <View style = {styles.viewStyle}>
                <FlatList
                        data={uni}
                        renderItem={function ({item}){
                                return <Text style={styles.textStyle}>{item.name}</Text>
                                }
                            }
                    />
            </View>  

            <View>
            <Button 
                title = 'Go To Card' 
                onPress={function(){
                props.navigation.navigate("All Cards");                 
                }}
                style={{
                    backgroundColor:'red',
                    color:'white',
                    height:'100',
                    width:'100'
                }}
            />
            </View>
        </ScrollView>     
    )

}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'white',
            marginVertical:5,
            padding:10
        },
        viewStyle:{
            backgroundColor: 'green',
            borderColor:'red',
            borderWidth: 5,
        }
    }
)

export default ListScreenArray;