import Image from 'next/image'
import Link from 'next/link'
import './page.module.scss'

export function Page({ children }) {
  return (
    <div className="bg-page bg-fixed bg-cover min-h-screen">
      <main className="px-6 xl:px-32">
        <div className="w-full text-center pb-8">
          <div className="border-l-1 border-black h-32 sm:h-64 inline-block">
            <div className="absolute transform -translate-x-1/2 translate-y-1/2 w-16 sm:w-32">
              <Image
                src={'/img/logo.svg'}
                height={128}
                width={128}
                alt="logo"
                layout="responsive"
                sizes="4 rem, (min-width: 640px), 8 rem"
              />
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
export default Page
