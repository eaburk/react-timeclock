// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import CalendarPanel from './CalendarPanel';


function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <div className="spa-container">
        <aside className="sidebar-panel">
          {/* Pass the selection handler down to the calendar component */}
          <CalendarPanel />
        </aside>
        <main className="main-content-panel">
          {/* Pass the selected dates down to the list component to filter the entries */}
          {/* <EntryListPanel selectedDates={selectedDates} /> */}
        </main>
      </div>
    </>
  )
}

export default App
