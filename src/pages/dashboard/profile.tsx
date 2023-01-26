import { UserProfile } from '@clerk/nextjs';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserButton } from '@clerk/nextjs';

const navigation = [{ name: 'Home', href: '/', current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  return (
    <>
      <div className="w-full">
        <Disclosure as="nav" className="bg-blue-600">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className="tracking-widest text-base text-white uppercase">
                        Next Supabase Template
                      </h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-blue-700 text-white'
                                : 'text-white hover:bg-blue-500 hover:bg-opacity-75',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <UserButton
                        userProfileUrl="/dashboard/profile"
                        signInUrl="/sign-in"
                        afterSignOutUrl="/"
                        userProfileMode="navigation"
                        defaultOpen={false}
                      />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-200 hover:bg-blue-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="border-t border-blue-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <UserButton
                      userProfileUrl="/dashboard/profile"
                      signInUrl="/sign-in"
                      afterSignOutUrl="/"
                      userProfileMode="navigation"
                      defaultOpen={false}
                    />
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-blue-700 text-white'
                          : 'text-white hover:bg-blue-500 hover:bg-opacity-75',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="bg-white shadow-none">
          <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Account Settings
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <UserProfile
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'w-full'
                }
              }}
              path="dashboard/profile"
            />
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
