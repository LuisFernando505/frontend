import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/docentes';

const getDocentes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching docentes:', error);
        throw error;
    }
};

const getDocenteById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching docente with id ${id}:`, error);
        throw error;
    }
};

const createDocente = async (docenteData) => {
    try {
        const response = await axios.post(API_URL, docenteData);
        return response.data;
    } catch (error) {
        console.error('Error creating docente:', error);
        throw error;
    }
};

const updateDocente = async (id, docenteData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, docenteData);
        return response.data;
    } catch (error) {
        console.error(`Error updating docente with id ${id}:`, error);
        throw error;
    }
};

const deleteDocente = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting docente with id ${id}:`, error);
        throw error;
    }
};

export {
    getDocentes,
    getDocenteById,
    createDocente,
    updateDocente,
    deleteDocente
};