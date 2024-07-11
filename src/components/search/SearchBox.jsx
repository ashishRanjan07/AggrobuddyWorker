import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsive} from '../../utils/Responsive';
import AppColor from '../../utils/AppColor';
const SearchBox = ({onSearch, text, showFilter, showFilterFunction}) => {
  return (
    <View style={styles.searchBox}>
      <AntDesign
        name="search1"
        size={responsive(30)}
        color={AppColor.primary}
      />
      <TextInput
        placeholder="Search job..."
        placeholderTextColor={AppColor.black}
        style={styles.inputBox}
        keyboardType="default"
        value={text}
        onChangeText={text => {
          onSearch(text);
        }}
      />
      <TouchableOpacity onPress={() => showFilterFunction(showFilter)}>
        <AntDesign
          name="filter"
          size={responsive(30)}
          color={AppColor.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: responsive(10),
  },
  inputBox: {
    width: '75%',
    fontSize: responsive(18),
    fontFamily: 'Roboto-Medium',
    color: AppColor.primary,
  },
});
