import Image from 'next/image'

// A product screenshot in a simple browser frame.
export function Screenshot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-xl border bg-surface-raised shadow-xl">
      <div aria-hidden="true" className="flex h-8 items-center gap-1.5 border-b bg-surface-sunken px-3">
        <span className="size-2.5 rounded-full bg-neutral-pressed" />
        <span className="size-2.5 rounded-full bg-neutral-pressed" />
        <span className="size-2.5 rounded-full bg-neutral-pressed" />
      </div>
      <Image src={src} alt={alt} width={2560} height={1600} priority={priority} sizes="(min-width: 1024px) 60vw, 100vw" className="h-auto w-full" />
    </figure>
  )
}
