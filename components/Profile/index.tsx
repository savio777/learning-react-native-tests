import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { IGithubProfile } from "./types";

type Props = {
  userName: string;
};

const Profile = ({ userName }: Props) => {
  const [profile, setProfile] = useState<IGithubProfile | undefined>();

  useEffect(() => {
    const initialData = async () => {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      const data = (await response.json()) as IGithubProfile;

      setProfile(data);
    };

    initialData();
  }, []);

  return (
    <View testID="container" style={styles.container}>
      {!!profile && (
        <>
          <Image
            testID="avatar"
            source={{ uri: profile.avatar_url }}
            style={styles.image}
          />

          <Text testID="name">{profile.name}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    gap: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
});

export default Profile;
