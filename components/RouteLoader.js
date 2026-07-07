import Router from "next/router";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const start = () => {
      timeoutRef.current = window.setTimeout(() => setLoading(true), 120);
    };

    const stop = () => {
      window.clearTimeout(timeoutRef.current);
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", stop);
    Router.events.on("routeChangeError", stop);

    return () => {
      window.clearTimeout(timeoutRef.current);
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", stop);
      Router.events.off("routeChangeError", stop);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/58 px-4 backdrop-blur-md">
      <div className="loader-card relative overflow-hidden rounded-lg border border-white/15 bg-white/[.94] p-7 text-center shadow-bloom">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bloom via-pulse to-mint" />
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-bloom/15 bg-serum shadow-glow">
          <span className="clinic-loader relative grid h-14 w-14 place-items-center rounded-full">
            <Image src="/assets/brand/logo.png" alt="Loading Shrushti Skin Clinic" width={36} height={36} className="rounded-full" />
          </span>
        </div>
        <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.24em] text-bloom">Loading</p>
        <p className="mt-2 text-sm font-semibold text-ink/58">Preparing your clinic experience...</p>
      </div>
      <div className="fixed left-0 top-0 h-1 w-full overflow-hidden bg-white/15">
        <span className="loading-bar block h-full bg-gradient-to-r from-bloom via-pulse to-mint" />
      </div>
    </div>
  );
}
