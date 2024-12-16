// src/components/OutputDisplay.jsx
const OutputDisplay = ({ output }) => {
  if (!output) return null;

  return (
    <div className="mt-6 rounded-lg bg-zinc-900 p-4">
      <h2 className="text-lg font-semibold text-zinc-100 mb-2">Çıktı</h2>
      <pre className="font-mono text-sm text-zinc-200 whitespace-pre-wrap">
        {output}
      </pre>
    </div>
  );
};

export default OutputDisplay;
