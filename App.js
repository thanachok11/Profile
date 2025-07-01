import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <LinearGradient
      colors={['#4facfe', '#00f2fe']}
      style={styles.gradientBackground}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/119285237?s=400&u=15c1494ccfa24b94da81a2bfda09940e16ba6816&v=4',
              }}
              style={styles.profileImage}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'transparent']}
              style={styles.imageOverlay}
            />
          </View>
          <Text style={styles.name}>นายธนาโชค สุวรรณ์</Text>
          <Text style={styles.disctiption}>653450287-7</Text>

          <View style={styles.divider} />

          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>สาขา:</Text>
            <Text style={styles.infoValue}>วิทยาการคอมพิวเตอร์และสารสนเทศ</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>หลักสูตร:</Text>
            <Text style={styles.infoValue}>ปริญญาตรี</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>มหาวิทยาลัย:</Text>
            <Text style={styles.infoValue}>
              มหาวิทยาลัยขอนแก่น
            </Text>
          </View>

          <Text style={styles.sectionTitle}>ความสามารถ (Skills)</Text>
          <View style={styles.skillsContainer}>
            {['ReactJS', 'NextJS', 'NodeJS', 'TypeScript', 'JavaScript', 'Python', 'UI/UX Design'].map(
              (skill, index) => (
                <View style={styles.skillBadge} key={index}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              )
            )}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  imageOverlay: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    top: 0,
    left: 0,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  infoBlock: {
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
  skillBadge: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

registerRootComponent(App);
