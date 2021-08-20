import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  const estilos = {
    ...styles.boton,
    backgroundColor: color,
    width: ancho ? 180 : 80,
  };

  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={estilos}>
        <Text style={styles.botonTexto}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
