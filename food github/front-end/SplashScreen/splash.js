import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import GlobalStyles from '../GlobalStyles';
import Splash from '../assets/wat.png';

const FrameScreen = (props) => {

  const signIn = () => {
    props.navigation.navigate("Signin");
  }

  return (
    <View style={styles.parent}>
      <View style={[styles.view, styles.have3000Layout]}>
        <Image
          style={styles.child}
          resizeMode="cover"
          source={Splash}
        />
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View
            style={[styles.groupChild, styles.itemBg, styles.groupChildLayout]}
          />
          <Text  onPress={signIn} style={[styles.getStarted, styles.skipTypo]}>Get Started</Text>
        </View>
        <View
          style={[styles.weHave3000ReviewsOnOurAParent, styles.have3000Layout]}
        >
          <Text
            style={[
              styles.weHave3000ReviewsOnOurA,
              styles.weHave3000ReviewsOnOurATypo,
              styles.have3000Layout,
            ]}
          >
            {/* <Text style={styles.weHave3000}>{`We have 3000+ `}</Text> */}
            <Text style={styles.reviewsOnOur}>Food For Needy</Text>
          </Text>
          <Text
            style={[
              styles.loremIpsumIsSimplyDummyTe,
              styles.weHave3000ReviewsOnOurATypo,
            ]}
          >
            <Text
              style={styles.weHave3000}
            >{`Lorem Ipsum is simply dummy text of the printing `}</Text>
            <Text style={styles.reviewsOnOur}>and typesetting industry.</Text>
          </Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.groupItem} />
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        </View>
        <Text style={[styles.skip, styles.skipTypo]}>SKIP</Text>
        <View style={[styles.item, styles.itemBg]} />
        <Image
          style={styles.foodDeliveryIcon}
          resizeMode="cover"
          source={Splash}
        />
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View
            style={[styles.groupChild, styles.itemBg, styles.groupChildLayout]}
          />
          <Text  onPress={signIn} style={[styles.getStarted, styles.skipTypo]}>Get Started</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  have3000Layout: {
    width: "100%",
    height:"100%",
    left: 0,
    alignItems:"center",
    justifyContent:"center"
  },
  groupChildLayout: {
    height: 50,
    width: 300,
  },
  itemBg: {
    backgroundColor: GlobalStyles.Color.red,
    position: "absolute",
  },
  skipTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  weHave3000ReviewsOnOurATypo: {
    color: GlobalStyles.Color.gray,
    fontFamily: GlobalStyles.FontFamily.avenir,
    textAlign: "center",
    position: "absolute",
  },
  groupInnerLayout: {
    width: 10,
    backgroundColor: GlobalStyles.Color.pink,
    borderRadius: GlobalStyles.Border.br_md,
    height: 4,
    top: 0,
    position: "absolute",
  },
  child: {
    top: 465,
    left: 530,
    width: 46,
    height: 50,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    left: 0,
    top: 0,
  },
  getStarted: {
    top: 16,
    left: 79,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.ubuntu,
    width: 142,
    height: 18,
  },
  rectangleParent: {
    top: 721,
    left: 160,
    position: "absolute",
  },
  weHave3000: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  reviewsOnOur: {
    margin: GlobalStyles.Margin.margin_md,
  },
  weHave3000ReviewsOnOurA: {
    fontSize: 30,
    fontWeight: "900",
    top: 0,
  },
  loremIpsumIsSimplyDummyTe: {
    top: 106,
    left: 140,
    fontSize: 14,
    lineHeight: 20,
    width: 331,
  },
  weHave3000ReviewsOnOurAParent: {
    top: 469,
    height: 146,
    position: "absolute",
  },
  groupItem: {
    left: 180,
    width: 17,
    borderRadius: GlobalStyles.Border.br_md,
    height: 4,
    backgroundColor: GlobalStyles.Color.red,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    left: 150,
  },
  rectangleView: {
    left: 120,
  },
  rectangleGroup: {
    top: 635,
    left: 165,
    width: 45,
    height: 4,
    position: "absolute",
  },
  skip: {
    top: 35,
    left: 381,
    fontFamily: GlobalStyles.FontFamily.quicksand,
  },
  item: {
    top: -158,
    left: 140,
    borderRadius: 159,
    width: 318,
    height: 593,
    opacity: 0.3,
  },
  foodDeliveryIcon: {
    top: 10,
    left: 100,
    width: 400,
    height: 400,
    position: "absolute",
  },
  view: {
    borderRadius: 30,
    backgroundColor: GlobalStyles.Color.white,
    overflow: "hidden",
    top: 0,
    position: "absolute",
    height: 812,
  },
  parent: {
    flex: 1,
    width: "100%",
    height: 812
  },
});

export default FrameScreen;
