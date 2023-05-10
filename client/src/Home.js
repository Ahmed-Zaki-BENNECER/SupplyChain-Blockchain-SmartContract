import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const redirect_to_roles = () => {
    history.push("/roles");
  };
  const redirect_to_addmed = () => {
    history.push("/addmed");
  };
  const redirect_to_supply = () => {
    history.push("/supply");
  };
  const redirect_to_track = () => {
    history.push("/track");
  };
  return (
    <div style={{ padding: "50px 120px" }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://www.studapart.com/sites/prod/files/styles/echelle_500px_height/public/2018-03/Logo_UEVE_2011_0.png?itok=tFjTJMOA"
          alt="univ logo evry"
          height={150}
        />
        <div style={{ textAlign: "center" }}>
          <p>Realized By :</p>
          <p>
            <strong>Ahmed Zaki BENNECER</strong>
          </p>
          <p>
            <strong>Majed ABU SHAMLA</strong>
          </p>
        </div>
        <img
          src="https://seekvectorlogo.net/wp-content/uploads/2019/09/universite-paris-saclay-vector-logo.png"
          alt="univ saclay evry"
          height={150}
        />
      </header>
      <h1
        style={{
          fontWeight: "bold",
          textAlign: "center",
          margin: "40px",
          padding: "0 200px",
        }}
      >
        R&D Project: Self-Management of Supply Chain Process using Blockchain
        Smart Contract
      </h1>
      <br />
      <h6>
        (Note: Here <u>Owner</u> is the person who deployed the smart contract
        on the blockchain)
      </h6>
      <br />
      <h5>
        Step 1: Owner Should Register Raw material suppliers ,Manufacturers,
        Distributors and Customers
      </h5>
      <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
      <button
        onClick={redirect_to_roles}
        className="btn btn-outline-primary btn-sm"
      >
        Register
      </button>
      <br />
      <br />

      <h5>Step 2: Order Goods</h5>
      <button
        onClick={redirect_to_addmed}
        className="btn btn-outline-primary btn-sm"
      >
        Order Goods
      </button>
      <br />
      <br />
      <h5>Step 3: Control Supply Chain</h5>
      <button
        onClick={redirect_to_supply}
        className="btn btn-outline-primary btn-sm"
      >
        Control Supply Chain
      </button>
      <br />
      <hr />
      <br />
      <h5>
        <b>Track</b> the Goods:
      </h5>
      <button
        onClick={redirect_to_track}
        className="btn btn-outline-primary btn-sm"
      >
        Track Goods
      </button>
    </div>
  );
}

export default Home;
