import axios from 'axios'


const HOST = 'http://localhost:1186/inpay/signup';

const Resource = axios.create({
  baseURL: HOST,
});


const onSave = (index: number, payload: any) => Resource.post(
  `/step/${index}/save`,
  payload,
).then(({ data }) => data);

export default {
  onSave,
};
