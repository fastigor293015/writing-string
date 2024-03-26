import WritingString from "./components/WritingString"

function App() {
  return (
    <main className="main">
      <h1 className="title">
        Онлайн стажировка&nbsp;
        <WritingString stringsArr={[
          "Frontend-разработчикам",
          "Backend-разработчикам",
          "Дизайнерам",
          "Бизнес-аналитикам"
        ]} />
      </h1>
    </main>
  )
}

export default App
