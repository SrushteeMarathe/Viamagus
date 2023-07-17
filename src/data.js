const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Stripe Earned',
      times:"x 3",
      description:'Top 10% of highest spending players in a month',
      image:"../assets/Scroll.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Born Winner',
      description:'Top 10% of highest spending players in a month',
      image:"../assets/Scroll.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Trader of the Month',
      description:'Won 7 under-over games in a row',
      image:"../assets/Scroll.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571hja576',
        title: 'Trader of the Month',
        description:'Won 7 under-over games in a row',
        image:"../assets/Scroll.jpg"
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e2na56',
        title: 'Trader of the Month',
        description:'Won 7 under-over games in a row',
        image:"../assets/Scroll.jpg"
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571eakjsbd67',
        title: 'Trader of the Month',
        description:'Won 7 under-over games in a row',
        image:"../assets/Scroll.jpg"
      },
  ];

  export default Data

//   <FlatList
//   data={Data}
//   renderItem={(item)=>(
//     <View style={styles.flatlistSubContainer}>
//     <Image
//     source={require('../assets/Scroll.jpg')}
//     style={styles.flatlistImage}
//   />
//   <View style={styles.flatlistSubContainer1}>
//   <Text style={styles.flatlistTitle}>{item.title}</Text>
//   <Text style={styles.flatlistDescription}>{item.description}</Text>
//   </View>
//     </View>
//   )}
//   keyExtractor={item => item.id}
// />