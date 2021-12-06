import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export const AuthComponent = () => {
  const navigate = useNavigate();
  const { userToken } = useParams();
  useEffect(() => {
    const token = userToken ? userToken : "";
    localStorage.setItem("userToken", token);
    navigate("/invitation");
  }, [userToken, navigate]);
  return <div>Cargando...</div>;
};
