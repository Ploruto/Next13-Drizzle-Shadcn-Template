import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <ThemeToggle />
      <Button variant="outline">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nextjs.org/docs"
        >
          Nextjs Docs
        </a>
      </Button>
      <Button variant="outline">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://ui.shadcn.com"
        >
          Shadcn-ui Docs
        </a>
      </Button>
      <Button variant="outline">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://orm.drizzle.team/docs/quick-start"
        >
          Drizzle-ORM Docs
        </a>
      </Button>
    </section>
  )
}
