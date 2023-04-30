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
            <span>Sales</span>
          </li>
        </ul>
        <div className="pt-5">
          <div className="mb-6 grid gap-6 xl:grid-cols-3">
            <div className="panel h-full xl:col-span-2">
              <div className="mb-5 flex items-center justify-between dark:text-white-light">
                <h5 className="text-lg font-semibold">Revenue</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
