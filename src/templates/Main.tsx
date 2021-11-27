import { ReactNode } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  postalCode: string;
  setPostalCode: (localPostalCode: string) => void;
  searchPostalCode: () => void;
};

const Main = (props: IMainProps) => {
  const submitOnEnter = (e) =>
    e.key === 'Enter' ? props.searchPostalCode() : () => null;

  return (
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
          <div className="max-w-screen-md mx-auto">
            <div className="pb-8 font-bold text-xl text-gray-900">
              {/* <div className="font-bold text-xl text-gray-900"> */}
              {/*  S */}
              {/* </div> */}
              {/* <input */}
              {/*  className="text-xl text-gray-900" */}
              {/*  type="text" */}
              {/*  value={props.postalCode} */}
              {/*  placeholder={'Postal Code'} */}
              {/*  onChange={(event) => props.setPostalCode(event.target.value)} */}
              {/* /> */}
              <TextField
                id="input-with-icon-adornment"
                label="Postal Code"
                type="search"
                value={props.postalCode}
                placeholder={'Postal Code'}
                onChange={(event) => props.setPostalCode(event.target.value)}
                onKeyPress={submitOnEnter}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={() => props.searchPostalCode()}
                    >
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* <InputBase */}
              {/*  sx={{ ml: 1, flex: 1 }} */}
              {/*  placeholder="Postal Code" */}
              {/*  inputProps={{ 'aria-label': 'search google maps' }} */}
              {/*  onChange={(event) => props.setPostalCode(event.target.value)} */}
              {/* /> */}
              {/* <IconButton */}
              {/*  className="align-bottom" */}
              {/*  sx={{ p: '10px' }} */}
              {/*  aria-label="search" */}
              {/*  onClick={() => props.searchPostalCode()} */}
              {/* > */}
              {/*  <SearchIcon /> */}
              {/* </IconButton> */}
            </div>
          </div>

          <div>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href={{
                    pathname: '/composition',
                    query: { postalCode: props.postalCode },
                  }}
                >
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    Composition
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href={{
                    pathname: '/usage',
                    query: { postalCode: props.postalCode },
                  }}
                >
                  <a className="text-gray-700 border-none hover:text-gray-900">
                    Usage
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href={{
                    pathname: '/what-now',
                    query: { postalCode: props.postalCode },
                  }}
                >
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
};

export { Main };
