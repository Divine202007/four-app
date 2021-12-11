import React from 'react';
import Profil from './Profile/Components/Profil';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from './photo.jpg'

const user = {
  img: myImage,
  fullName: "Kouassi Kouame Jean",
  bio: "Travailleur",
  profession: "Frontend developer"
};

const handleName = (fullName) => alert(`Le nom de l'utilisateur est: ${fullName}`)

function App() {
  return (
    <div>
      <Profil user={user} handleName={handleName} />
    </div>
  );
}

export default App;
