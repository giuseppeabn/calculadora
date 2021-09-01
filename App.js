import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const orange = '#FF8C00';
const blanco = '#fff';
const negro = '#000';
const gris = '#c0c0c0';
const grisOscuro = '#272B2C';

function App() {
  console.log('render');

  const [resultado, setResultado] = useState(0);
  const [primerValor, setPrimerValor] = useState(0);
  const [segundoValor, setSegundaValor] = useState(0);
  const [operacion, setOperacion] = useState(null);

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

  function Fila(props) {
    return <View style={styles.filaBtn}>{props.children}</View>;
  }

  function manejarOnPress(valor) {
    console.log(valor);
  }

  function dividir(valor) {
    console.log(valor);
  }

  function sumar() {
    setOperacion('+');
  }

  function restar() {
    setOperacion('-');
  }

  function multiplicar() {
    setOperacion('X');
  }

  function calcularResultado() {
    const primerValorFormateado = parseInt(primerValor);
    const segundoValorFormateado = parseInt(segundoValor);
    let resultadoOperacion;
    switch (operacion) {
      case '+':
        resultadoOperacion = primerValorFormateado + segundoValorFormateado;
        setResultado(resultadoOperacion);
        break;
      case '-':
        resultadoOperacion = primerValorFormateado - segundoValorFormateado;
        setResultado(resultadoOperacion);
        break;
      case 'X':
        resultadoOperacion = primerValorFormateado * segundoValorFormateado;
        setResultado(resultadoOperacion);
        break;
      default:
        break;
    }
    setOperacion(null);
  }

  function guardarValores(valor) {
    if (primerValor.length === 6 || segundoValor.length === 6) {
      return;
    }
    if (operacion === null) {
      setPrimerValor(primerValor + valor);
      setResultado(primerValor + valor);
    } else {
      setSegundaValor(segundoValor + valor);
      setResultado(segundoValor + valor);
    }
  }

  const btnDobleStyle = {alignItems: 'flex-start', paddingLeft: 38};

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorResultado}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
      <View style={styles.contenedorBotones}>
        {/********* FILA UNO **********/}
        <Fila>
          <Boton
            label={'AC'}
            colorDelTexto={negro}
            colorDelBoton={gris}
            onPress={() => {
              setResultado(0);
              setPrimerValor(0);
              setSegundaValor(0);
            }}
          />
          <Boton
            label={'+/-'}
            colorDelTexto={negro}
            colorDelBoton={gris}
            onPress={() => {
              manejarOnPress('+/-');
            }}
          />
          <Boton
            label={'%'}
            colorDelTexto={negro}
            colorDelBoton={gris}
            onPress={() => {
              manejarOnPress('%');
            }}
          />
          <Boton
            label={'/'}
            colorDelBoton={orange}
            onPress={() => {
              dividir('/');
            }}
          />
        </Fila>
        {/********* FILA DOS **********/}
        <Fila>
          <Boton
            label={'7'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('7')}
          />
          <Boton
            label={8}
            colorDelTexto={blanco}
            onPress={() => guardarValores('8')}
          />
          <Boton
            label={'9'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('9')}
          />
          <Boton
            label={'X'}
            colorDelBoton={operacion === 'X' ? blanco : orange}
            colorDelTexto={operacion === 'X' ? orange : undefined}
            onPress={() => {
              multiplicar();
            }}
          />
        </Fila>
        {/* *******FILA TRES **********/}
        <Fila>
          <Boton
            label={'4'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('4')}
          />
          <Boton
            label={'5'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('5')}
          />
          <Boton
            label={'6'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('6')}
          />
          <Boton
            label={'-'}
            onPress={() => {
              restar();
            }}
            colorDelBoton={operacion === '-' ? blanco : orange}
            colorDelTexto={operacion === '-' ? orange : undefined}
          />
        </Fila>
        {/* *******FILA CUATRO **********/}
        <Fila>
          <Boton
            label={'1'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('1')}
          />
          <Boton
            label={'2'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('2')}
          />
          <Boton
            label={'3'}
            colorDelTexto={blanco}
            onPress={() => guardarValores('3')}
          />
          <Boton
            label={'+'}
            colorDelBoton={operacion === '+' ? blanco : orange}
            colorDelTexto={operacion === '+' ? orange : undefined}
            onPress={() => {
              sumar();
            }}
          />
        </Fila>
        {/* *******FILA CINCO **********/}
        <Fila>
          <Boton
            label={'0'}
            colorDelTexto={blanco}
            width={187}
            btnStyle={btnDobleStyle}
            onPress={() => guardarValores('0')}
          />
          <Boton label={','} colorDelTexto={blanco} />
          <Boton
            label={'='}
            colorDelBoton={orange}
            onPress={() => {
              calcularResultado();
            }}
          />
        </Fila>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'black',
  },
  contenedorResultado: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  resultado: {
    color: '#fff',
    fontSize: 100,
  },
  contenedorBotones: {
    flex: 1.8,
    backgroundColor: 'black',
    paddingLeft: 2,
    marginTop: 30,
  },
  filaBtn: {
    flexDirection: 'row',
  },
  btn: {
    height: 90,
    backgroundColor: '#c0c0c0',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    marginTop: 7,
  },
  texto: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
  },
});

export default App;
