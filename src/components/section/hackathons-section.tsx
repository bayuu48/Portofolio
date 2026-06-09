/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">I like building things</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              During my time in vocational school, I attended {DATA.Achivments.length}+ Achivments.
              I dive deep into bringing ideas to life.
              Whether it's coding a new software project or wireframing a fresh UI/UX layout, I love the process of creating from scratch.
              For me, it is always eye-opening to see how combining design and clean code can solve real-world problems and open up endless possibilities.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.Achivments.map((achivment) => (
            <TimelineItem key={achivment.title + achivment.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {achivment.image ? (
                  <img
                    src={achivment.image}
                    alt={achivment.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {achivment.dates && (
                  <time className="text-xs text-muted-foreground">{achivment.dates}</time>
                )}
                {achivment.title && (
                  <h3 className="font-semibold leading-none">{achivment.title}</h3>
                )}
                {achivment.location && (
                  <p className="text-sm text-muted-foreground">{achivment.location}</p>
                )}
                {achivment.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {achivment.description}
                  </p>
                )}
                {achivment.links && achivment.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {achivment.links.map((link, idx) => (
                      <Link
                        href={link.href} //href
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon} {/* icon */}
                          {link.title} {/* title */}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
