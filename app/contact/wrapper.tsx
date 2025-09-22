"use client";

import { useEffect, useState } from "react";

export default function Snippet({ html }: { html: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div
      className="w-full h-[300px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
