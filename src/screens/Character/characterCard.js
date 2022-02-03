import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {hp, wp} from '../../common/utils';
import * as colors from '../../common/colors';

export const CharacterCard = ({
  name,
  status,
  occupation,
  nickname,
  appearance,
  category,
  portrayed,
  birthday,
  char_id,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.infocontainer}>
          <Text style={styles.character}> {char_id}</Text>
          <Text style={styles.character}> {status}</Text>
          <Text style={styles.character}> {name}</Text>
          <Text style={styles.character}> {occupation}</Text>
          <Text style={styles.character}> {nickname}</Text>
          <Text style={styles.character}> {appearance}</Text>
          <Text style={styles.character}> {category}</Text>
          <Text style={styles.character}> {portrayed}</Text>
          <Text style={styles.character}> {birthday}</Text>
          {/* <View style={styles.image}>
            <Image
              style={{width: '100%'}}
              source={{
                uri: imageSource,
              }}
              resizeMode="cover"
            />
          </View> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  slideicon: {
    marginBottom: hp(20),
    paddingHorizontal: hp(10),
    alignSelf: 'flex-end',
  },
  character: {
    fontSize: hp(15),
  },

  container: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    width: wp(350),
    alignSelf: 'center',
    height: hp(190),
    marginBottom: hp(10),
    paddingHorizontal: hp(10),
    paddingVertical: hp(10),
    borderWidth: hp(0.5),
  },
});
