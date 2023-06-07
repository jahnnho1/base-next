import Link from 'next/link'

export default function HomeCategories() {
  return (
    <>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        <li>
          <Link href="/dashboard" className="text-primary hover:underline">
            Inicio Dashboard
          </Link>
        </li>
        <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
          <span>Categorias</span>
        </li>
      </ul>
    </>
  )
}
