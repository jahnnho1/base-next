import BlankLayout from '@components/layouts/BlankLayout'

function Home() {
  return <h1>Hello World!!</h1>
}

Home.getLayout = (page) => {
  return <BlankLayout>{page}</BlankLayout>
}
export default Home
