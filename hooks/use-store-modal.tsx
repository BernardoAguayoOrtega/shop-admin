import { create } from "zustand";

interface useStoreModalStore {
    isOpen: boolean;
    inOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    inOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));