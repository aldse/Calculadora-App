import { Text, Image, View, TextInput, Switch, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useState } from 'react'

export default function Calculadora(props) {
    const [value, setValue] = useState("")
    return (
        <>
            <View
                style={{
                    backgroundColor: '#D8D9DA',
                    height: "100%"
                }}>
                <View
                    style={{
                        marginTop: "3%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            color: 'black',
                            textAlign: 'center',
                            padding: "10px",
                            backgroundColor: '#D8D9DA',
                            borderRadius: "10px",
                            borderWidth: '1px',
                            borderColor: "black",
                            width: "90%",
                            height: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize:"40px"
                        }}> {value}
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "2%",
                            width: "30%"
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setValue(value + "+")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "-")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "40px"
                                }}
                            >-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "/")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "*")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(eval(value))}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >=</Text>
                        </TouchableOpacity>
                    </View>


                    <View
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "4%",
                            width: "12%"
                        }}>
                        <TouchableOpacity
                            onPress={() => setValue(value + "1")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "2")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "3")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >3</Text>
                        </TouchableOpacity>
                    </View>


                    <View
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "1%",
                            width: "12%"
                        }}>
                        <TouchableOpacity
                            onPress={() => setValue(value + "4")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "5")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "6")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >6</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "1%",
                            width: "12%"
                        }}>
                        <TouchableOpacity
                            onPress={() => setValue(value + "7")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "8")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setValue(value + "9")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >9</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1%",
                            width: "12%"
                        }}>
                        <TouchableOpacity
                            onPress={() => setValue(value + "0")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "35px"
                                }}
                            >0</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "3%",
                            width: "19%"
                        }}>
                        <TouchableOpacity
                            onPress={() => setValue("")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                padding: "7%",
                                width: "auto",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "30px"
                                }}
                            >Limpar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Historico")}

                            style={{
                                backgroundColor: "white",
                                borderRadius: "10px",
                                padding: "7%",
                                width: "auto",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text
                                style={{
                                    fontSize: "30px"
                                }}
                            >Histórico</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>

    );
}