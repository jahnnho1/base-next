import Link from 'next/link'

export default function HomeDashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/users">
        <span>Seccion usuarios</span>
      </Link>
    </div>
  )
}
