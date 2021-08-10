import axios from "axios";
import { useHistory } from "react-router-dom";
import { useCallback, useState } from "react-router/node_modules/@types/react"
import { User } from "../types/api/user";

export const useAuth = () => {
  const history = useHistory();
  const [ loading, setLoading ] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true)
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        history.push("/home")
      } else {
        alert("ユーザーが見つかりませんでした")
      }
    }).catch(() => alert("ログインできません")).finally(() => {
      setLoading(false)
    })
  }, []);
  return { login, loading };
}