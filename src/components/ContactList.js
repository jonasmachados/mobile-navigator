import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import contactListStyles from "../styles/contactListStyles";
import { FaUser } from "react-icons/fa";
import commonStyles from "../styles/commonStyles";

const ContactList = ({ contacts, onViewDetails }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.contactId.toString()}
      renderItem={({ item }) => (
        <View style={contactListStyles.container}>
          <View style={contactListStyles.text_name_container}>
            <FaUser style={contactListStyles.text_name_icon} />

            <Text style={contactListStyles.text_name}>{item.contactName}</Text>
          </View>

          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => onViewDetails(item)}
          >
            <Text style={commonStyles.button_text}>View Details</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ContactList;
