import { ReactNode } from 'react'
import { StyledContainer } from './StyledContainer'

type Props = {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>
}
