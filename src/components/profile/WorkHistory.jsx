import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import Data from '../../assets/json/WorkHistory.json';
import {responsive} from '../../utils/Responsive';
import ImagePath from '../../utils/ImagePath';

const WorkHistory = () => {
  const [showMoreDetails, setShowModeDetails] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const showMoreUserDetails = item => {
    setShowModeDetails(!showMoreDetails);
    setSelectedData(item);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        onPress={() => showMoreUserDetails(item)}>
        <View style={styles.contentHolder}>
          <View style={styles.firstPart}>
            <Text style={styles.dateText}>Start date {item.start_date}</Text>
            <Text style={styles.text}>Given by {item.employee_name}</Text>
            <Text style={styles.dateText}>Name {item.job_title}</Text>
          </View>
          <View style={{width: '20%'}}>
            <Image
              source={
                item.work_type === 'Indoor'
                  ? ImagePath.indoor
                  : ImagePath.outdoor
              }
              resizeMode="center"
              style={{height: responsive(125), width: responsive(65)}}
            />
          </View>
        </View>
        {selectedData?.employee_id === item?.employee_id && showMoreDetails && (
          <View style={{gap: responsive(10)}}>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Total Worked Hrs</Text>
              <Text style={styles.valueText}>
                {selectedData?.total_hours_worked}
              </Text>
            </View>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Rate / hrs</Text>
              <Text style={styles.valueText}>{selectedData?.hourly_rate}</Text>
            </View>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Total amount</Text>
              <Text style={styles.valueText}>{selectedData?.total_pay}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <VirtualizedList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.employee_id.toString()}
        getItemCount={() => Data.length}
        getItem={(data, index) => Data[index]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WorkHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderHolder: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: responsive(10),
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
  },
  contentHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstPart: {
    width: '80%',
    gap: responsive(5),
  },
  dateText: {
    fontSize: responsive(16),
    fontFamily: 'Roboto-Medium',
    color: AppColor.black,
  },
  text: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Medium',
    color: AppColor.dark_Green,
  },
  lowerViewHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsive(10),
  },
  keyText: {
    fontSize: responsive(14),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
  valueText: {
    fontSize: responsive(14),
    color: AppColor.success,
    fontFamily: 'Roboto-Medium',
  },
});
