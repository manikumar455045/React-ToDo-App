import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import * as S from "./AgGrid.style";

const AgGrid = () => {
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", filter: true },
    { field: "age" },
    { field: "year" },
    { field: "country" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" }
  ]);
  const [rowData, setRowData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://www.ag-grid.com/example-assets/olympic-winners.json"
      );
      setRowData(resp.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="container mt-5">
        <S.AgGridContainer className="ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </S.AgGridContainer>
      </section>
    </>
  );
};

export default AgGrid;
