import { Text, Image, View, TextInput, Switch, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useState } from 'react'

export default function Calculadora(props) {
    const [senha, setSenha] = useState()
    const [inicio, setInicio] = useState(false)

    return (
        <>
            <View
                style={{
                    backgroundColor: '#D8D9DA',
                    height: "100%",
                }}>
                <View
                    style={{
                        marginTop: "2%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            fontSize: "90px"
                        }}
                    >Histórico:</Text>
                </View>
            </View>
        </>

    );
}