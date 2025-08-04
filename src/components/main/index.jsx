import {
  Button,
  Flex,
  Heading,
  useConst,
  useDisclosure,
} from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    transactions,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [transactions]);
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex onClick={onOpen} alignItems={"center"}>
          <Button
            bg={"blue.300"}
            color={"black"}
            ml={"4"}
            // _hover={{ bg: "blue.700" }}
          >
            Add new transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        isOpen={isOpen}
        onClose={onClose}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />
      <Flex
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={transactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={transactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </Flex>
    </Flex>
  );
}
