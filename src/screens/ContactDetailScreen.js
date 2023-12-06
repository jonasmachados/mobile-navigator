// src/screens/ContactDetailScreen.js
import React from 'react';
import { View } from 'react-native';
import ContactDetail from '../components/ContactDetail';
import commonStyles from "../styles/commonStyles";

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={commonStyles.container}>
      <ContactDetail contact={contact} />
    </View>
  );
};

export default ContactDetailScreen;
