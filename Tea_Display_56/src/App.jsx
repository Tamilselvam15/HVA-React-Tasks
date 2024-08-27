
import TeaDisplay from './TeaDisplay.jsx'

function App() {

  const teas = [
    { id: 1, type: "Green Tea", origin: "China", description: "Lightly oxidized, known for its fresh, grassy flavor and high antioxidant content." },
    { id: 2, type: "Black Tea", origin: "India", description: "Fully oxidized, strong, and robust, often enjoyed with milk and sugar." },
    { id: 3, type: "Oolong Tea", origin: "Taiwan", description: "Partially oxidized, offering a range of flavors from floral to fruity with a smooth finish." },
    { id: 4, type: "White Tea", origin: "China", description: "Minimally processed, delicate, and light with subtle floral and sweet notes." },
    { id: 5, type: "Matcha", origin: "Japan", description: "Finely ground green tea powder, vibrant green in color with a rich, umami flavor." },
    { id: 6, type: "xxxx", origin: "yyy", description: "Finely ground green tea powder, vibrant green in color with a rich, umami flavor." }
  ];

  
  return (

    <div className='flex justify-center items-center border border-black h-screen '>
      <div className='grid-cols-3 grid grid-rows-2 gap-6 w-4/6  h-2/4  items-center'>
        {teas.map((tea) => (
          <TeaDisplay
            key={tea.id}
            name={tea.type}
            origin={tea.origin}
            description={tea.description} />
        ))}
      </div>
    </div>
    
  )
}

export default App
