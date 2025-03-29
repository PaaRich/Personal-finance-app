import { useNavigate } from "react-router-dom"

const useNavigator = ({path}:{path:string}) => {
    const navigate = useNavigate();
  return navigate(path)
}

export default useNavigator;