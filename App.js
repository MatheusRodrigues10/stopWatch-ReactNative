import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
  
  const [timer, setTimer] = useState(0)
  const [inicialize, setinicialize] = useState('Iniciar')
  const timerRef = useRef(null)

  //iniciar o cronômetro
  const start = () => {
    if(timerRef.current) {
      //para o timer
      clearInterval(timerRef.current);
      timerRef.current = null;
      setinicialize('Iniciar')
    } else {
    timerRef.current = setInterval(() => {
        setTimer(prevTimer => prevTimer + 0.1)
      }, 100);

      setinicialize('Parar')
    }
  };

  //reinicia o cronômetro
  const clean = () => {
    if(timerRef.current) {
      //para o timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimer(0)
    setinicialize('Iniciar')
  };
  
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./img/watch.jpg')} />
      <Text style={styles.timer}>{timer.toFixed(1)}</Text>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={start}>
          <Text styles={styles.buttonText}>{inicialize}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text styles={styles.buttonText} onPress={clean}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  timer: {
    position:'absolute',
    top:280,
    color: '#444446',
    fontSize: 90,
    marginBottom: 100,
    backgroundColor: 'transparent',
  },
  buttonArea:{
    flexDirection:'column',
    height:120,
    width:120,
    position:'relative',
    bottom:-60
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:5,
    margin: 10,
    borderColor:'black',
    borderWidth:1
  }
});
