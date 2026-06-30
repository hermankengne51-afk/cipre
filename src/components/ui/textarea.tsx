import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border border-neutral-300 bg-input-background px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-[#1B5E20] focus-visible:ring-[#1B5E20]/20 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-600 dark:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
