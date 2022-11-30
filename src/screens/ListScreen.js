import React from "react";
import { Text, View, StyleSheet, Button,Image, ScrollView, TextInput } from "react-native";


const ListScreen = (props) => {
    const uni_1 = "BUET";
    const uni_2 = "RUET";
    const uni_3 = "KUET";
    const uni_4 = "DU";
    const uni_5 = "CUET";
    const uni_6 = "SUST";
    const uni_7 = "BRAC";
    const uni_8 = "NSU";

    return(
        <ScrollView>
            <View style = {styles.viewStyle}>
                <Text style={styles.textStyle}>{uni_1}</Text>
                <Text style={styles.textStyle}>{uni_2}</Text>
                <Text style={styles.textStyle}>{uni_3}</Text>
                <Text style={styles.textStyle}>{uni_4}</Text>
                <Text style={styles.textStyle}>{uni_5}</Text>
                <Text style={styles.textStyle}>{uni_6}</Text>
                <Text style={styles.textStyle}>{uni_7}</Text>
                <Text style={styles.textStyle}>{uni_8}</Text>

            
                <Text>Some text</Text>
                    <View>
                        <Text>Some more text</Text>
                        <Image
                        source={{
                            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                        }}
                        style={{ width: 200, height: 200 }}
                        />
                    </View>
                <TextInput
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                    }}
                    defaultValue="You can type in me"
                />
           
            </View> 

             <View>          
                    <Button 
                        title = 'Go To List Screen Array' 
                        onPress={function(){
                        props.navigation.navigate("Listarray");                 
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
            color: 'blue',
            marginVertical:10,
        },
        viewStyle:{
            backgroundColor: 'yellow',
            borderColor:'red',
            borderWidth: 5,
        }
    }
)


 
export default ListScreen;
