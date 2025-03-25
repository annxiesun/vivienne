import { FC, useState } from "react";

interface LoginScreenProps {
    onLogin: (user: { email: string; password: string }) => boolean;
    onCancel: () => void;
    existingAccounts: { email: string; password: string }[];
}

const LoginScreen: FC<LoginScreenProps> = ({ onLogin, onCancel, existingAccounts }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        const existingAccount = existingAccounts.find(account => account.email === email);

        if (existingAccount && existingAccount.password !== password) {
            setError("Incorrect password. Please try again.");
            return;
        }

        setError(""); // Clear errors if login is successful
        if (!onLogin({ email, password })) {
            setError("Incorrect password. Please try again.")
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Add Account</h2>

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 text-black p-2 rounded-md w-full mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 text-black rounded-md w-full mb-4"
                />

                <button
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-2"
                    onClick={handleLogin}
                >
                    Add Account
                </button>

                <button
                    className="w-full p-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                    onClick={onCancel}
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
