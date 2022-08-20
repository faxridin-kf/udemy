interface Info {
  desc: string;
  isActive: boolean;
}
interface Tags {
  name: string;
  value: number;
}
interface reply {
  userId: number;
  id: number;
  title: string;
  info: Info;
  tags: Tags[];
}
