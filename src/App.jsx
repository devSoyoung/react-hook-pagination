import React from "react";
import "./App.css";

import usePagination from "./usePagination";

const data = [];
for (let i = 1; i <= 20000; i++) {
  data.push({
    id: i,
    title: `테스트용 데이터 ${i}`,
    view: i + 7
  });
}

function App() {
  const { prev, next, jump, currentData, currentPage, maxPage } = usePagination(data);

  const getNearButtons = (currentPage, prev) => {
    const buttons = [];
    if (prev) {
      for (let i = currentPage - 3; i < currentPage; i++) {
        if (i < 1) continue;
        buttons.push(<button onClick={() => jump(i)}>{i}</button>);
      }
    } else {
      for (let i = currentPage + 1; i <= currentPage + 3; i++) {
        buttons.push(<button onClick={() => jump(i)}>{i}</button>);
      }
    }
    return buttons;
  };

  return (
    <div className="App">
      <header className="App-header">React Pagination with Hooks</header>
      <div className="App-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {currentData().map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.view}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-control">
          <button disabled={currentPage === 1} onClick={() => jump(1)}>&lt;&lt;</button>
          <button className="table-control-prev" onClick={prev}>&lt;</button>
          {getNearButtons(currentPage, true)}
          <button>{currentPage}</button>
          {getNearButtons(currentPage, false)}
          <button className="table-control-next" onClick={next}>&gt;</button>
          <button disabled={currentPage === maxPage} onClick={() => jump(maxPage)}>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default App;
