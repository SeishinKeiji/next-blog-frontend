import { useState, useEffect } from "react";

const useHasMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return isMounted;
};

export default useHasMounted;
