import api from './api';

export const getCliente =  id=>api.get(`/cliente/${id}`).then(res=>res);

export const getClientes = ()=>api.get("/clientes").then(res=>res);

export const removeCliente = id=>api.delete(`/cliente/${id}`).then(res=>res);

export const addCliente = cliente=>api.post("/cliente",cliente).then(res=>res);

export const editCliente = cliente=>api.put(`/cliente`,cliente).then(res=>res);
