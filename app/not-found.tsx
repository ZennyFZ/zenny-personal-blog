import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/404.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-fuchsia-950/55 to-black/75" />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 4px)",
        }}
      />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-10 sm:px-6">
        <div className="pixel-shadow w-full max-w-2xl border-4 border-pink-300 bg-slate-950/70 p-5 text-center text-white backdrop-blur-[2px] sm:p-8">
          <p className="pixel-font mb-4 inline-block border-2 border-cyan-300 bg-cyan-500/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
            Error 404
          </p>

          <h1 className="pixel-font text-2xl uppercase leading-tight text-pink-100 sm:text-3xl">
            Unknowable Domain
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-xs uppercase tracking-[0.14em] text-purple-100/90 sm:text-sm">
            Ahem! This route vanished into the glitch zone!
          </p>

          <Link
            href="/"
            className="pixel-font mt-8 inline-flex items-center border-4 border-yellow-200 bg-gradient-to-r from-yellow-300 to-orange-300 px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-slate-900 transition-transform duration-150 hover:-translate-y-1 hover:brightness-105 active:translate-y-0"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}
