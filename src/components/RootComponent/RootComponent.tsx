import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RootComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      navigate("/invitation");
    }
  }, []);
  return <div>Cargando...</div>;
};
