
// components/SessionGuard.tsx
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getSession } from "next-auth/react"; // Ensure this import is correct

type WithSessionGuardProps = {
    [key: string]: any; // Customize as necessary
};

const withSessionGuard = <P extends WithSessionGuardProps>(WrappedComponent: React.ComponentType<P>) => {
    const SessionGuard: React.FC<P> = (props) => {
        const router = useRouter();

        useEffect(() => {
            const checkSession = async () => {
                const session = await getSession(); // Check the session
                if (!session) {
                    router.push('/auth/login'); // Redirect if not authenticated
                }
            };

            checkSession();
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    return SessionGuard; // Ensure you are returning the wrapped component
};

export default withSessionGuard;
