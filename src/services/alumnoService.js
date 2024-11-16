import axios from 'axios';

const API_URL = 'http://your-api-url.com/api/alumnos';

const getAlumnos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching alumnos:', error);
        throw error;
    }
};

const getAlumnoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching alumno with id ${id}:`, error);
        throw error;
    }
};

const createAlumno = async (alumno) => {
    try {
        const response = await axios.post(API_URL, alumno);
        return response.data;
    } catch (error) {
        console.error('Error creating alumno:', error);
        throw error;
    }
};

const updateAlumno = async (id, alumno) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, alumno);
        return response.data;
    } catch (error) {
        console.error(`Error updating alumno with id ${id}:`, error);
        throw error;
    }
};

const deleteAlumno = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting alumno with id ${id}:`, error);
        throw error;
    }
};

export { getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno };