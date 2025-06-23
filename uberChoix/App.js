import { StyleSheet, Text, View ,ImageBackground,Image,TouchableOpacity} from 'react-native';

export default function App() {
  return (
  <View style={styles.ParentB}>

 
       <View style={styles.Contenaire}>


      <ImageBackground source={require('./assets/Maps1.png')} style={styles.ImageFond}>
     
        <View  style={styles.Localisation1}>

       
          <View>
            <TouchableOpacity style={styles.Bouton}>
              <Image
                source={require('./assets/images/ChevronGauche.png')} // Chemin vers l'icône de la flèche gauche
                style={styles.ChevroG}
              />
            </TouchableOpacity>
          </View> 
           

         
          <View style={styles.loc2}>
            <Text style={styles.Texte1}>Dakar Guediawaye</Text>
            <TouchableOpacity>
              <Image
                source={require('./assets/images/ChevronDroite.png')} // Chemin vers l'icône de la flèche droite
                style={styles.ChevroD}
              />
            </TouchableOpacity>
          </View> 

        </View>

        <View style={styles.Localisation2}>
           <View style={styles.Black1}>
            <Text style={styles.txt1}>2</Text>
            <Text  style={styles.txt2}>MIN</Text>
           </View>


           <View style={styles.Localisation22}>
             <Text style={styles.sandaga}>Dakar PointE </Text>
             <TouchableOpacity>
              <Image
                source={require('./assets/images/ChevronDroite.png')} // Chemin vers l'icône de la flèche droite
                style={styles.ChevroD}
              />
            </TouchableOpacity>
           </View>

        </View>

      </ImageBackground> 

       </View>
     
      <View style={styles.Paie} >
        <View style={styles.Top1} >
          <View style={styles.Top01}>  

          </View>
          <Text style={styles.Top02}>Choisissez une Course</Text>

        </View>

        <View style={styles.VoitureChoisie}>
       
             <Image source={require('./assets/images/voiture1.png')} style={styles.Voiture1}/>
             <View style={styles.infornation}>
              <View  style={styles.uberX}>
                 <View style={styles.uberX1}>
                  <View style={styles.uberX2}>
                  <Text>UberX</Text>
                  <Image source={require('./assets/images/profil.png')} style={styles.profil}/>
                  <Text style={styles.quatre}>4</Text>
                  </View>
                  <View>
                    <Text style={styles.Horaire}>20H41 .2min</Text>
                  </View>
                   <View>
                    <Text style={styles.francfa}>$12.87</Text>
                   </View>

                 </View>

              </View>
              
             </View>
      
         
        </View>

        <View  style={styles.uberXL}>
          <View style={styles.imageGauche} >
          <Image source={require('./assets/images/voiture1.png')} style={styles.Voiture2XL}/>
          </View>
          <View style={styles.milieu}>
            <Text  style={styles.XXL}>UberXL</Text>
            <Text style={styles.timeGrey}>20h39 .6mn</Text>
            <View style={styles.flash}>
            <Image source={require('./assets/images/Group.png')} style={styles.flashGauche}/>
            <Text style={styles.Rapide0} >Rapide</Text>
            </View>
          </View>
          <View style={styles.Pereprixfin} >
            <Text style={styles.prixfin}>$29.45</Text>
          </View>
        </View>
        <View style={styles.diekhna}>
            <View  style={styles.AvantDernierPartie}>
              <Image source={require('./assets/images/mastercard.png')} style={styles.carteB}/>
              <Text style={styles.masterCard}>MasterCard ******</Text>
               <Image source={require('./assets/images/ChevronDroite.png')} style={styles.fifi}/>
          </View>
           <View style={styles.tDernierPartie}>
            <View style={styles.Choisisser}>
              <Text style={styles.GV}>Choisissez UberX</Text>
            </View>
         
              <Image source={require('./assets/images/horloge.png')}  style={styles.Horloge2} />

           </View>

        </View>

      </View>



      
  </View>
     
  );
}






// Styles pour les composants
const styles = StyleSheet.create({
  ParentB:{
    backgroundColor:'black',

  },
  Contenaire:{
    height:420,
    width:'100%',
    backgroundColor:'white',
    borderWidth:1
   
  },
  ImageFond:{
    height:430,
    width: '100%', 
    borderWidth:1
  },
  ChevroG:{
    width:50, 
    height:54,
  
  },
  ChevroD:{
    width:24, 
    height:24,
  },
  Localisation1:{
     marginTop:70,
     flexDirection:'row',
     justifyContent:'space-around',
     height:150
  },
  Bouton:{
    backgroundColor:'white',
    height:60,
    width:60,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginRight:90,
    marginTop:15,
    marginLeft:3
  },
  loc2:{
    flexDirection:'row',
    marginTop:50,
    backgroundColor:'white',
    height:50,
    marginRight:50,
    width:200,
    justifyContent:'space-around',
    alignItems:'center'
  },
  Texte1:{
    fontSize:17,
    fontFamily: 'Roboto',
  },
  Localisation2:{
    flexDirection:'row',
    marginTop:100,
    justifyContent:'center',
    alignItems:'center',
    height:60,
    marginBottom:50

  },
  Localisation22:{
    flexDirection:'row' ,
    backgroundColor:'#ffffff',
    height:54,
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,
  
  

  },
  Black1:{
    backgroundColor:'#000000',
    height:53,
    width:50,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    
  },
  txt1:{
    color:'white',
    fontSize:18
  },
  txt2:{
    color:'white',
    fontSize:18
  },
  sandaga:{
    fontSize:19,
    paddingLeft:4
   

  },
  Paie:{
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:480,
    marginTop:-23,
    backgroundColor:'white'
  },
  Top01:{
  
    height:5,
    width:40,
    backgroundColor: 'rgba(245, 245, 245, 5)',
    marginBottom:17,
    borderRadius:3
  },
  Top1:{
    borderBottomWidth: 4,
    flexDirection:'culum',
    justifyContent:'center',
    alignItems:'center',
    height:65,
    borderBottomColor: 'rgba(245, 245, 245, 5)'
 

  },
  Top02:{
    fontSize:18,
    marginBottom:9
  },
  Voiture1:{
    width:170,
    height:170,
    alignSelf:'center'

  },
  VoitureChoisie:{
    borderWidth:3,
    height:155,
    marginLeft:20,
    borderRadius:12,
    marginRight:20,
    marginTop:10
  },
  profil:{
    height:14,
    width:12,
    marginRight:2,
    marginTop:1
  },
  uberX1:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',

  },
  uberX2:{
    flexDirection:'row',
    width:80,
    marginLeft:20,
    justifyContent:'space-between',
    marginTop:-59
  },
  francfa:{
    marginRight:20,
    marginTop:-59
  },
  quatre:{
   paddingRight:8
  },
  Horaire:{
    color:'grey',
    marginTop:-41,
    marginLeft:-179,
    fontSize:12
  },
  Voiture2XL:{
    height:179,
    width:169,
    marginBottom:40,
   paddingBottom:80,
   paddingRight:10,
   marginLeft:-15

  },
  flashGauche:{
    height:11,
    width:10,
     paddingRight:2,
    paddingTop:2
  },
  uberXL:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    marginRight:75
  },
  imageGauche:{
    position:'absolute',
   marginRight:150
  },
  milieu:{
  position:'absolute'  ,
   height:75,
   marginRight:-35
  },
  timeGrey:{
    color:'grey'
  },
  XXL:{
    fontSize:20,
    paddingBottom:5
  },
  flash:{
    backgroundColor:'#0096FF',
    flexDirection:'row',
    height:23,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center',
    marginTop:3
  },
  Rapide0:{
    color:'white',
    fontStyle:'normal',
    fontWeight:'bold'
  },
  Pereprixfin:{
    position:'absolute',
    marginLeft:350,
    height:50
  },
  carteB:{
    height:30,
    width:40,
   position:'absolute',
     marginLeft:25,
     marginTop:15
  },
  fifi:{
    width:25,
    height:25,
    marginRight:25,
    marginTop:15
  },
  Horloge2:{
    height:45,
    width:45,
    marginLeft:330,
    backgroundColor:'rgba(245, 245, 245, 8)',
    marginBottom:15,
    borderRadius:8

  },
  diekhna:{
    marginTop:100,
    height:120,
    justifyContent:'space-between'
  },
  AvantDernierPartie:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  tDernierPartie:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  masterCard:{
    marginLeft:80,
    marginTop:20,
    fontSize:18,
  },
  Choisisser:{
    marginLeft:21,
    marginTop:1,
    position:'absolute',
    height:47,
    width:290,
    borderWidth:'1',
    borderRadius:8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  Horloge:{

    backgroundColor:'grey',
   alignContent:'center',
   alignItems:'centre',
   flexDirection:'row',
   marginLeft:25,
   borderRadius:25

  },
  GV:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  }

});