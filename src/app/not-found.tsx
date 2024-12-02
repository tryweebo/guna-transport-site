import { Button } from '@shared/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import * as React from 'react'

export const metadata: Metadata = {
  title: 'Not Found',
  description: ' Opps, good luck. You’re missing the pages',
}

export default function NotFoundPage(): React.ReactElement {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col items-center py-20 tablet:py-36 container mx-auto px-5 tablet:px-0">
        <div className="flex flex-col items-center w-8/12 text-center">
          <h1 className="!leading-tight text-3xl tablet:text-4xl text-center font-medium">
            Not found
          </h1>

          <p className="mt-7 !leading-relaxed laptop:w-10/12 text-center text-foreground">
            You’re searching something wrong. This can be happen when the url is
            invalid or deleted, this mean your pages is not found. Start explore
            another one, we help you find better way to navigate through header
            and footer. “I’am your designer & developer”.
          </p>

          <div className="mt-16">
            <Button
              asChild
              variant={'text'}
              size={'lg'}
              className="transition-all hover:scale-95"
            >
              <Link href={'/'}>
                Bring me back <i className="fi fi-rr-arrow-right" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
