import { useState, useEffect } from "react";
// import { data } from "./emoji.js";
import { Header } from "./Components/Header.jsx";
import { Main } from "./Components/Main.jsx";
import { Card } from "./Components/Card.jsx";
import { Pagination } from "./Components/Pagination.jsx";
import { Preloader } from "./Components/Preloader.jsx";
import { Alert } from "./Components/Alert/Alert";

function App() {
  const [emoji, setEmoji] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getEmoji() {
      try {
        const url = "https://emoji-api-app.herokuapp.com/1";
        const data = await (await fetch(url)).json();
        setEmoji(data);
        setIsLoading(false);
      } catch (e) {
        setIsError(true);
        console.log(e);
        setIsLoading(false);
      }
    }
    getEmoji();
  }, []);

  let lastCard = currentPage * perPage;
  let firstCard = lastCard - perPage;

  const search = emoji.filter(
    (el) => el.keywords.includes(value) || el.title.includes(value)
  );

  const lastIndex = Math.ceil(search.length / perPage);
  console.log(lastIndex);

  const formHandler = (event) => event.preventDefault();

  const inputHandler = (event) => {
    let userText = event.target.value.toLowerCase().trim();
    setValue(userText);
  };

  const slice = search.slice(firstCard, lastCard);

  function getPerPage(event) {
    setPerPage(event.target.value);
  }

  return (
    <>
      <Header value={value} onSubmit={formHandler} onInput={inputHandler} />
      {isLoading && <Preloader />}
      {isError && <Alert />}
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
