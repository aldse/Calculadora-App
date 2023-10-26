import { Text, View } from "react-native";
import { useContext, useState } from 'react'
import { UtilsContext } from "./context";

export default function Calculadora(props) {
    const { utils, setContext } = useContext(UtilsContext)
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
                    {utils.value.map((item,index) =>
                        <Text
                        key={index}
                        style={{
                           marginTop: "1%",
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           fontSize:"40px",
                           width:"100%"
                        }}>{item}</Text>
                    )}
                    
                </View>
            </View>
        </>

    );
}