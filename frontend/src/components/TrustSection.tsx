"use client";

const companies = [
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 74 24" className="h-5 w-auto fill-stone-300 group-hover:fill-stone-500 transition-colors" aria-label="Google">
        <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.34-1.44 3-.76.72-1.92 1.44-4.44 1.44-3.56 0-6.34-2.86-6.34-6.42s2.78-6.42 6.34-6.42c1.96 0 3.38.78 4.44 1.76l1.74-1.74C13.98 1.08 12.04 0 9.24 0 4.14 0 .02 4.02.02 9.12s4.12 9.12 9.22 9.12c2.7 0 4.74-.9 6.32-2.52 1.64-1.64 2.14-3.94 2.14-5.8 0-.56-.04-1.08-.14-1.52H9.24v-.21z" />
        <path d="M25 6c-3.32 0-6 2.52-6 6s2.68 6 6 6 6-2.52 6-6-2.68-6-6-6zm0 9.6c-1.82 0-3.4-1.5-3.4-3.6s1.58-3.6 3.4-3.6 3.4 1.5 3.4 3.6-1.58 3.6-3.4 3.6z" />
        <path d="M43 6c-3.32 0-6 2.52-6 6s2.68 6 6 6 6-2.52 6-6-2.68-6-6-6zm0 9.6c-1.82 0-3.4-1.5-3.4-3.6s1.58-3.6 3.4-3.6 3.4 1.5 3.4 3.6-1.58 3.6-3.4 3.6z" />
        <path d="M59.4 6.6V7.8h-.08c-.56-.66-1.62-1.26-2.98-1.26-2.82 0-5.4 2.48-5.4 5.66 0 3.16 2.58 5.62 5.4 5.62 1.36 0 2.42-.6 2.98-1.28h.08v.8c0 2.16-1.16 3.32-3.02 3.32-1.52 0-2.46-1.1-2.84-2.02l-2.2.92c.62 1.48 2.24 3.36 5.04 3.36 2.94 0 5.42-1.72 5.42-5.92V6.6h-2.4zm-2.86 9.6c-1.82 0-3.34-1.52-3.34-3.6 0-2.1 1.52-3.64 3.34-3.64 1.8 0 3.22 1.54 3.22 3.64 0 2.08-1.42 3.6-3.22 3.6z" />
        <path d="M68 .6h2.6v17.4H68z" />
        <path d="M74.02 14.38l2.02-1.34c.56.86 1.44 1.56 2.96 1.56 1.26 0 2-.62 2-1.48 0-1.02-.8-1.38-2.16-1.98l-.74-.32c-2.14-.92-3.56-2.06-3.56-4.48 0-2.22 1.7-3.92 4.36-3.92 1.9 0 3.26.66 4.22 2.38l-1.94 1.24c-.52-.92-1.08-1.28-2.28-1.28-1.04 0-1.7.56-1.7 1.28 0 .9.56 1.26 1.84 1.8l.74.32c2.52 1.08 3.96 2.18 3.96 4.64 0 2.66-2.08 4.12-4.88 4.12-2.74 0-4.5-1.3-5.36-3.04" transform="translate(-6 0)" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 88 18" className="h-5 w-auto fill-stone-300 group-hover:fill-stone-500 transition-colors" aria-label="Microsoft">
        <text y="16" fontSize="16" fontFamily="sans-serif" fontWeight="500">Microsoft</text>
      </svg>
    ),
  },
];

const brands = ["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix", "Stripe", "Airbnb"];

export default function TrustSection() {
  return (
    <section className="py-10 px-4 sm:px-6 border-t border-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">
          Trusted by job seekers targeting top companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((name) => (
            <div
              key={name}
              className="group px-4 py-2 rounded-lg cursor-default select-none"
            >
              <span className="text-base font-semibold text-stone-300 group-hover:text-stone-500 transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
