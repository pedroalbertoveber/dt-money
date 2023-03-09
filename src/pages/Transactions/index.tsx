import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utlis/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((item) => {
              return (
                <tr key={item.id}>
                  <td width={'40%'}>{item.description}</td>
                  <td>
                    <PriceHighLight variant={item.type}>
                      {item.type === 'outcome' && '- '}
                      {priceFormatter.format(item.price)}
                    </PriceHighLight>
                  </td>
                  <td>{item.category}</td>
                  <td>{dateFormatter.format(new Date(item.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
