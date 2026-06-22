const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly fieldErrors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Petit wrapper fetch partagé par tous les formulaires : centralise l'URL de
// base, le Content-Type JSON, et la conversion des erreurs 4xx renvoyées par
// l'API (format { error, details }) en ApiError exploitable par les pages.
export async function apiPost<TResponse>(
  path: string,
  body: unknown,
): Promise<TResponse> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new ApiError(
      payload.error ?? "Une erreur est survenue",
      payload.details,
    );
  }

  return res.json() as Promise<TResponse>;
}
