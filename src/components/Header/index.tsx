import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import IgniteLogo from '../../assets/img/IgniteLogo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logoContainer">
          <img src={IgniteLogo} alt="" />
          <h2>DT Money</h2>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
