import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <body>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td width="20%">
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td width="15%">{transaction.category}</td>
                                    <td width="15%">{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </body>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}