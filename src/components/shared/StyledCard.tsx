import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  &.click_cards:hover {
    border-color: var(--bs-secondary);
    background-color: rgba(255, 48, 214, 0.3);
    color: var(--bs-white);

    .card-footer {
      border-color: var(--bs-secondary) !important;
      color: var(--bs-white);
    }
  }
`;
