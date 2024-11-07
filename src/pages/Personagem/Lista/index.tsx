import { Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import Item from './components/Item';
import SearchBox from './components/CaixaDePesquisa';
import { GetListaPersonagens } from '../../../interfaces/GetListaPersonagens';
import { getPersonagens } from '../../../services/apiService';
import rickAndMortyImg from '../../../assets/images/rickandmorty.png';
import style from './index.module.scss'
//import './index.css';

function Personagem() {
    const [data, setData] = useState<GetListaPersonagens>();
    const [name, setName] = useState<string>(''); // Estado para controlar a pesquisa
    const [page, setPage] = useState<number>(1);
    const [status, setStatus] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [totalPages, setTotalPages] = useState<number>(0);
    const pageContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Função para buscar os dados da API
        const fetchPersonagens = async () => {
            try {
                const personagens = await getPersonagens(name, gender, status, species, page); // Chama a função do serviço
                setData(personagens);  // Atualiza o estado com os dados recebidos
                setTotalPages(personagens.info.pages);
            } catch (error: any) {
                console.log(error);
            }
        };

        fetchPersonagens();
    }, [name, gender, status, species, page]);

    const handleStatusSelect = (eventKey: string | null) => {
        setPage(1);
        if (eventKey == null)
            eventKey = '';

        setStatus(eventKey);
    };

    const handleGenderSelect = (eventKey: string | null) => {
        setPage(1);
        if (eventKey == null)
            eventKey = '';

        setGender(eventKey);
    };

    const handleSpeciesSelect = (eventKey: string | null) => {
        setPage(1);
        if (eventKey == null)
            eventKey = '';

        setSpecies(eventKey);
    };

    const handleSearch = (search: React.SetStateAction<string>) => {
        setPage(1);
        setName(search);
    };

    const handlePage = (search: React.SetStateAction<number>) => {
        pageContentRef.current?.scrollIntoView(); //scrollar até o inicio dos itens da pagina
        setPage(search);
    };

    return (
        <div>
            {/* Cabeçalho com frase e imagem centralizados */}
            <div className="d-flex justify-content-center align-items-center mb-4">
                {/* Frase no lado esquerdo */}
                <div>
                    <h2 className={style.titulo}>Explore o Multiverso dos Personagens de Rick and Morty</h2>

                    {/* Campo de pesquisa abaixo do título, passando as props */}
                    <SearchBox nameSearch={name} setNameSearch={handleSearch} />
                    <div className={`mt-3 row ${style.filters}`} >
                        <DropdownButton
                            id="dropdown-basic-button"
                            title='Selecione um status'
                            onSelect={handleStatusSelect}
                            variant="secondary" className='col-12 col-md-4 mt-2'
                            style={{ width: 'auto' }}
                        >
                            <Dropdown.Item eventKey="">Todos</Dropdown.Item>
                            <Dropdown.Item eventKey="alive">Vivo</Dropdown.Item>
                            <Dropdown.Item eventKey="dead">Morto</Dropdown.Item>
                            <Dropdown.Item eventKey="unknown">Desconhecido</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            id="dropdown-basic-button"
                            title='Selecione um gênero'
                            onSelect={handleGenderSelect}
                            variant="secondary" className='col-12 col-md-4 mt-2'
                            style={{ width: 'auto' }}

                        >
                            <Dropdown.Item eventKey="">Todos</Dropdown.Item>
                            <Dropdown.Item eventKey="female">Feminino</Dropdown.Item>
                            <Dropdown.Item eventKey="male">Masculino</Dropdown.Item>
                            <Dropdown.Item eventKey="genderless">Sem Gênero</Dropdown.Item>
                            <Dropdown.Item eventKey="unknown">Desconhecido</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            id="dropdown-basic-button"
                            title='Selecione uma espécie'
                            onSelect={handleSpeciesSelect}
                            variant="secondary" className='col-12 col-md-4 mt-2'
                            style={{ width: 'auto' }}
                        >
                            <Dropdown.Item eventKey="">Todos</Dropdown.Item>
                            <Dropdown.Item eventKey="human">Humano</Dropdown.Item>
                            <Dropdown.Item eventKey="alien">Alien</Dropdown.Item>
                            <Dropdown.Item eventKey="humanoid">Humanoide</Dropdown.Item>
                            <Dropdown.Item eventKey="poopybutthole">Poopybutthole</Dropdown.Item>
                            <Dropdown.Item eventKey="mythological Creature">Criatura Mitológica</Dropdown.Item>
                            <Dropdown.Item eventKey="animal">Animal</Dropdown.Item>
                            <Dropdown.Item eventKey="robot">Robô</Dropdown.Item>
                            <Dropdown.Item eventKey="cronenberg">Cronenberg</Dropdown.Item>
                            <Dropdown.Item eventKey="disease">Doença</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

                {/* Imagem no lado direito */}
                <div>
                    <img className={style.imagemFundo} src={rickAndMortyImg} alt="Descrição da imagem" />
                </div>
            </div>

            {/* Contêiner centralizado */}
            <div ref={pageContentRef} className="d-flex justify-content-center">
                <div className={`${style.meuContainer}`}>
                    <div className={`row ${style.containerDiv}`}>
                        {data?.results.map((item, index) => (
                            <div className={`${style.personagemCard} col-12 mb-4 col-sm-6 col-md-4 col-lg-3 p-0`} key={index}>
                                <Item {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination className={style.customPagination}>
                <Pagination.Prev onClick={() => handlePage(page - 1)} disabled={page === 1} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next onClick={() => handlePage(page + 1)} disabled={page === totalPages} />
            </Pagination>
            <div className='d-flex justfy-content-center mb-2 mt-3'>
                <p style={{ textAlign: 'center', width: '100vw' }}>Total de páginas: {totalPages} </p>

            </div>
        </div>);
}

export default Personagem;
