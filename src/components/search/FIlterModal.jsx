import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {responsive} from '../../utils/Responsive';
import AppColor from '../../utils/AppColor';
import {CheckBox, Icon} from '@rneui/themed';

const FIlterModal = ({visible, onClose, filteredData}) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const hadleFiltered = name => {
    filteredData(name);
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.headerHolder}>
            <Text style={styles.title}>Filter</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
          {/* Content for filter */}
          <View style={styles.contentHolder}>
            <TouchableOpacity style={{width: '45%'}}>
              <Text style={styles.text}>Job Offered by</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLineSeparator} />
            <View>
              <CheckBox
                title="Farmer"
                checked={check1}
                onPress={() => {
                  setCheck1(!check1);
                  hadleFiltered('Farmer');
                }}
              />
              <CheckBox
                title="Merchant"
                checked={check2}
                onPress={() => {
                  setCheck2(!check2);
                  hadleFiltered('Merchant');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FIlterModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: AppColor.white,
    padding: responsive(20),
    borderTopLeftRadius: responsive(20),
    borderTopRightRadius: responsive(20),
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  title: {
    marginTop: responsive(10),
    fontSize: responsive(20),
    color: AppColor.primary,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  closeText: {
    fontSize: responsive(18),
    fontFamily: 'Roboto-Medium',
    color: AppColor.warning,
    fontWeight: 'bold',
  },
  headerHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentHolder: {
    // borderWidth: 2,
    marginTop: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: AppColor.primary,
    fontSize: responsive(18),
    textAlign: 'center',
  },
  horizontalLineSeparator: {
    width: 2,
    borderWidth: 2,
    height: '100%',
    borderColor: AppColor.primary,
    backgroundColor: AppColor.primary,
  },
});
