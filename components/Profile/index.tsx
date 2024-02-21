import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

import { IGithubProfile } from "./types";

type Props = {
  userName: string;
};

const Profile = ({ userName }: Props) => {
  const [profile, setProfile] = useState<IGithubProfile | undefined>({
    login: "savio777",
    id: 35678887,
    node_id: "MDQ6VXNlcjM1Njc4ODg3",
    avatar_url: "https://avatars.githubusercontent.com/u/35678887?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/savio777",
    html_url: "https://github.com/savio777",
    followers_url: "https://api.github.com/users/savio777/followers",
    following_url:
      "https://api.github.com/users/savio777/following{/other_user}",
    gists_url: "https://api.github.com/users/savio777/gists{/gist_id}",
    starred_url: "https://api.github.com/users/savio777/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/savio777/subscriptions",
    organizations_url: "https://api.github.com/users/savio777/orgs",
    repos_url: "https://api.github.com/users/savio777/repos",
    events_url: "https://api.github.com/users/savio777/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/savio777/received_events",
    type: "User",
    site_admin: false,
    name: "Sávio",
    company: "Builtcode",
    blog: "https://br.linkedin.com/in/sávio-palácio-fontes-3924aa16b",
    location: "Piauí, Brazil",
    email: null,
    hireable: true,
    bio: "Graduate in analysis and development of systems. Currently i'm working  as Full Stack developer using React, React-native, Typescript and NodeJs",
    twitter_username: null,
    public_repos: 125,
    public_gists: 12,
    followers: 75,
    following: 227,
    created_at: "2018-01-22T05:28:22Z",
    updated_at: "2023-12-29T00:46:40Z",
  });

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
