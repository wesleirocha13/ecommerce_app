import { FontAwesome } from '@expo/vector-icons';

export default function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={22} style={{ marginBottom: -5 }} {...props} />;
}
