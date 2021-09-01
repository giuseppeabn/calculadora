import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

    function Boton({
      label,
      colorDelBoton = grisOscuro,
      colorDelTexto = blanco,
      width = 90,
      textStyle = {},
      btnStyle = {},
      onPress,
    }) {
      return (
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: colorDelBoton, width: width},
            btnStyle,
          ]}
          onPress={onPress}
          activeOpacity={0.6}>
          <Text style={[styles.texto, {color: colorDelTexto}, textStyle]}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    }

    export default Boton;