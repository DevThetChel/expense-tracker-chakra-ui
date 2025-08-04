import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function handleFormSubmit(formData) {
    if (!formData.description || !formData.amount) return;

    setTransactions([...transactions, { ...formData, id: Date.now() }]);
  }
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        transactions,
        setTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
