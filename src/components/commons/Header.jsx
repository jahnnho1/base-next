'use client'

import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { useAuth } from '@hooks/useAuth'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [userData, setUserData] = useState({})
  const token = Cookie.get('user-token')
  const auth = useAuth()

  useEffect(() => {
    if (token) {
      try {
        const user = JSON.parse(token)
        setUserData(user)
      } catch (error) {
        console.error('Error parsing user:', error)
      }
    }
  }, [token])

  const navigation = [
    { name: 'Home', href: '/', current: true, role: 'none' },
    { name: 'Login', href: '/login', current: false, role: 'login' },
    {
      name: 'Dashboard',
      href: '/dashboard/',
      current: false,
      role: 'customer',
    },
    {
      name: 'Products',
      href: '/dashboard/products',
      current: false,
      role: 'customer',
    },
    {
      name: 'Categories',
      href: '/dashboard/categories',
      current: false,
      role: 'customer',
    },
    {
      name: 'Orders',
      href: '/dashboard/orders',
      current: false,
      role: 'customer',
    },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#', role: 'customer' },
    { name: 'Settings', href: '#', role: 'customer' },
  ]

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => {
                        if (
                          (item.role === 'customer' &&
                            userData.role === 'customer') ||
                          item.role === 'none'
                        ) {
                          return (
                            <Link
                              key={`nav-${item.name}`}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          )
                        } else if (
                          item.role === 'login' &&
                          Object.keys(userData).length === 0
                        ) {
                          return (
                            <Link
                              key={`navDesktop-${item.name}`}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src="https://cdna.artstation.com/p/assets/images/images/046/235/272/smaller_square/pixel-arts-de-un-nino-random-ranita-uwu.jpg?1644605499"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {Cookie.get('token') ? (
                            <button
                              onClick={() => auth.logout()}
                              className="block px-4 py-2 text-sm text-gray-700 z-50"
                              style={{ cursor: 'pointer' }}
                            >
                              Logout
                            </button>
                          ) : (
                            <button
                              onClick={() => auth.logout()}
                              className="block px-4 py-2 text-sm text-gray-700"
                            >
                              Login
                            </button>
                          )}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => {
                  if (
                    (item.role === 'customer' &&
                      userData.role === 'customer') ||
                    item.role === 'none'
                  ) {
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  } else if (
                    item.role === 'login' &&
                    Object.keys(userData).length === 0
                  ) {
                    return (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  }
                })}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://cdna.artstation.com/p/assets/images/images/046/235/272/smaller_square/pixel-arts-de-un-nino-random-ranita-uwu.jpg?1644605499"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {userData.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {userData.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => {
                    if (
                      (item.role === 'customer' &&
                        userData.role === 'customer') ||
                      item.role === 'none'
                    ) {
                      return (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      )
                    } else if (
                      item.role === 'login' &&
                      Object.keys(userData).length === 0
                    ) {
                      return (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      )
                    }
                  })}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
