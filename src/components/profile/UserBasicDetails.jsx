import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../utils/Responsive'
import AppColor from '../../utils/AppColor'
import ImagePath from '../../utils/ImagePath'

const UserBasicDetails = () => {
  return (
    <View style={styles.view}>
        <View style={styles.contentHolder}>
          <View style={styles.imageHolder}>
            <Image
              source={ImagePath.worker}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.detailsHolder}>
            <View style={styles.itemHolder}>
              <Text style={styles.headerText}>Name</Text>
              <Text style={styles.responseText}>Ashish Ranjan</Text>
            </View>
            <View style={styles.itemHolder}>
              <Text style={styles.headerText}>Email</Text>
              <Text style={styles.responseText}>abc@gmail.com</Text>
            </View>
            <View style={styles.itemHolder}>
              <Text style={styles.headerText}>Phone No</Text>
              <Text style={styles.responseText}>6206416452</Text>
            </View>
            <View style={styles.itemHolder}>
              <Text style={styles.headerText}>available</Text>
              <Text style={styles.responseText}>Yes</Text>
            </View>
          </View>
        </View>
      </View>
  )
}

export default UserBasicDetails

const styles = StyleSheet.create({
    view: {
        marginVertical: 10,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: AppColor.white,
        borderRadius: responsive(5),
        elevation: responsive(10),
        padding: responsive(10),
        alignItems:'center'
      },
      headerText: {
        fontSize: responsive(16),
        color: AppColor.black,
        fontFamily: 'Roboto-Medium',
        width: '40%',
      },
      responseText: {
        fontSize: responsive(16),
        color: AppColor.success,
        fontFamily: 'Roboto-Medium',
        width: '65%',
      },
      contentHolder: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '100%',
      },
      imageHolder: {
        width: '35%',
      },
      imageStyle: {
        height: responsive(120),
        width: responsive(120),
        backgroundColor: AppColor.light_Grey,
        borderRadius: responsive(60),
      },
      detailsHolder: {
        width: '60%',
        gap: 10,
      },
      itemHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
      },
})