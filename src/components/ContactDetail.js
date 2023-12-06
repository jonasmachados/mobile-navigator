import React from "react";
import { View, Text } from "react-native";
import commonStyles from "../styles/commonStyles";
import contactDetailStyles from "../styles/contactDetailStyles";
import { BiSolidDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const ContactDetail = ({ contact }) => {
  return (
    <View>
      <View style={commonStyles.title_container}>
        <BiSolidDetail style={commonStyles.title_icon} />
        <Text style={commonStyles.title}>Contact Details</Text>
      </View>

      <View style={contactDetailStyles.info_container}>
        <FaUserCircle style={contactDetailStyles.contact_detail_icon} />

        <Text style={contactDetailStyles.contact_detail_text}>
          <Text style={contactDetailStyles.contact_detail_label}>Name: </Text>
          {contact.contactName}
        </Text>

        <Text style={contactDetailStyles.contact_detail_text}>
          <Text style={contactDetailStyles.contact_detail_label}>Phone: </Text>
          {contact.contactPhone}
        </Text>
      </View>
    </View>
  );
};

export default ContactDetail;
