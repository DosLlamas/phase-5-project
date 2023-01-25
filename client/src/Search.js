import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PrescriptionInfoCard from "./PrescriptionInfoCard";
import MedicationInfoCard from "./MedicationInfoCard";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [switchPage, setSwitchPage] = useState(true)
  const [patientMedData, setPatientMedData] = useState([]);
  const [endResultArray, setEndResultArray] = useState(patientMedData);
  const [medData, setMedData] = useState([]);
  const [medResultArray, setMedResultArray] = useState(medData);
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

    fetch("/medications").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setMedData(data);
          setMedResultArray(data);
        })
      }
    })
  }, []);

  function handlePrescriptionSearch(e) {
    setSearchValue(e.target.value);
    const filteredPrescriptions = patientMedData.filter((dataObj) => {
      return (
        dataObj.medication.name
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        dataObj.provider.toLowerCase().includes(searchValue.toLowerCase()) ||
        dataObj.rx_number.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setEndResultArray(filteredPrescriptions);
  }
  function handleMedicationSearch(e){
    setSearchValue(e.target.value);
    const filteredMedications = medData.filter((dataObj) => {
      return (
        dataObj.name.toLowerCase().includes(searchValue.toLowerCase()) 
      );
    });
    setMedResultArray(filteredMedications);
  }

  const renderPrescriptions = endResultArray.map((finalDataObj) => {
    return (
      <PrescriptionInfoCard key={finalDataObj.id} prescription={finalDataObj} />
    );
  });
  const renderMedications = medResultArray.map((finalDataObj) => {
    return (
      <MedicationInfoCard key={finalDataObj.id} medication={finalDataObj} />
    );
  });
  const [isActive, setActive] = useState(false);
  const handleShowMenu = (e) => {
    setActive(!isActive);
  };
  const handleSwitch = () =>{
    setSwitchPage(!switchPage)
  }

  return (
    <div>
      {switchPage? 
      <button onClick={handleSwitch} className="update-profile-btn">Database</button>
      : 
      <button onClick={handleSwitch} className="update-profile-btn">Your Prescriptions</button>
      }
      
      {switchPage? 
      <>
      <div className="SearchBox">
        <input
          onChange={handlePrescriptionSearch}
          value={searchValue}
          type="text"
          className="SearchBox-input"
          placeholder="Search by prescription name/provider/rx_number"
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
      <ul className="cards">{renderPrescriptions}</ul>
      </>
      :
      <>
       <div className="SearchBox">
        <input
          onChange={handleMedicationSearch}
          value={searchValue}
          type="text"
          className="SearchBox-input"
          placeholder="Search by medication name"
        />
      </div>
      {renderMedications}
      </>
      }
      
    </div>
  );
};

export default Search;
