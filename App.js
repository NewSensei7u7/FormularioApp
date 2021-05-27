import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Formik } from 'formik'; 

export default function App() {
  return (
    <View>
      <Text style = {styles.formulario}>Formulario de Contacto</Text>
      <Formik
      validateOnMount ={true}
      initialValues = {{nombresyapellidos: "",email: "", mensaje: ""}}
      onSubmit = {values => console.log(values)}
      >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        }) => (<>

        <TextInput style = {styles.nombresyapellidos} 
        placeholder = "Nombre y Apellidos"
        onChangeText = {handleChange("nombresyapellidos")}
        onBlur = {handleBlur("nombresyapellidos")}
        value = {values.nombresyapellidos}
        keyboardType = "default"
        />
        {(errors.nombresyapellidos && touched.nombresyapellidos) && 
        <Text style = {styles.errorText}>{errors.nombresyapellidos}</Text>
        }

        <TextInput style = {styles.email}
        placeholder = "micorreo@correo.com"
        onChangeText = {handleChange("email")}
        onBlur = {handleBlur("email")}
        value = {values.email}
        keyboardType = "email-address"
        />
        {(errors.email && touched.email) && 
        <Text style = {styles.errorText}>{errors.email}</Text>
        }

        <TextInput style = {styles.telefono}
        placeholder = "Nro. de Telefono"
        onChangeText = {handleChange("telefono")}
        onBlur = {handleBlur("telefono")}
        value = {values.telefono}
        />
         {(errors.telefono && touched.telefono) && 
        <Text style = {styles.errorText}>{errors.telefono}</Text>
        }

        <TextInput style = {styles.mensaje}
        onChangeText = {handleChange("mensaje")}
        onBlur = {handleBlur("mensaje")}
        value = {values.mensaje}
        keyboardType = "default"
        multiline = {true}
        numberOfLines = {4}
        placeholder = {"ingresa tu mensaje"}
        />
        {(errors.mensaje && touched.mensaje) && 
        <Text style = {styles.errorText}>{errors.mensaje}</Text>
        }

        <TouchableOpacity
        style = {styles.colorBtn}
        onPress = {handleSubmit}
        >
        <Text style = {styles.colorTxtBtn}>Aceptar</Text>
        </TouchableOpacity>
      </>
        )}
        </Formik>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    color: Colors.black,
    fontSize: 18,
    marginTop: 45,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: "center",
  },
  nombresyapellidos: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
  email: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
  telefono: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
  mensaje: {
    color: Colors.dark,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Colors.black,
    paddingRight: 12,
  },
  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
    marginTop: 15,
  },
  colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
