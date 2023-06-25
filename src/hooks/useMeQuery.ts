import { useQuery } from "react-query";

const fetchMe = async(token: any) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
    const res = await fetch(`api/me`, {
        method: 'GET',
        headers: headers,
        cache: 'no-store',
        mode: 'no-cors'
    })
    
    return res.json();
}

const useMe = (email: string) => {
    return useQuery({
        queryKey: ['me', email],
        queryFn: () => fetchMe(email),
    })
}

export {useMe, fetchMe};