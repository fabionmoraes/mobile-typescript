import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { singOut } = useAuth();

  return (
    <View>
      <Button title="sair" onPress={singOut} />
    </View>
  );
};

export default Dashboard;
