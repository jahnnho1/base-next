import Header from '@components/commons/Header'

export default function MainLayout({ children }) {
  return (
    <div
      className={`main-section relative font-nunito text-sm font-normal antialiase`}
    >
      <div className="main-content">
        <Header />
        {children}
      </div>
    </div>
  )
}
