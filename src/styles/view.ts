import styled from 'styled-components/native';
import { Layout } from '@ui-kitten/components';

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CenteredLayout = styled(Layout)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
export const CenteredLayoutRow = styled(Layout)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CenteredSafeAreaRow = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RowView = styled.View`
  flex-direction: row;
`;
