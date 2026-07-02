import { createContext, useContext } from "react";

import type { AdminTokenPayload } from "@/lib/auth/session";

export const AdminAuthContext = createContext<AdminTokenPayload | null>(null);

export function useAdminAuth(): AdminTokenPayload {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth doit être utilisé dans AdminAuthContext");
  return ctx;
}
