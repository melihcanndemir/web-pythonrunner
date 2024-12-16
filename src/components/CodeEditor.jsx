// src/components/CodeEditor.jsx
import { forwardRef } from "react";
import { cn } from "../lib/utils";

const CodeEditor = forwardRef(
  ({ value, onChange, className, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full min-h-[400px] p-4 font-mono text-sm bg-zinc-900 text-zinc-100",
            "rounded-lg border border-zinc-700 focus:ring-2 focus:ring-blue-500",
            "resize-none outline-none transition-all",
            className
          )}
          spellCheck="false"
          {...props}
        />
      </div>
    );
  }
);
CodeEditor.displayName = "CodeEditor";

export default CodeEditor;
