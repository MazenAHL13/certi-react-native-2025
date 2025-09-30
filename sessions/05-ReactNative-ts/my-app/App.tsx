import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text, 
} from "react-native";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section";
import SkillTag from "./components/SkillTag";
import { skills } from "./data/skills";
import Task from "./components/Task";

export default function App() {
  const [likes, setLikes] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);


  const handleChange = (completed: boolean) => {
    setCompletedCount(prev => prev + (completed ? 1 : -1));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Header
          title="Paul Landaeta"
          subtitle="Docente de ISC y desarrollador de software full-stack."
        />

        <ProfileCard
          avatarUrl="https://i.pravatar.cc/220?img=2"
          role="React Native Developer en progreso"
          meta="La Paz · Bolivia 2025"
          likes={likes}
          onLike={() => setLikes((prev) => prev + 1)}
        />

        <Section title="Habilidades" description="Mis habilidades que dicen que sé">
          <View style={styles.skillGroup}>
            {skills.map((s) => (
              <SkillTag key={s.id} label={s.name} />
            ))}
          </View>
        </Section> 
          
        <Text style={{ marginBottom: 20, fontSize: 18 }}> Tareas completadas: {completedCount} </Text>

        <Task 
          title="Aprender React Native"
          description="Completar el curso de React Native en Platzi"  
          onChange={(val) => handleChange(val)}      />

        <Task
          title="Desarrollar una app"
          description="Crear una aplicación móvil con React Native"
          onChange={(val) => handleChange(val)}         />
      </ScrollView> 
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: { padding: 20 },
  skillGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
