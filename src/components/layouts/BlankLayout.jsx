import Header from '@components/commons/Header'

const BlankLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-black dark:text-white-dark">
        {children}
      </div>
    </>
  )
}

export default BlankLayout
