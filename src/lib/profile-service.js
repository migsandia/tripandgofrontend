import axios from 'axios';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }
  // Llama a la Api para editar los datos del usuario
  edit(data) {
    const { name, username, password, newPassword, phoneNumber, imageURL, description } = data;
    return this.profile.put(`/profile/edit`, { name, username, password, newPassword, phoneNumber, imageURL, description })
      .then(({ data }) => data);
  }
  // Llama a la Api para recoger los datos del usuario
  getProfile(id) {
    return this.profile.get(`/profile/${id}`)
      .then(({ data }) => data);
  }

  // Llama a la Api para mostras perfiles de los participantes
  getParticipants(participant) {
    return this.profile.get(`/profile/participants/${participant}`)
      .then(({ data }) => data);
  }
  joinFav(id) {
    return this.profile.put(`/profile/${id}/addfavs`)
      .then(({ data }) => data);
  }
  deleteFav(id) {
    return this.profile.put(`/profile/${id}/deletefavs`)
      .then(({ data }) => data);
  }
  getMyTripsFavs(){
    return this.profile.get('/profile/favoritos')
      .then(({ data }) => data);
  }
}
const profileService = new ProfileService();

export default profileService;