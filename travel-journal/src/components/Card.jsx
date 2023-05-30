import location from '../assets/location.png'

export default function Card(props) {
    
    return (
        <section className='w-2/3 flex font-quicksand gap-8 border-solid border-indigo-500 border-b-2 mb-6 pb-6'>
            <img src={`../../imgs/${props.item.image}`} alt="Image of location" className='w-2/5 rounded-md' />
            <div> 
                <div className='flex gap-2 items-center mt-8'>
                    <img src={location} alt="Location Icon" className='w-3' />
                    <h2 className='tracking-wide font-md text-slate-600'>{props.item.location.toUpperCase()}</h2>
                    <a href={props.item.googleMapsUrl} rel='noreferrer' target='_blank' className='text-sm underline pl-3 text-slate-400 hover:text-slate-700 transition ease-in'>View on Google Maps</a>
                </div>
                <h1 className='text-2xl font-bold mb-3'>{props.item.title}</h1>
                <p className='font-semibold mb-1'>{`${props.item.startDate} - ${props.item.endDate}`}</p>
                <p className='text-slate-500 text-sm '>{props.item.description}</p>
            </div>

        </section>
    )
}