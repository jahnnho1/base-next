export default function Dashboard() {
  return (
    <>
      <div>
        <ul className="flex space-x-2 rtl:space-x-reverse">
          <li className="before:content-[''] ltr:before:mr-2 rtl:before:ml-2">
            <span>Inicio</span>
          </li>
        </ul>
        <div className="pt-5">
          <div className="mb-6 grid gap-4 lg:grid-cols-4">
            <div className="panel h-full xl:col-span-3">
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
            <div className="panel h-full xl:col-span-3">
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
            <div className="panel h-full xl:col-span-4">
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
