import axios from 'axios';
import { GetListaPersonagens } from '../interfaces/GetListaPersonagens';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getPersonagens = async (name: string, gender : string, status: string, species: string, page : number): Promise<GetListaPersonagens> => {
  try {
    const response = await axios.get<GetListaPersonagens>(`${BASE_URL}/character?name=${name}&page=${page}&gender=${gender}&status=${status}&species=${species}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar personagens');
  }
};