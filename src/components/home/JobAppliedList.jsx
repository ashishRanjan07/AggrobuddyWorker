import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import Data from '../../assets/json/JobAppliedList.json';
import JobDetailsCustomModal from './JobDetailsCustomModal';

const JobAppliedList = () => {
  const [status, setStatus] = useState('Pending');
  const [active, setActive] = useState(true);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [data, setData] = useState();

  const toggle = active => {
    setActive(previousState => !previousState);
    if (active === false) {
      setStatus('Accepted');
    } else {
      setStatus('Pending');
    }
  };

  const filteredData = Data.filter(item => item.status === status);
  const renderItem = item => {
    return (
      <TouchableOpacity
        key={item.employee_id}
        style={styles.renderHolder}
        onPress={() => {
          setShowDetailsModal(!showDetailsModal);
          setData(item);
        }}>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Text style={styles.listText}>{item.workerName}</Text>
        </View>
        <View style={{width: '50%', alignItems: 'center'}}>
          <Text style={styles.listText}>{item.jobGivenBy}</Text>
        </View>
        <View style={{width: '25%', alignItems: 'center'}}>
          <Text style={[styles.listText, {color: AppColor.success}]}>
            {item.status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <View style={styles.headerHolder}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>Job Applied List</Text>
        </View>
        <View style={styles.iconHolder}>
          <Text style={styles.recordText}>{status}</Text>
          <Switch
            trackColor={{false: '#767577', true: AppColor.primary}}
            thumbColor={active ? AppColor.white : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggle(active)}
            value={active}
          />
        </View>
      </View>
      {filteredData.map((item, index) => renderItem(item))}
      <JobDetailsCustomModal
        visible={showDetailsModal}
        onClose={() => setShowDetailsModal(!showDetailsModal)}
        data={data}
      />
    </View>
  );
};

export default JobAppliedList;

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
    width: responsive(80),
    fontSize: responsive(18),
    color: AppColor.black,
    fontWeight: 'Roboto-Medium',
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
  listText: {
    fontSize: responsive(16),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
});
