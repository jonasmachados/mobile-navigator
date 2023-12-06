import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const contactListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    margin: 10,
    backgroundColor: ConstantsToStyle.SECONDARY_COLOR,
    borderRadius: 5,
  },
  text_name_container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  text_name:{
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 24,
    fontFamily: ConstantsToStyle.FONT_FAMILY,
  },
  text_name_icon: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 26,
    marginRight: 5,
  },
});

export default contactListStyles;
