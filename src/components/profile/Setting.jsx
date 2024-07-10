import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AccountDeletionModal from './AccountDeletionModal';
const Setting = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('English');
  const [showLanguageList, setShowLanguageList] = useState(false);

  const [theme, setTheme] = useState('Light');
  const [showThemeList, setShowThemeList] = useState(false);

  const [deletionModalVisible, setDeletionModalVisible] = useState(false);

  const handleShowLanguageList = () => {
    console.log(showLanguageList, 'Line 17');
    setShowLanguageList(!showLanguageList);
  };

  const handleShowThemeList = () => {
    setShowThemeList(!showThemeList);
  };

  const showDeletionModal = () => {
    setDeletionModalVisible(true);
  };

  const hideDeletionModal = () => {
    setDeletionModalVisible(false);
  };

  const handleAccountDeletionConfirm = () => {
    hideDeletionModal();
    commonFunction();
  };

  const commonFunction = () => {
    console.log('Perform Account deletion Process Here ');
  };

  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={handleShowLanguageList}>
        <Text style={styles.text}>Change Language</Text>
        <Text style={styles.valueText}>{language}</Text>
        <AntDesign
          name="caretdown"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
      {showLanguageList && (
        <View style={styles.listItemHolder}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              setLanguage('English');
              setShowLanguageList(false);
            }}>
            <Text style={styles.valueText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              setLanguage('Hindi');
              setShowLanguageList(false);
            }}>
            <Text style={styles.valueText}>Hindi</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.itemHolder} onPress={handleShowThemeList}>
        <Text style={styles.text}>Change Theme</Text>
        <Text style={styles.valueText}>{theme}</Text>
        <AntDesign
          name="caretdown"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
      {showThemeList && (
        <View style={styles.listItemHolder}>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              setTheme('Light');
              setShowThemeList(false);
            }}>
            <Text style={styles.valueText}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              setTheme('Dark');
              setShowThemeList(false);
            }}>
            <Text style={styles.valueText}>Dark</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={() => navigation.navigate('Privacy Policy')}>
        <Text style={styles.text}>Privacy Policy</Text>
        <AntDesign
          name="caretright"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemHolder} onPress={showDeletionModal}>
        <Text style={[styles.text, {width: 'auto'}]}>
          Account Deletion Request
        </Text>
        <AntDesign
          name="caretright"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={() => navigation.navigate('Contact-Us')}>
        <Text style={styles.text}>Contact Us</Text>
        <AntDesign
          name="caretright"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemHolder}
        onPress={() => navigation.navigate('Feedback')}>
        <Text style={styles.text}>Send Feedback</Text>
        <AntDesign
          name="caretright"
          size={responsive(25)}
          color={AppColor.primary}
        />
      </TouchableOpacity>

      <AccountDeletionModal
        visible={deletionModalVisible}
        onClose={hideDeletionModal}
        onConfirm={handleAccountDeletionConfirm}
      />
    </ScrollView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  itemHolder: {
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(5),
    elevation: responsive(5),
    backgroundColor: AppColor.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemHolder: {
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(5),
    elevation: responsive(5),
    backgroundColor: AppColor.white,
    marginBottom: responsive(10),
    gap: responsive(10),
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
    width: responsive(175),
  },
  valueText: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  list: {
    padding: responsive(10),
    borderBottomWidth: 1,
    borderColor: AppColor.primary,
  },
});
