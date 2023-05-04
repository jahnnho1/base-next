import Link from 'next/link'

export default function Dashboard() {
  return (
    <>
      <div>
        <ul className="flex space-x-2 rtl:space-x-reverse">
          <li>
            <Link href="/" className="text-primary hover:underline">
              Dashboard
            </Link>
          </li>
          <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
            <span>Inicio</span>
          </li>
        </ul>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-1 md:grid-cols-2">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Revenue</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="panel h-full">
          <div className="mb-5 flex items-center">
            <h5 className="text-lg font-semibold dark:text-white-light">
              Sales By Category
            </h5>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-1">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 1 </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-2">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 2 </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-3">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 3 </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-4">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 4 </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-5">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 5 </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-3">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Content 6 </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 6
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-3">
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
            <div className="panel h-full">
              <div className="mb-5 flex items-center lg:grid-cols-1">
                <h5 className="text-lg font-semibold dark:text-white-light">
                  Content 7
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
