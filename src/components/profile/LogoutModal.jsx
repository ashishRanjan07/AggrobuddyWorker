import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';
const LogoutModal = ({visible, onClose, onConfirm}) => {
  const navigation = useNavigation();
  const handleConfirm = () => {
    onClose();
    navigation.navigate('Welcome');
  };
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={responsive(25)} color={AppColor.black} />
          </TouchableOpacity>
          <Text style={styles.title}>Are you sure want to logout?</Text>
          <View>
            <CustomButton
              title={'Cancel'}
              handleAction={onClose}
              color={AppColor.success}
            />
            <CustomButton
              title={'Confirm'}
              handleAction={handleConfirm}
              color={AppColor.warning}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

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
    color: AppColor.warning,
    fontFamily: 'Roboto-Bold',
  },
});
