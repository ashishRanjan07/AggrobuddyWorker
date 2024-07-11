import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';

const RenderDatalist = ({data}) => {
//   console.log(data, 'line 7');

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.renderItem}>
        <Text>Job Name {item.job_name}</Text>
        <Text>Job offered by {item.offered_by}</Text>
        <Text>Posted by {item.offered_by_name}</Text>
        <Text>location {item?.job_location?.name}</Text>
        <Text>Duration {item?.job_requirement_time}</Text>
        <Text>Amount {item?.rate}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RenderDatalist;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
  },
  renderItem: {
    borderWidth: 1,
    marginVertical: responsive(5),
    borderRadius: responsive(5),
    padding: responsive(10),
    borderColor: AppColor.light_Blue,
    gap: responsive(5),
  },
});
