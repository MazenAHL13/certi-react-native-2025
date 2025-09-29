import { StyleSheet, Text, View } from "react-native";

type SkillTagProps = { label: string };

const SkillTag: React.FC<SkillTagProps> = ({ label }) => {
  return (
    <View style={styles.skill}>
      <Text style={styles.textSkill}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skill: {
    paddingHorizontal: 10,
    backgroundColor: "#2563eb",
    marginHorizontal: 3,
    marginBottom: 6,
    paddingVertical: 4,
    borderRadius: 15,
  },
  textSkill: {
    color: "white",
    fontWeight: "600",
  },
});

export default SkillTag;