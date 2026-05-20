// import data from "../data/pricing-data.json";
import { useState, useEffect } from "react";

export const Pricing = () => {
  const [plans, setPlans] = useState([]);

  async function getdata() {
    const response = await fetch(
      "https://api.jsonbin.io/v3/qs/6a082742250b1311c35aa347",
    );

    const data = await response.json();
    console.log(data);

    setPlans(data.record);
  }

  useEffect(() => {
    // setPlans(data);
    getdata();
  }, []);

  return (
    <ul>
      {plans.map((plan) => (
        <li>
          {plan.price} {plan.name}
        </li>
      ))}
    </ul>
  );
};

export default Pricing;
