import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // const response = axios.get('/api/users/currentuser');
  console.log('i am in the component', currentUser);

  return <h1>The Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers);
  if (typeof window === 'undefined') {
    console.log('on the server');
    // const { data } = await axios.get(
    //   'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser',
    //   {
    //     headers: req.headers,
    //   }
    // );
    // return data;
    return { email: 'uer@wer.com' };
  } else {
    console.log('i know what a window is', currentUser);
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
};

export default LandingPage;
