import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import React, {useState} from 'react';
import Data from '../../assets/json/PaymentTransactionRecord.json';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';

const Transaction = () => {
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
        <View style={{gap: responsive(10)}}>
          <View style={styles.lowerViewHolder}>
            <Text style={styles.keyText}>Payment date</Text>
            <Text style={styles.valueText}>{item?.payment_date}</Text>
          </View>
          <View style={styles.lowerViewHolder}>
            <Text style={styles.keyText}>Working Hours</Text>
            <Text style={styles.valueText}>{item?.hours_worked}</Text>
          </View>
          <View style={styles.lowerViewHolder}>
            <Text style={styles.keyText}>Total amount</Text>
            <Text style={styles.valueText}>{item?.payment_amount}</Text>
          </View>
        </View>
        {selectedData?.employee_id === item?.employee_id && showMoreDetails && (
          <View
            style={{
              gap: responsive(10),
              marginVertical: responsive(10),
              padding: responsive(10),
              borderTopWidth: 1,
              borderColor: AppColor.dim_Grey,
            }}>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Job Title</Text>
              <Text style={styles.valueText}>{selectedData?.job_title}</Text>
            </View>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Payment Mode</Text>
              <Text style={styles.valueText}>
                {selectedData?.payment_method}
              </Text>
            </View>
            <View style={styles.lowerViewHolder}>
              <Text style={styles.keyText}>Department</Text>
              <Text style={styles.valueText}>{selectedData?.department}</Text>
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
        initialNumToRender={15}
        renderItem={renderItem}
        keyExtractor={item => item.transaction_id.toString()}
        getItemCount={() => Data.length}
        getItem={(data, index) => Data[index]}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderHolder: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(5),
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
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
