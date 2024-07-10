import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';
import {CheckBox, Icon} from '@rneui/themed';
import CustomButton from '../CustomButton';

const FeedbackForm = () => {
  const navigation = useNavigation();
  const [selectedEmojiId, setSelectedEmojiId] = useState(null);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const experienceEmojiList = [
    {id: 1, icon: '😠', message: 'Not Interested'},
    {id: 2, icon: '😕', message: 'Interested'},
    {id: 3, icon: '😐', message: 'Good'},
    {id: 4, icon: '🙂', message: 'Very Good'},
    {id: 5, icon: '😍', message: 'Awesome'},
  ];
  const submitFeedback = () => {
    console.log('clicked on submit feedback');
    navigation.navigate('Home')
  };
  const selectRating = item => {
    setSelectedEmojiId(item.message);
  };
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View style={styles.upperViewHolder}>
        <Text style={styles.headerText}>Share your feedback</Text>
        <Text style={styles.subHeader}>Rate your experience </Text>
        <View style={styles.emojiHolder}>
          {experienceEmojiList.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.iconHolder,
                selectedEmojiId === item.id ? styles.selectedIcon : {},
              ]}
              onPress={() => selectRating(item)}>
              <Text style={styles.icon}>{item.icon}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedEmojiId && (
          <Text style={styles.message}>{selectedEmojiId}</Text>
        )}
        <Text style={styles.subHeader}>What did you like?</Text>
        <CheckBox
          title="User Interface"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
        <CheckBox
          title="Performance speed"
          checked={check2}
          onPress={() => setCheck2(!check2)}
        />
        <CheckBox
          title="Easy to use"
          checked={check3}
          onPress={() => setCheck3(!check3)}
        />
        <CheckBox
          title="Services"
          checked={check4}
          onPress={() => setCheck4(!check4)}
        />
        <CheckBox
          title="Customer Support"
          checked={check5}
          onPress={() => setCheck5(!check5)}
        />

        <Text style={styles.subHeader}>Your comments (Optionals)</Text>
        <TextInput
          placeholder="Enter your comments"
          multiline={true}
          placeholderTextColor={AppColor.primary}
          style={styles.box}
          keyboardType="default"
        />
        <CustomButton
          title={'Submit'}
          color={AppColor.dark_Green}
          handleAction={submitFeedback}
        />
      </View>
    </ScrollView>
  );
};

export default FeedbackForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  headerText: {
    fontSize: responsive(24),
    color: AppColor.primary,
    fontFamily: 'Roboto-Medium',
  },
  upperViewHolder: {
    width: '95%',
    alignSelf: 'center',
    gap: 10,
    padding: responsive(10),
    marginVertical: responsive(10),
  },
  subHeader: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'Roboto-Regular',
  },
  emojiHolder: {
    marginVertical: responsive(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: responsive(25),
    fontFamily: 'Roboto-Medium',
  },
  iconHolder: {
    borderWidth: 2,
    width: responsive(50),
    height: responsive(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsive(20),
    borderColor: AppColor.dim_Grey,
    backgroundColor: AppColor.dim_Grey,
  },
  box: {
    borderWidth: 2,
    borderRadius: responsive(5),
    padding: responsive(10),
    borderColor: AppColor.dim_Grey,
    fontSize: responsive(18),
    color: AppColor.primary,
  },
  selectedIcon: {
    borderWidth: 3,
    borderColor: AppColor.primary,
  },
  message: {
    fontSize: responsive(16),
    marginTop: responsive(5),
    color: AppColor.primary,
    textAlign: 'center',
  },
});
