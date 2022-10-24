import { useState } from "react";
import { data } from "./emoji.js";
import { Header } from "./Components/Header.jsx";
import { Main } from "./Components/Main.jsx";
import { Card } from "./Components/Card.jsx";
import { Pagination } from "./Components/Pagination.jsx";

function App() {
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  console.log(perPage);

  let lastCard = currentPage * perPage;
  let firstCard = lastCard - perPage;

  const search = data.filter(
    (el) => el.keywords.includes(value) || el.title.includes(value)
  );

  const lastIndex = Math.ceil(search.length / perPage);
  console.log(lastIndex);

  const formHandler = (event) => event.preventDefault();

  const inputHandler = (event) => {
    let userText = event.target.value.toLowerCase().trim();
    setValue(userText);
  };

  console.log(search);

  const slice = search.slice(firstCard, lastCard);
  console.log(slice);

  function getPerPage(event) {
    setPerPage(event.target.value);
  }

  return (
    <>
      <Header value={value} onSubmit={formHandler} onInput={inputHandler} />
      <Main>
        {slice.map((elem) => (
          <Card
            key={elem.title}
            simbol={elem.symbol}
            title={elem.title}
            keywords={
              (elem.keywords = [...new Set(elem.keywords.split(" "))].join(" "))
            }
          ></Card>
        ))}
      </Main>
      <Pagination
        currentPage={currentPage}
        lastIndex={lastIndex}
        setCurrentPage={setCurrentPage}
        getPerPage={getPerPage}
      />
    </>
  );
}

export default App;
