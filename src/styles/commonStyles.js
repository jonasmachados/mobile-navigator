import { StyleSheet } from "react-native-web";
import * as ConstantsToStyle from "../utils/ConstantsToStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor:ConstantsToStyle.BACKGROUND_COLOR,
  },
  title_container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 38,
    fontWeight: 'bold',
    fontFamily: ConstantsToStyle.FONT_FAMILY,
  },
  title_icon: {
    color: ConstantsToStyle.TEXT_COLOR,
    fontSize: 50,
    marginRight: 5,
  },
  button: {
    backgroundColor: ConstantsToStyle.PRIMARY_COLOR,
    paddingVertical: 10,
    borderRadius: 5,
  },
  button_text: {
    color:  ConstantsToStyle.TEXT_COLOR,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: ConstantsToStyle.FONT_FAMILY,
  },
});

export default styles;
