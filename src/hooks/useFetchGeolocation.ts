import { useEffect, useState } from "react";

const initialState = {
  latitude: null,
  longitude: null,
};

interface State {
  latitude: null | number;
  longitude: null | number;
}

const useFetchGeolocation = () => {
  const [position, setPosition] = useState<State>(initialState);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return position;
};

export default useFetchGeolocation;
