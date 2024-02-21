import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

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
    <View testID="container">
      {!!profile && (
        <>
          <Image
            testID="avatar"
            source={{ uri: profile.avatar_url }}
            style={{ width: "100%", height: 150 }}
          />

          <Text testID="name">{profile.name}</Text>
        </>
      )}
    </View>
  );
};

export default Profile;
