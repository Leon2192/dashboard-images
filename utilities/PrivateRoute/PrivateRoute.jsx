import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/libs/firebase/firebaseConfig';
import Loader from "@/components/ui/dashboard/loader/Loader"

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false);
            if (!user) {
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
