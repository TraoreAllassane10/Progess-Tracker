import { X } from 'lucide-react'
import React from 'react'

const ModalDetail = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition">
            <div className="w-[800px] rounded-xl border bg-card p-4 text-card-foreground shadow">
                {/* <div className="flex justify-between">
                    <div className="font-semiBold mb-4 text-lg tracking-tight">
                        Detail Objectif
                    </div>
                    <button
                        onClick={() => setOpenModal((v) => !v)}
                        className="cursor-pointer text-red-500"
                    >
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="3xl:flex-row flex flex-col gap-3">
                        <div className="flex flex-1 flex-col gap-2">
                            <label
                                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor=""
                            >
                                Titre
                            </label>
                            <input
                                type="text"
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="Ex: Lire 10 livres d'ici la fin de l'année"
                            />
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                        <label
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor=""
                        >
                            Date du commencement
                        </label>
                        <input
                            type="date"
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                        <label
                            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor=""
                        >
                            Date d'echéance
                        </label>
                        <input
                            type="date"
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-0">
                        <button className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                            Annuler
                        </button>

                        <button className="inline-flex h-8 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-medium whitespace-nowrap text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                            Enregistrer
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
  )
}

export default ModalDetail