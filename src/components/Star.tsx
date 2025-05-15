import { Star as LucideStar } from 'lucide-react';


type StarProps = {
  color?: string;
  filled?: boolean;
  onSelect?: () => void;
  onUnSelect?: () => void;
};

const Star = ({ filled = false, color = 'gold', onSelect, onUnSelect }: StarProps) => {
  if (!filled) {
    return <LucideStar color={color} onClick={(e) => {
      e.stopPropagation();
      onSelect?.();
    }} />;
  }
  return <LucideStar fill={color} color={color} onClick={onUnSelect} />;
};

export default Star