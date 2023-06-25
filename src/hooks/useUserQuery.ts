import { useQuery } from "react-query";

const fetchUsers = async () => {
    const res = await fetch('/api/users', {
        cache: 'no-store',
    })
    return res.json();
}

const useUsers = () => {
    return useQuery({
        queryKey: 'users',
        queryFn: () => fetchUsers(),
    })
}

export {useUsers, fetchUsers}