import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
  return (
    <>
      <Head title="Welcome" />
      <div className="">
        <div className="fixed top-0 right-0 px-6 py-4 sm:block">
          {props.auth.user ? (
            <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href={route('login')} className="text-sm text-gray-700 underline">
                Log in
                            </Link>

              <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                Register
                            </Link>
            </>
          )}
        </div>
      </div>


    </>
  );
}
