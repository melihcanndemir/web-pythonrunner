// src/components/RunButton.jsx
import { Play as PlayIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Spinner } from "./Spinner";

const RunButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        "px-6 py-2 rounded-lg font-medium transition-all",
        "bg-blue-600 hover:bg-blue-700 text-white",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "flex items-center gap-2"
      )}
    >
      {isLoading ? (
        <>
          <Spinner className="w-4 h-4 animate-spin" />
          Çalıştırılıyor...
        </>
      ) : (
        <>
          <PlayIcon className="w-4 h-4" />
          Çalıştır
        </>
      )}
    </button>
  );
};

export default RunButton;
