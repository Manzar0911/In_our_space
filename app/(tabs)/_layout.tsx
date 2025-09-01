import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 2,
        },
        tabBarStyle: {
          height: 75,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          position: "absolute",
          paddingTop: 10,
        },
        tabBarButton: (props) => (
          <Pressable
            android_ripple={{ color: "transparent" }}
            style={props.style}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            accessibilityRole={props.accessibilityRole}
            accessibilityState={props.accessibilityState}
            accessibilityLabel={props.accessibilityLabel}
            testID={props.testID}
          >
            {props.children}
          </Pressable>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: focused ? "#5A4FCF" : "#999" }}>Home</Text>
              {focused && (
                <View
                  style={{
                    width: 35,
                    height: 3,
                    backgroundColor: "#5A4FCF",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={focused ? "#5A4FCF" : "#999"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: focused ? "#5A4FCF" : "#999" }}>
                Booking
              </Text>
              {focused && (
                <View
                  style={{
                    width: 35,
                    height: 3,
                    backgroundColor: "#5A4FCF",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome
                name="laptop"
                size={30}
                color={focused ? "#5A4FCF" : "#999"}
              />
            </View>
          ),
        }}
      />

      {/* Special Chat Tab */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: !focused ? "#5A4FCF" : "#fff", marginTop: -30 }}
            >
              Chat
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: focused ? "#5A4FCF" : "#fff",
                marginTop: -45, // lifts it up (circle cutout effect)
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <MaterialIcons
                name="chat"
                size={30}
                color={!focused ? "#5A4FCF" : "#fff"}
                style={{ marginTop: -15 }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="service"
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: focused ? "#5A4FCF" : "#999" }}>
                Service
              </Text>
              {focused && (
                <View
                  style={{
                    width: 35,
                    height: 3,
                    backgroundColor: "#5A4FCF",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="profile"
                size={24}
                color={focused ? "#5A4FCF" : "#999"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: focused ? "#5A4FCF" : "#999" }}>
                Profile
              </Text>
              {focused && (
                <View
                  style={{
                    width: 35,
                    height: 3,
                    backgroundColor: "#5A4FCF",
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EvilIcons
                name="user"
                size={30}
                color={focused ? "#5A4FCF" : "#999"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
