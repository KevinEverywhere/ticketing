import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // server
    return axios.create({
      baseURL: 'http://www.plantcast.com/',
      headers: req.headers,
    });
  } else {
    //browser
    return axios.create({
      baseURL: '/',
    });
  }
};
//  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/'
//       'http://ingress-nginx.ingress-nginx.svc.cluster.local'

export default buildClient;
