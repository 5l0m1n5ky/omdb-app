# OMDB APP 🎥

Aplikacja przeznaczona jest do wyszukiwania i filtrowania danych pozyskanych z publiczego API, zawierającego zasoby związane  tematyką filmową.

[OMDB API](https://www.omdbapi.com/)





## Features

- Reaktywne wyszukiwanie danych na zasadzie odpytywania API przy każdorazowej zmianie zawartości pola wyszukiwania
- Responsywność
- Sortowanie kolumnowe przy zastosowaniu *Angular Material MatSortModule*
- Zmiana kolejności wyświetlania kolumn metodą drag&drop przy zastosowaniu *Angular Material DragDropModule*

[MatSortModule](https://material.angular.io/components/sort/api)

[DragDropModule](https://material.angular.io/cdk/drag-drop/api)

## Motyw

Motyw aplikacji oparto na zyskującym popularność podejściu określanym jako *Neumorphism*.

[Przykładowy generator komponentów typu Neumorphism](https://neumorphism.io/)

Procentowy udział definicji stylów aplikacji:
- Tailwind - 95%
- Custom CSS - 5%


## Deployment

`Angular` - v19

`Node.js` - v20.18.3

`npm` - v11.1.0

Aplikację wyposażono w dwie zmienne środowiskowe o lokalizacji:

`src/environments/environment.ts`

| Zmienna | Funkcja |
|----------|----------|
|  apiUrl   | endpoint API   |
| apiKey    | klucz dostępu do API   |


⚠️ Pamiętaj, że aplikacja zadziała prawidłowo z ważnym i działającym kluczem API. W przeciwnym razie, wyświetlony zostanie alert z informacją nt. braku zmiennej środowiskowej




