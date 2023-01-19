import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PrescriptionInfoCard from "./PrescriptionInfoCard";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [patientMedData, setPatientMedData] = useState([]);
  const [endResultArray, setEndResultArray] = useState(patientMedData);
  const [searchValue, setSearchValue] = useState("");

  const sortByMeds = (e) => {
    fetch("/sort_by_meds").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPatientMedData(data);
          setEndResultArray(data);
        });
      }
    });
  };

  const sortByProvider = (e) => {
    fetch("/sort_by_provider").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPatientMedData(data);
          setEndResultArray(data);
        });
      }
    });
  };

  useEffect(() => {
    fetch("/search_prescription").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPatientMedData(data);
          setEndResultArray(data);
        });
      }
    });
  }, []);

  function handleSearch(e) {
    setSearchValue(e.target.value);
    const filteredProfiles = patientMedData.filter((dataObj) => {
      return (
        dataObj.medication.name
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        dataObj.provider.toLowerCase().includes(searchValue.toLowerCase()) ||
        dataObj.rx_number.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setEndResultArray(filteredProfiles);
  }
  const renderProfiles = endResultArray.map((finalDataObj) => {
    return (
      <PrescriptionInfoCard key={finalDataObj.id} prescription={finalDataObj} />
    );
  });
  const [isActive, setActive] = useState(false);
  const handleShowMenu = (e) => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="SearchBox">
        <input
          onChange={handleSearch}
          value={searchValue}
          type="text"
          className="SearchBox-input"
          placeholder="Search by name/provider/rx_number"
        />
      </div>
      <div onClick={handleShowMenu} className="btn btn-4 btn-sep icon-send">
        Sort By
        <div className={isActive ? "active" : "inactive"}>
          <div onClick={sortByMeds} className="menu-link">
            <span>Med. Name</span>
          </div>
          <div onClick={sortByProvider} className="menu-link">
            <span>Provider</span>
          </div>
        </div>
      </div>
      <ul className="cards">{renderProfiles}</ul>
    </div>
  );
};

export default Search;
