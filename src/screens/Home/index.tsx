import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from "./styles";
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import CardProductMedium from "../../components/CardProductMedium";
import {ProductProps} from '../../../types'

type ItemProps = {
  item: ProductProps;
};

export default function Home() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limitRegs = useRef(10);

  const getProducts = async ()=>{
    setIsLoading(true);
    const res = await axios({
      method: 'get',
      url: `https://fakestoreapi.com/products?limit=${limitRegs.current}`,
    })
    setData(res.data)
    setIsLoading(false);
  }

  const getMoreRegs = ()=>{
    limitRegs.current += 10;
    getProducts();
  }

  useEffect(() =>{
    getProducts()
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item : ProductProps) => item.id.toString()}
        renderItem={({item}: ItemProps) => <CardProductMedium item={item} />}
        contentContainerStyle={styles.containerFlatList}
        numColumns={2}
        onEndReached={getMoreRegs}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isLoading ? <ActivityIndicator size={'large'} /> : null}
      />
    </View>
  );
}
