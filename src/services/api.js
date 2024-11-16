// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001';

// Alumnos
export const getAlumnos = async () => {
  const response = await axios.get(`${API_URL}/alumnos`);
  return response.data;
};

export const getAlumnoById = async (id) => {
  const response = await axios.get(`${API_URL}/alumnos/${id}`);
  return response.data;
};

export const createAlumno = async (alumno) => {
  const response = await axios.post(`${API_URL}/alumnos`, alumno);
  return response.data;
};

export const updateAlumno = async (id, alumno) => {
  const response = await axios.put(`${API_URL}/alumnos/${id}`, alumno);
  return response.data;
};

export const deleteAlumno = async (id) => {
  const response = await axios.delete(`${API_URL}/alumnos/${id}`);
  return response.data;
};

// Docentes
export const getDocentes = async () => {
  const response = await axios.get(`${API_URL}/docentes`);
  return response.data;
};

export const getDocenteById = async (id) => {
  const response = await axios.get(`${API_URL}/docentes/${id}`);
  return response.data;
};

export const createDocente = async (docente) => {
  const response = await axios.post(`${API_URL}/docentes`, docente);
  return response.data;
};

export const updateDocente = async (id, docente) => {
  const response = await axios.put(`${API_URL}/docentes/${id}`, docente);
  return response.data;
};

export const deleteDocente = async (id) => {
  const response = await axios.delete(`${API_URL}/docentes/${id}`);
  return response.data;
};