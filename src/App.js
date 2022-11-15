import './App.css';
import React from "react";
import ReactTable from './components/ReactTable'
import list from './data/products.json';

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: (props) => (
          <div className="mr-3">
            <img
              src={require("./data/images/" + props.row.original.image)} alt="pic"
            />
          </div>
        )
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Description",
        accessor: "description",
      }
    ],
    []
  );
  function processData(products) {
    const result = Object.keys(products).map((key) => { 
      return products[key];
    });
    return result;
  }
  const data = React.useMemo(() => processData(list.products), []);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-3xl font-semibold text-center text-sky-600">Table Esmeralda</h1>
        </div>
        <div className="mt-4">
          <ReactTable columns={columns} data={data} />
        </div>
      </main>
    </div>
    
  );
}
export default App;
