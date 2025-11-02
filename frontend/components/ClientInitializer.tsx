'use client'

import { useState, useEffect } from "react";

export default function ClientInitializer({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a simplified version during SSR
  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center w-full h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
      </div>
    )
  }

  return <>{children}</>;
}

