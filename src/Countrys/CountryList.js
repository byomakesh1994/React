import React, { useEffect, useState } from "react";
import axios from "axios";
import { v1 } from "uuid";
import { Link } from "react-router-dom";
const CountryList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  //const [searchInput, setSearchInput] = useState("");
  const [countryPerPage, serCountryPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const totalCountries = Math.ceil(data.length / countryPerPage);
  let pages = new Array();
  for (let i = 1; i <= totalCountries; i++) pages.push(i);
  // const pages = [...Array(totalCountries + 1).keys()].slice(1);
  const last = currentPage * countryPerPage;
  const start = last - countryPerPage;
  const country = data.slice(start, last);
  country.forEach((todo) => {
    todo.uniqueKey = v1();
  });
  console.log(country);
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== totalCountries) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const items = document.getElementsByTagName("tr");
  // items.forEach.call(items, function (item) {
  //   item.addEventListener(
  //     "click",
  //     function () {
  //       item.forEach.call(items, function (ele) {
  //         ele.style.backgroundColor = "red"; // initial value
  //       });
  //       item.style.backgroundColor = "white";
  //     },
  //     false
  //   );
  // });

  const loadUser = async () => {
    const result = await axios.get("https://restcountries.com/v3.1/all");
    setData(result.data);
  };

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== "") {
  //     const filteredData = data.filter((item) =>
  //       item.region.includes(searchInput.toLowerCase())
  //     );
  //     setData(filteredData);
  //   } else {
  //     setData(data);
  //   }
  // };

  return (
    <div className="container">
      {/* <div className="container mt-2">
        <input
          type="text"
          placeholder="Search Here"
          name="name"
          // value={first}
          onChange={(e) => {
            searchItems(e.target.value);
          }}
        />
      </div> */}
      <div className="py-4">
        {currentPage === 1 ? false : <span onClick={prevPage}>Prev</span>}
        <p>
          {pages.map((page) => (
            <span
              className={`${currentPage === page ? "active" : ""}`}
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
            >{`${page}  |`}</span>
          ))}
        </p>
        {currentPage === totalCountries ? (
          false
        ) : (
          <span onClick={nextPage}>Next</span>
        )}
        <table className="table table-success table-striped table-responsive">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Name</th>
              <th scope="col">Flag</th>
              <th scope="col">Capital</th>
              <th scope="col">Continents</th>
              <th scope="col">Subregion</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            {data?.length < 0
              ? "loading..............."
              : data.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name.common}</td>
                    <td>
                      <img className="img" src={user.flags.png} alt="" />
                    </td>
                    <td>{user.capital}</td>
                    <td>{user.continents}</td>
                    <td>{user.subregion}</td>
                    <td>{user.population}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CountryList;
