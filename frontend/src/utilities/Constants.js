const API_BASE_URL_DEVELOPMENT = 'https://localhost:7031';
const API_BASE_URL_PRODUCTION = 'https://localhost:7031';

const ENDPOINTS = {
    GET_ALL_DOCTORS:'api/Doctors',
    GET_DOCTOR_BY_ID:'api/Doctors/{id}',
    CREATE_DOCTOR:'api/Doctors',
    UPDATE_DOCTOR:'api/Doctors/{id}',
    DELETE_DOCTOR_BY_ID:'api/Doctors/{id}',
    DELETE_RANGE_DOCTORS:'api/Doctors/Delete',

    GET_ALL_PATIENTS:'api/Patients',
    GET_PATIENT_BY_ID:'api/Patients/{id}',
    CREATE_PATIENT:'api/Patients',
    UPDATE_PATIENT:'api/Patients/{id}',
    DELETE_PATIENT_BY_ID:'api/Patients/{id}',
    DELETE_RANGE_PATIENTS:'api/Patients/Delete',

    CREATE_SPECIALTY:'api/Specialties',
    GET_ALL_SPECIALTIES:'api/Specialties',

    CREATE_SCHEDULE:'api/Schedules',
    GET_ALL_SCHEDULES: 'api/Schedules',

    CREATE_ACCOUNT:'api/accounts/create',
    LOGIN_ACCOUNT:'api/accounts/login'

};

const development = {
    API_URL_GET_ALL_DOCTORS:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_DOCTORS}`,
    API_URL_GET_DOCTOR_BY_ID:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_DOCTOR_BY_ID}`,
    API_URL_CREATE_DOCTOR:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_DOCTOR}`,
    API_URL_UPDATE_DOCTOR:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_DOCTOR}`,
    API_URL_DELETE_DOCTOR_BY_ID:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_DOCTOR_BY_ID}`,
    API_URL_DELETE_RANGE_DOCTORS:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_RANGE_DOCTORS}`,

    API_URL_GET_ALL_PATIENTS:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_PATIENTS}`,
    API_URL_GET_PATIENT_BY_ID:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_PATIENT_BY_ID}`,
    API_URL_CREATE_PATIENT:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_PATIENT}`,
    API_URL_UPDATE_PATIENT:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.UPDATE_PATIENT}`,
    API_URL_DELETE_PATIENT_BY_ID:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_PATIENT_BY_ID}`,
    API_URL_DELETE_RANGE_PATIENTS:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.DELETE_RANGE_PATIENTS}`,

    API_URL_CREATE_SPECIALTY:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_SPECIALTY}`,
    API_URL_GET_ALL_SPECIALTIES:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_SPECIALTIES}`,

    API_URL_CREATE_SCHEDULE:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_SCHEDULE}`,
    API_URL_GET_ALL_SCHEDULES:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.GET_ALL_SCHEDULES}`,

    API_URL_CREATE_ACCOUNT:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.CREATE_ACCOUNT}`,
    API_URL_LOGIN_ACCOUNT:`${API_BASE_URL_DEVELOPMENT}/${ENDPOINTS.LOGIN_ACCOUNT}`,

};

const production = {
    API_URL_GET_ALL_DOCTORS:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_DOCTORS}`,
    API_URL_GET_DOCTOR_BY_ID:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_DOCTOR_BY_ID}`,
    API_URL_CREATE_DOCTOR:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_DOCTOR}`,
    API_URL_UPDATE_DOCTOR:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_DOCTOR}`,
    API_URL_DELETE_DOCTOR_BY_ID:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_DOCTOR_BY_ID}`,
    API_URL_DELETE_RANGE_DOCTORS:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_RANGE_DOCTORS}`,

    API_URL_GET_ALL_PATIENTS:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_PATIENTS}`,
    API_URL_GET_PATIENT_BY_ID:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_PATIENT_BY_ID}`,
    API_URL_CREATE_PATIENT:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_PATIENT}`,
    API_URL_UPDATE_PATIENT:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_PATIENT}`,
    API_URL_DELETE_PATIENT_BY_ID:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_PATIENT_BY_ID}`,
    API_URL_DELETE_RANGE_PATIENTS:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_RANGE_PATIENTS}`,

    API_URL_CREATE_SPECIALTY:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_SPECIALTY}`,
    API_URL_GET_ALL_SPECIALTIES:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_SPECIALTIES}`,

    API_URL_CREATE_SCHEDULE:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_SCHEDULE}`,
    API_URL_GET_ALL_SCHEDULES:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_SCHEDULES}`,

    API_URL_CREATE_ACCOUNT:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_ACCOUNT}`,
    API_URL_LOGIN_ACCOUNT:`${API_BASE_URL_PRODUCTION}/${ENDPOINTS.LOGIN_ACCOUNT}`,

};
    
const Constants = process.env.NODE_ENV === 'development' ? development : production;

export default Constants;




