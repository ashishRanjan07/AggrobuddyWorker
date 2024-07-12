import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import Data from '../../assets/json/WorkHistory.json';
import CustomButton from '../CustomButton';

const LastWorkHistory = () => {
  const [count, setCount] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();

  const modalVisibility = item => {
    console.log(item, 'ine 20');
    setShowModal(!showModal);
    setData(item);
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
    setData();
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        key={item.employee_id}
        style={styles.renderHolder}
        onPress={() => modalVisibility(item)}>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Text style={styles.listText}>{item.start_date}</Text>
        </View>
        <View style={{width: '50%', alignItems: 'center'}}>
          <Text style={styles.listText}>{item.job_title}</Text>
        </View>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Text style={[styles.listText, {color: AppColor.success}]}>
            {item.total_pay}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerHolder}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>Last work history Info</Text>
        </View>
        <View style={styles.iconHolder}>
          <Text style={styles.recordText}>Record</Text>
          <View style={styles.countHolder}>
            <TextInput
              value={count}
              placeholder="C"
              onChangeText={text => setCount(text)}
            />
          </View>
        </View>
      </View>
      {Data.slice(0, count).map((item, index) => renderItem(item))}
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.text}>More Info</Text>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Name</Text>
              <Text style={styles.valueText}>{data?.employee_name}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Job Name</Text>
              <Text style={styles.valueText}>{data?.job_title}</Text>
            </View>
          </View>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Work Type</Text>
              <Text style={styles.valueText}>{data?.work_type}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Rate</Text>
              <Text style={styles.valueText}>{data?.hourly_rate}</Text>
            </View>
          </View>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Duration</Text>
              <Text style={styles.valueText}>{data?.total_hours_worked}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Amount</Text>
              <Text style={styles.valueText}>{data?.total_pay}</Text>
            </View>
          </View>
          <View style={{width: '80%'}}>
            <CustomButton
              title={'Close'}
              color={AppColor.dim_Grey}
              handleAction={handleModalClose}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LastWorkHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    borderRadius: responsive(5),
    elevation: responsive(10),
  },
  headerHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textHolder: {
    width: '60%',
    // alignItems: 'center',
    padding: responsive(10),
  },
  iconHolder: {
    width: '40%',
    alignItems: 'center',
    padding: responsive(10),
    flexDirection: 'row',
    gap: responsive(10),
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: responsive(20),
    color: AppColor.primary,
  },
  recordText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontWeight: 'Roboto-Medium',
  },
  countHolder: {
    borderWidth: 2,
    width: responsive(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsive(5),
    backgroundColor: AppColor.dim_Grey,
    borderColor: AppColor.dim_Grey,
  },
  countText: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
  renderHolder: {
    padding: 10,
    borderWidth: 2,
    borderRadius: responsive(5),
    marginVertical: responsive(5),
    width: '95%',
    alignSelf: 'center',
    borderColor: AppColor.primary,
    flexDirection: 'row',
  },
  modalContainer: {
    backgroundColor: AppColor.white,
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30%',
    borderColor: AppColor.white,
    elevation: responsive(15),
    borderRadius: responsive(10),
    padding: responsive(5),
  },
  contentHolder: {
    width: '40%',
    gap: responsive(10),
    padding: responsive(5),
  },
  keyText: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Bold',
    color: AppColor.success,
  },
  valueText: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Bold',
    color: AppColor.primary,
  },
  itemHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: responsive(5),
  },
  listText: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
});
