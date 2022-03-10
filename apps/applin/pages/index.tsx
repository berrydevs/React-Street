import Image from 'next/image';
import Link from 'next/link';
import Page from '../components/page/page';
import styles from './index.module.scss';

export function Index() {
  return (
    <Page>
      <div className="card">
        <h1 className="page-title -mt-32 ">
          <span className="font-handwriting text-7xl block">Free</span> Ennegram
          Assessment.
        </h1>
        <h2 className="font-sans uppercase text-primary tracking-wide text-lg mb-4">
          Create an account
        </h2>

        <form
          action=""
          className="relative pb-12 lg:pb-0 lg:grid grid-cols-3 gap-4"
        >
          <div className="">
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" />
          </div>

          <div className="">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>

          <div className="">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              I agree to your{' '}
              <Link href={'/terms-and-conditions'}>terms and conditions</Link>
            </label>
          </div>

          <button
            type="submit"
            role={'submit'}
            className="z-50 block absolute h-12 w-44 -bottom-12 left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-0 bg-primary font-handwriting"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="absolute md:relative left-0   bottom-2 md:bottom-0 md:text-left w-full text-center md:pt-2">
        <Link href={'/what-is'}>What is Enneagram</Link>
      </div>
    </Page>
  );
}

export default Index;
