"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

interface ModalProviderI {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderI> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <StoreModal />;
};
