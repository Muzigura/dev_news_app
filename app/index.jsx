import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostItImage from '@/assets/images/post-it.png';
import { useRouter } from 'expo-router';
import NoteList from '@components/NoteList';

const HomeScreen = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image} />  {/* Fixed the reference */}
      
      <Text style={styles.title}>
        Welcome To Tech Trending and Updates App.
      </Text>
      
      <Text style={styles.subtitle}>
        Capture your tech trending news and updates anytime, anywhere.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get Started</Text>  {/* Fixed the reference */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Fixed typo
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',  // Fixed incorrect value
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {  // Fixed incorrect reference
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
