import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <body>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td width="20%">
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td width="15%">Venda</td>
                            <td width="15%">13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td width="20%">
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td width="15%">Alimentação</td>
                            <td width="15%">10/04/2022</td>
                        </tr>
                    </body>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}