import Http from '../http'

export default {
    index() {
    return Http.get(`/v1/fotos`)
    },

    create(photo){
    return Http.post(`/v1/fotos`,{...photo});
    },

    update(photo){
    return Http.put(`/v1/fotos/${photo._id}`, {
        ...photo
    });
    },

    show(id) {
    return Http.get(`/v1/fotos/${id}`);
    },

    delete(id){
    return Http.delete(`/v1/fotos/${id}`)
    }

}
