import Header from '@components/commons/Header'

export default function MainLayout({ children }) {
  return (
    <div
      className={`navbar-static main-container min-h-screen text-black dark:text-white-dark`}
    >
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  )
}
