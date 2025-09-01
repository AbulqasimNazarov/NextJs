// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginPage() {
  const router = useRouter();
  const loginStore = useAuthStore((s) => s.login);

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const endpoint = isRegister ? "/api/register" : "/api/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMessage(data.message ?? "No message");

      if (res.ok && data.success) {
        if (!isRegister) {
          loginStore();       // ставим авторизацию в zustand
          router.push("/");   // перенаправляем на главную (там tooth)
        } else {
          // после регистрации можно сразу залогинить:
          // loginStore(); router.push("/");
          // или оставить пользователя на той же странице
          setIsRegister(false);
        }
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h1>

        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "..." : isRegister ? "Register" : "Login"}
          </button>
        </form>

        {message && <p className="text-sm text-red-600 mt-2">{message}</p>}

        <p className="text-sm mt-4 text-center">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 underline"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
