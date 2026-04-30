"use client";

import { createContext, useContext, useState } from "react";

interface BookACallContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BookACallContext = createContext<BookACallContextValue>({
  open: false,
  setOpen: () => {},
});

export function BookACallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookACallContext.Provider value={{ open, setOpen }}>{children}</BookACallContext.Provider>
  );
}

export function useBookACall() {
  return useContext(BookACallContext);
}
