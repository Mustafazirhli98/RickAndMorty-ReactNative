import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </Provider>
    </>
  );
}




//TODOS

//Maksimum 10 karakter favori olarak eklenebilir. Favori karakter sayısı 10’u geçtiğindekullanıcıya “Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.” bildirimi gösterilmelidir. (Local Notification)
//● Her bir listeleme için (Bölümler, karakterler vb. ) herhangi bir karakter ismi veya özelliklerine göre search(arama) işlemini de yapabiliyor olmalıyım.
// async storage

//DONE

//https://rickandmortyapi.com/api/episode API araclığı ile gelen tüm bölümlere ait veriler uygulamanın ana ekranında pagination(sayfalama) şeklinde listelenmelidir.

//● Her bölüme ait tüm karakter ve özelliklerini gösteren kartlar aynı şekilde pagination(sayfalama) yapılarak listelenmelidir.

//● Herhangi bir bölümün üzerine tıklandığında o bölüme ait API ye istek atılmalı ve bölüme ait gelen bilgiler uygulama üzerinde gösterilmelidir. Örnek API için https://rickandmortyapi.com/api/episode/8 bağlantısını kullanabilirsiniz.

//● Açılan bölüm sayfasında bölümde bulunan karakterler listelenmeli ve karaktere tıklandığında karakter ile ilgili bilgiler API aracılığı ile alarak ekrana dökülmelidir. Örnek API için https://rickandmortyapi.com/api/character/1 bağlantısını kullanabilirsiniz.

//● Uygulama tasarımları tamamen uygulama geliştiriciye bırakılmıştır.

//● Listeleme sırasında Favori Karakter seçimi yapılabilmelidir.

//● Favori karakterleri Redux / Toolkit ve AsyncStorage kullanarak state yönetimi işlemleri de yapılmalıdır.
