import { useState, useEffect } from "react";

const useGitHubUser = username => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchGitHubUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (!response.ok){
                    throw new Error('Usuario no encontrado');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                setLoading(false);
            }
        };
        if (username){
            fetchGitHubUser();
        }
    },[username]);
    return {user, loading };
};
export default useGitHubUser;