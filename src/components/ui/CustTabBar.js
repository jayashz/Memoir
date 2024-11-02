import { View,TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export default function CustTabBar({ state, descriptors, navigation }) {
  const scheme = useColorScheme();
  const icon = {
    home: () => (
      <Feather name="home" size={24} color={isFocused ? "#673ab7" : "#222"} />
    ),
    favourites: () => (
      <Feather name="heart" size={24} color={isFocused ? "#673ab7" : "#222"} />
    ),
    settings: () => (
      <Feather
        name="settings"
        size={24}
        color={isFocused ? "#673ab7" : "#222"}
      />
    ),
  };

  return (
    <View
      style={{ flexDirection: "row" }}
      className="absolute bg-slate-50 dark:bg-[#1B262C] bottom-[24px] w-[250px] justify-between items-center self-center p-2 rounded-full"
    >
      {state.routes.map((route, index) => {

        if (["_sitemap", "+not-found"].includes(route.name)) {
          return null;
        }
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (

            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{backgroundColor:isFocused?Colors.primaryOrange:null, transform:[{scale:isFocused?1.4:1}],elevation:3}}
              className="p-2 rounded-full justify-center items-center"
            >
              <Feather
                name={
                  route.name == "(home)"
                    ? "home"
                    : route.name == "Favourites"
                    ? "heart"
                    : "settings"
                }
                size={23}
                color={isFocused ? 'white' : scheme=='dark'?'white':'#222'}
              />
            </TouchableOpacity>

        );
      })}
    </View>
  );
}
