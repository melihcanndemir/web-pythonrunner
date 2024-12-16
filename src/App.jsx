// src/App.jsx
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputDisplay from "./components/OutputDisplay";
import RunButton from "./components/RunButton";
import { useCodeRunner } from "./hooks/useCodeRunner";

export default function App() {
  const [code, setCode] = useState("");
  const { runCode, output, isLoading } = useCodeRunner();

  const handleRunCode = () => {
    if (!code.trim()) return;
    runCode(code);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">
            Python Kod Çalıştırıcı
          </h1>
          <p className="text-zinc-600 mt-2">
            Python kodunuzu yazın ve çalıştırın
          </p>
        </header>

        <main className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
            <CodeEditor
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Python kodunuzu buraya yazın..."
            />

            <div className="mt-4">
              <RunButton onClick={handleRunCode} isLoading={isLoading} />
            </div>

            <OutputDisplay output={output} />
          </div>
        </main>
      </div>
    </div>
  );
}
