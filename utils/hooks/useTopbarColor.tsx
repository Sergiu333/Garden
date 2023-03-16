import { TOP_BAR_HEIGHT } from '../constants';
import useScrollY from './use-scroll-y';

const useTopbarColor = () => {
  const scrollY = useScrollY();

  return scrollY > TOP_BAR_HEIGHT ? 'bg-[#1e2129]' : '';
};

export default useTopbarColor;
