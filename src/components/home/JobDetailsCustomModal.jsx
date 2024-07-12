import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import CustomButton from '../CustomButton';

const JobDetailsCustomModal = ({visible, onClose, data}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.headerText}>Job Applied Details</Text>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Application Id</Text>
              <Text style={styles.valueText}>{data?.applicationId}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Worker Name</Text>
              <Text style={styles.valueText}>{data?.workerName}</Text>
            </View>
          </View>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Task name</Text>
              <Text style={styles.valueText}>{data?.agricultureTask}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Status</Text>
              <Text style={styles.valueText}>{data?.status}</Text>
            </View>
          </View>
          <View style={styles.itemHolder}>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Job Provider</Text>
              <Text style={styles.valueText}>{data?.jobGivenBy}</Text>
            </View>
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Applied Date</Text>
              <Text style={styles.valueText}>{data?.jobAppliedDate}</Text>
            </View>
          </View>

          <View style={styles.itemHolder}>
            {data?.jobAcceptedDate && (
            <View style={styles.contentHolder}>
              <Text style={styles.keyText}>Job Provider</Text>
              <Text style={styles.valueText}>{data?.jobAcceptedDate}</Text>
            </View>
            )}
            <View style={styles.contentHolder}>
             <CustomButton title={"Close"} color={AppColor.dim_Grey} handleAction={onClose}/>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default JobDetailsCustomModal;

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
  headerText: {
    fontSize: responsive(20),
    color: AppColor.primary,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  itemHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
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
});
