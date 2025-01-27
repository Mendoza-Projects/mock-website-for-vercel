"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, , signInError] = useSignInWithEmailAndPassword(auth);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        const res = await createUserWithEmailAndPassword(email, password);
        console.log({ res });
        setEmail('');
        setPassword('');
      } else {
        // Try signing in
        const res = await signInWithEmailAndPassword(email, password);
        if (res?.user) {
          // Redirect to homepage after successful login
          router.push("/");
        }
      }
    } catch (err: any) {
      // Check for errors and handle them
      if (err.message.includes("auth/user-not-found")) {
        setError("No account found with this email.");
      } else if (err.message.includes("auth/wrong-password")) {
        setError("Incorrect password. Please try again.");
      } else {
        setError(err.message); // General error message
      }
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <form className="mt-6" onSubmit={handleAuth}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="text-blue-400 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
