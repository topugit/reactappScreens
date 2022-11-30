import React, {useState} from "react";
import { Text, View, StyleSheet,ScrollView, Button, TextInput, Switch } from "react-native";
import {Picker} from '@react-native-picker/picker';

const InputComponent = (props) => {
    let [inputtext, setinputtext] = useState();
    let [isEnabled, setisEnabled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (       
        <View>
            <Text style = {styles.textStyle}> This is input componnent example</Text>
            <Text>Input Text</Text>
            <TextInput
                    style={{
                    height: 40,
                    borderColor: 'red',
                    borderWidth: 1,
                    margin:20
                    }}
                    placeholder="Type in me and see the result below."
                    onChangeText={function (currentInput){
                        setinputtext(currentInput)
                    }}
                    
                />
                <Text>{inputtext}</Text>
                <Button
                title="submit"
                onSubmitEditing = {function (){
                    console.log(inputtext)
                }}
            />

            {/* Switch holds any two value like true or false...like screen dark or light */}
            <Switch
                value = {isEnabled}
                onValueChange ={ function(){
                    if(isEnabled===true){
                        setisEnabled(false)
                    }else{
                        setisEnabled(true)
                    }
                }}
            />

            {/*Picker */}
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                        <Picker.Item label="Php" value="js" />
                        <Picker.Item label="HTML" value="js" />
                        </Picker>
                            
                    </View>
                )
            }

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: 'red',
            margin:30,
            padding: 10,
            
        },
        viewStyle:{
            backgroundColor: 'green',
            borderColor:'red',
            borderWidth: 5,
        }
    }
)

export default InputComponent;