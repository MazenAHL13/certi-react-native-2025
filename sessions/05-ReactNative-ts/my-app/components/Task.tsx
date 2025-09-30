import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TaskProps = {
  title: string;
  description: string;
  imageUrl?: string;
  onChange?: (completed: boolean) => void; 
  initialCompleted?: boolean;
  
};

const Task: React.FC<TaskProps> = ({ title, description, onChange, initialCompleted = false }) => {
    const [completed, setCompleted] = useState(initialCompleted);
  
    const handlePress = () => {
      setCompleted(prev => {
        const next = !prev;
        onChange?.(next);
        console.log(`Tarea "${title}" marcada como ${next ? "completada" : "incompleta"}`);
        return next;
      });
    };
    return (
        <TouchableOpacity style={completed ? styles.card2 : styles.card} onPress={handlePress}>
            <Text style={styles.cardMeta}>{title}</Text>
            <Text style={styles.cardInfo}>{description}</Text>
        </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
        card: {
          backgroundColor: "white",
          borderRadius: 24,
          padding: 20,
          marginBottom: 28,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 4,
          borderWidth: 1,
          borderColor: "#e2e8f0",
        },
        avatar: {
          width: 92,
          height: 92,
          borderRadius: 50,
          borderWidth: 3,
          borderColor: "#2563eb",
          alignSelf: "center",
        },
        cardInfo: { marginTop: 16, alignItems: "center" },
        cardRole: {
          color: "#1e293b",
          fontSize: 16,
          fontWeight: "600",
          textAlign: "center",
        },
        cardMeta: { marginTop: 4, color: "#64748b" },
        likeButton: {
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2563eb",
          paddingVertical: 14,
          paddingHorizontal: 16,
          borderRadius: 16,
        },
        likeEmoji: { fontSize: 18 },
        likeText: {
          color: "#ffffff",
          fontWeight: "700",
          fontSize: 16,
          marginLeft: 12,
        },
        card2: {
            backgroundColor: "#2563eb",
            borderRadius: 24,
            padding: 20,
            marginBottom: 28,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
            elevation: 4,
            borderWidth: 1,
            borderColor: "#e2e8f0",
        }
      });
      
export default Task;