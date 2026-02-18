export interface AchievementContent {
  title: string;
  desc: string;
  earned: string;
  img: string;
  locked: boolean;
}

export interface AchievementModalProps {
  content: AchievementContent;
  callback: () => void;
}
