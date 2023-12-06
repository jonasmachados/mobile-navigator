import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const contactDetailStyles = StyleSheet.create({
  contact_detail_icon: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 250,
    padding: 20,
  },
  contact_detail_text: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 26,
    padding: 20,
  },
  contact_detail_label: {
    fontWeight: "bold",
  },
  info_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default contactDetailStyles;
