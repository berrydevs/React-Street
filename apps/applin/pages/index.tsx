import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className="bg-page bg-fixed bg-cover min-h-screen">
      <main className="px-6">
        <div className="w-full text-center pb-8">
          <div className="border-l-1 border-black h-32 inline-block">
            <div className="absolute transform -translate-x-1/2 translate-y-1/2">
              <Image src={'/img/logo.svg'} height={68} width={68} alt="logo" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-md">
          <h1 className="font-display text-5xl -mt-32 mb-4">
            <span className="font-handwriting text-7xl block">Free</span>{' '}
            Ennegram Assessment.
          </h1>
          <h2 className="font-sans uppercase text-primary tracking-wide text-lg mb-4">
            Create an account
          </h2>

          <form action="" className="relative pb-12">
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              I agree to your{' '}
              <Link href={'/terms-and-conditions'}>terms and conditions</Link>
            </label>
            <button
              type="submit"
              role={'submit'}
              className="block absolute h-12 w-44 -bottom-12 left-1/2 transform -translate-x-1/2 bg-primary font-handwriting"
            >
              Submit
            </button>
          </form>

          <div className="absolute left-0 bottom-2 w-full text-center">
            <Link href={'/what-is'}>What is Enneagram</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
