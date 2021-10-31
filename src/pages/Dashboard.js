import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { laoding } = React.useContext(GithubContext);
  if (laoding) {
    return <main>
      <Navbar />
      <Search />
      <img src={loadingImage} className="loading-img" alt="loading" />
    </main>
  }
  return (
    <main>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
