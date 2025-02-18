import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppColor from '../../utils/AppColor';
import Data from '../../assets/json/Job.json';
import SearchBox from '../../components/search/SearchBox';
import RenderDatalist from '../../components/search/RenderDatalist';
import FIlterModal from '../../components/search/FIlterModal';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(Data);
  const [showFilter, setShowFilter] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    const filtered = Data.filter(item =>
      item.job_name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };
  const handleDataListbyFilter = filterValue => {
    console.log(filterValue, 'Line 23');
    const filtered = Data.filter(item =>
      item.offered_by.toLowerCase().includes(filterValue.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleShowFilter = showFilter => {
    setShowFilter(!showFilter);
  };

  return (
    <View style={styles.main}>
      {/* Search Bar */}
      <SafeAreaView style={{backgroundColor: AppColor.primary}} />
      <SearchBox
        onSearch={handleSearch}
        text={searchText}
        showFilter={showFilter}
        showFilterFunction={handleShowFilter}
      />
      {/* Show the Job List */}
      <RenderDatalist data={filteredData} />
      {/* Show the Filter dialog Box */}
      <FIlterModal
        visible={showFilter}
        onClose={() => setShowFilter(!showFilter)}
        filteredData={value => {
          console.log(value, 'Line 48');
          handleDataListbyFilter(value);
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
