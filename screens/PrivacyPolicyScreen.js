import React, {useState} from 'react';
import { Button, View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicyScreen({ navigation }) {
  const [showWhen, setShowWhen] = useState(false);
  const [showBefore, setShowBefore] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);

  const toggleWhen = () => {
    setShowWhen(!showWhen);
  };

  const toggleBefore = () => {
    setShowBefore(!showBefore);
  };

  const toggleAfter = () => {
    setShowAfter(!showAfter);
  };
  const toggleDoctor = () => {
    setShowDoctor(!showDoctor);
  };

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleWhen}>
        <Text style={styles.sectionHeaderText}>When to take a blood test</Text>
        <Ionicons
          name={showWhen ? 'ios-arrow-up' : 'ios-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {showWhen && (
        <View style={styles.sectionContent}>
          <Text style={styles.text}>
              There are a variety of symptoms that may indicate the need for a blood test. Some of the common symptoms include: {'\n'}
              <Text style={styles.subtext}>• Unexplained Fatigue:</Text> If you are feeling tired all the time, even after getting enough sleep, then it could be a sign of anemia or other conditions that can be detected through a blood test.{'\n'}

              <Text style={styles.subtext}>• Unexplained Weight Loss:</Text> If you have been losing weight without any explanation, then it may be a sign of an underlying health condition. A blood test can help identify the cause.{'\n'}

              <Text style={styles.subtext}>• Persistent Infections:</Text> If you have been getting sick frequently or have a persistent infection that is not responding to treatment, then a blood test may be necessary to determine the underlying cause.{'\n'}

              <Text style={styles.subtext}> • Bruising and Bleeding: </Text>If you are experiencing frequent bruising or unexplained bleeding, then it could be a sign of a blood disorder or other conditions that can be detected through a blood test.{'\n'}

              <Text style={styles.subtext}> • Bruising and Bleeding: </Text> If you are experiencing persistent abdominal pain, then a blood test may be necessary to determine if there are any underlying health conditions.{'\n'}

              <Text style={styles.subtext}>• Skin Rash:</Text> If you have a persistent rash or other skin problems, then a blood test may be needed to identify the cause.{'\n\n'}

It is important to note that these symptoms may not always indicate the need for a blood test, and other factors such as family history and lifestyle may also be considered before deciding to take a blood test. It is best to consult with a healthcare provider for personalized guidance.{'\n'}
</Text>
        </View>
      )}
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleBefore}>
        <Text style={styles.sectionHeaderText}>Precautions before test</Text>
        <Ionicons
          name={showBefore ? 'ios-arrow-up' : 'ios-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {showBefore && (
        <View style={styles.sectionContent}>
                <Text style={styles.text}>Here are some common precautions to be taken before a blood test:{'\n'}

                <Text style={styles.subtext}>• Fasting:</Text> If your doctor has ordered a fasting blood test, you should avoid eating or drinking anything except water for at least 8-12 hours before the test. This includes food, beverages, and even chewing gum.{'\n'}

                <Text style={styles.subtext}>• Medications:</Text>  Inform your doctor if you are taking any medications, supplements or vitamins as some of them may affect the results of your blood test. Your doctor may advise you to stop taking certain medications before the test.{'\n'}

                <Text style={styles.subtext}>• Hydration:</Text> Drink plenty of water before the test to stay hydrated. This makes it easier for the phlebotomist to draw blood and also helps in obtaining accurate results.{'\n'}

                <Text style={styles.subtext}>• Clothing: </Text> Wear loose-fitting clothes that allow easy access to the veins in your arm. Avoid tight sleeves or sleeves with elastic bands, as they can constrict the flow of blood.{'\n'}

                <Text style={styles.subtext}>• Clothing: </Text>x Get a good night's sleep before the test, as being well-rested can improve the accuracy of the results.{'\n'}

                <Text style={styles.subtext}>• Avoid alcohol and strenuous exercise:</Text>  Avoid consuming alcohol and doing any strenuous exercise 24 hours before the test, as they can affect the results of some blood tests.{'\n'}

      It is important to follow any specific instructions given by your doctor before your blood test.{'\n'}
    </Text>
        </View>
      )}
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleAfter}>
        <Text style={styles.sectionHeaderText}>Precautions after test</Text>
        <Ionicons
          name={showAfter ? 'ios-arrow-up' : 'ios-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {showAfter && (
        <View style={styles.sectionContent}>
          <Text style={styles.text}>After a blood test, there are a few precautions that should be taken to avoid any complications or infections.{'\n'} Here are some general precautions:{'\n'}

          <Text style={styles.subtext}>• </Text>Keep the bandage on your arm for a few hours to prevent bleeding.{'\n'}
          <Text style={styles.subtext}>• </Text>Avoid lifting heavy weights or doing strenuous exercise for a few hours after the test.{'\n'}
          <Text style={styles.subtext}>• </Text>Drink plenty of water to help your body replenish fluids lost during the blood test.{'\n'}
          <Text style={styles.subtext}>• </Text>If you experience any bleeding or swelling, apply a cold compress to the affected area.{'\n'}
          <Text style={styles.subtext}>• </Text>If you experience any unusual symptoms, such as dizziness or fainting, seek medical attention immediately.{'\n'}
          <Text style={styles.subtext}>• </Text>Follow any additional instructions provided by your healthcare provider.{'\n'}
        It is important to note that specific precautions may vary depending on the type of blood test performed and the individual's medical history. Always consult with your healthcare provider for personalized instructions.{'\n'}
        </Text>
        </View>
      )}
      <TouchableOpacity style={styles.sectionHeader} onPress={toggleDoctor}>
        <Text style={styles.sectionHeaderText}>When to consult a doctor</Text>
        <Ionicons
          name={showDoctor ? 'ios-arrow-up' : 'ios-arrow-down'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {showDoctor && (
        <View style={styles.sectionContent}>
          <Text>
          <Text style={styles.subtext}>• </Text> It is always a good idea to consult a doctor after a blood test, particularly if the results are outside the normal range or if you are experiencing any symptoms that may be related to the test. However, the urgency of seeking medical attention will depend on the specific results of the blood test and your individual medical history.{'\n\n'}

          <Text style={styles.subtext}>• </Text>If the results are significantly outside the normal range, or if they suggest the presence of a serious medical condition, your doctor will likely recommend that you come in for a follow-up appointment as soon as possible. In some cases, they may refer you to a specialist for further testing or treatment.{'\n\n'}

          <Text style={styles.subtext}>• </Text>In any case, it is important to follow your doctor's advice and attend any recommended follow-up appointments to ensure that any potential health issues are addressed in a timely and effective manner.{'\n'}
        </Text>
        </View>
      )}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#da3e56',
    flex: 1,
    padding: 16,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:40,
  },
  sectionHeader: {
    width:370,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 8,
    borderRadius: 4,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 15,
    marginBottom:10,
  },
  subtext:{
    fontWeight:'bold',
  }
});





