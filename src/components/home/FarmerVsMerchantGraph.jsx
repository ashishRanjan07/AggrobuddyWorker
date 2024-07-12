import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import {ProgressChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const FarmerVsMerchantGraph = () => {
  const data = {
    labels: ['Farmer', 'Merchant'], // optional
    data: [0.5, 0.5],
    id: [1, 2],
  };

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(81, 101, 147, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.main}>
      <View style={styles.textHolder}>
        <Text style={styles.text}>Analysis of income by Graph</Text>

        <ProgressChart
          data={data}
          width={screenWidth - responsive(60)}
          height={220}
          strokeWidth={16}
          radius={32}
          key={data.id}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </View>
    </View>
  );
};

export default FarmerVsMerchantGraph;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius: responsive(5),
    elevation: responsive(10),
    padding: responsive(10),
  },
  textHolder: {
    width: '100%',
    padding: responsive(10),
    gap: responsive(10),
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: responsive(20),
    color: AppColor.primary,
    textAlign: 'center',
  },
});
