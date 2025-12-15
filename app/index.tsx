import { Link } from 'expo-router';
import { View } from 'react-native';
import Button from './components/Button';
import GildrLogo from './components/GildrLogo';
import WarningButton from './components/WarningButton';

export default function Start() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#77363E', paddingTop: 150, width: '100%' }}>
      

      <GildrLogo size={56} />

      <View style={{ height: 150 }} />

      <Link href="/login" asChild>
        <Button title="Login" variant="primary" />
      </Link>

      <View style={{ height: 100 }} />

      <Link href="/register" asChild>
        <Button title="Registrieren" variant="primary" />
      </Link>

      <WarningButton onPress={() => console.log('Warning pressed')} />
    </View>
  );
}
