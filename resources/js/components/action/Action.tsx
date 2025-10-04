import React from "react";

interface ActionProps {
    titre: string;
    temps: number;
    setOpenModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
const Action = ({titre, temps, setOpenModalUpdate } : ActionProps) => {
    return (
        <div className="flex justify-between border-b-2 p-2">
            <span>{titre} ({temps }h)</span>
            <div className="space-x-2">
                <button onClick={() => setOpenModalUpdate((v) => !v)} className="rounded bg-blue-500 p-1 text-white">
                    Modifier
                </button>
                <button onClick={() => alert("supprimer")} className="rounded bg-red-500 p-1 text-white">
                    Supprimer
                </button>
            </div>
        </div>
    );
};

export default Action;
