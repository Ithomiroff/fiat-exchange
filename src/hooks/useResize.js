import {
  useEffect,
  useState
} from "react";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize, false);
    return () => window.removeEventListener('resize', resize, false);
  }, []);

  return width;
};

export default useResize;
