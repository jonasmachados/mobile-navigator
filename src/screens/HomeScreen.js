import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ContactList from "../components/ContactList";
import AddContactButton from "../components/AddContactButton";
import ContactData from "../utils/ContactData";
import styles from "../styles/commonStyles";
import { MdContactPhone } from "react-icons/md";

const HomeScreen = ({ navigation }) => {
  const [contacts] = useState(ContactData);

  const handleViewDetails = (contact) => {
    navigation.navigate("ContactDetail", { contact });
  };

  const handleAddContact = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <MdContactPhone style={styles.title_icon} />
        <Text style={styles.title}>Phone Book</Text>
      </View>

      <ContactList contacts={contacts} onViewDetails={handleViewDetails} />

      <AddContactButton onAddContact={handleAddContact} />
    </View>
  );
};

export default HomeScreen;
