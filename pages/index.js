import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className='bg-gray-200'>
        <h1 className='p-4 text-4xl'>Cookie Stand Admin</h1>
      </header>
      <main>
        <div className='p-2 m-20 bg-gray-200 rounded-lg'>
          <h2 className='text-2xl text-center'>Create Cookie Stand</h2>
          <form className='text-center'>
            <label className='px-2'>Location:</label>
            <input type="text" name="location" className='w-80'/> 
            <div className='flex items-center justify-center'>
              <label className='px-5 mt-5'>Minimum Customers per Hour:</label>
              <label className='px-5 mt-5'>Maximum Customers per Hour:</label>
              <label className='pl-5 pr-10 mt-5'>Average Cookies per Sale:</label>
            </div>
            
            <div className='flex items-center justify-center'>
              <input type="number" name="min" className='mx-5'/> 
              <input type="number" name="max" className='mx-5'/>
              <input type="number" name="max" className='mx-5'/>  
              <input type="submit" value="Create" className='float-right px-20 py-2 mx-2 bg-gray-400'/>
            </div>
          </form>
          
        </div>
        <div className='text-center'>
            <p>Report Table Coming Soon...</p>
            <p>"location":"Barcelona", "minCustomers":2, "maxCustomers":4, "avgCookies":2.5"</p>
          </div>
      </main>

      <footer className='mt-20 bg-gray-200'>
        <p className='p-4'>Ⓒ2021</p>
      </footer>
    </div>
  )
}
