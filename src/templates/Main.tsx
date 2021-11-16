import { ReactNode } from 'react';

import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-1">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/composition">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  Composition
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/usage/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  Usage
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/what-now/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  What Now?
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by SYDE team 6
      </div>
    </div>
  </div>
);

export { Main };
