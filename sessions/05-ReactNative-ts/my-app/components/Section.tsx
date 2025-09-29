import { StyleSheet, Text, View } from "react-native";
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Section: React.FC<SectionProps> = ({
  title = "My Section",
  description = "My Description",
  children,
}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubTitle}>{description}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: { marginBottom: 28 },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 20, color: "black", fontWeight: "700" },
  sectionSubTitle: { fontSize: 14, color: "black", fontWeight: "300" },
});

export default Section;