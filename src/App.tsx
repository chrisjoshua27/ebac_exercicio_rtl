import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://media.istockphoto.com/id/464988959/pt/foto/pato-real-com-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=0&k=20&c=SUhSeo67zEVs8bgUm0K-OrMDD4iQ5s75CxaOG4gBI1Y=">
        olhe o pato, oque achou dele?.
      </Post>
    </div>
  );
}

export default App;
