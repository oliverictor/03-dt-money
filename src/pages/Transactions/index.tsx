import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    category: string
    price: number
    createdAt: string
}

export function Transactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function LoadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        LoadTransactions()
    }, [])
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