import { StyleSheet, Text, View } from "react-native";
import { getGreeting } from "../utils/getGreeting";

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>{getGreeting()},</Text>
      <Text style={styles.heroTitle}>{title}</Text>
      <Text style={styles.heroSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { marginBottom: 24 },
  greeting: { fontSize: 16, color: "#475569", fontWeight: "600" },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 4,
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#475569",
    lineHeight: 20,
  },
});

export default Header;