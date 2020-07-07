import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log('i am in the component alone I think', currentUser);

  return <h1>The Landing Page</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log('... getinitialpros');
  const { data } = await buildClient(context).get('/api/users/currentuser');
  return data;
};

export default LandingPage;
