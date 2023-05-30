import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import cardData from './data'

export default function App() {
  const cardElements = cardData.map(card => {
    return <Card
      key={card.id}
      item={card}
    />
  })
  
  return (
    <div>
      <Navbar />
      <section className='flex flex-col py-16 items-center'>
        {cardElements}
      </section>
    </div>
  )
}