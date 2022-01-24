export default function CreateForm(props){
  
  function handleSubmit(event){
    event.preventDefault();
    props.createStore(event.target.location.value,event.target.min.value,event.target.max.value,event.target.avg.value)
  }
    return (
        <div className='p-2 m-20 bg-gray-200 rounded-lg'>
          <h2 className='text-2xl text-center'>Create Cookie Stand</h2>
          <form onSubmit={handleSubmit} className='text-center'>
            <label className='px-2'>Location:</label>
            <input type="text" id="location" className='w-80'/> 
            <div className='flex items-center justify-center'>
              <label className='px-5 mt-5'>Minimum Customers per Hour:</label>
              <label className='px-5 mt-5'>Maximum Customers per Hour:</label>
              <label className='pl-5 pr-10 mt-5'>Average Cookies per Sale:</label>
            </div>
            
            <div className='flex items-center justify-center'>
              <input type="number" id="min" className='mx-5'/> 
              <input type="number" id="max" className='mx-5'/>
              <input type="number" id="avg" className='mx-5'/>  
              <button type="submit" className='float-right px-20 py-2 mx-2 bg-gray-400'>Create</button>
            </div>
          </form>
          
        </div>
    )
}
