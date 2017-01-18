import ApplicationAdapter from 'capstone-frontend/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true});
    let artwalkId = serialized.artwalk_id;
    let url = `${api}/artwalks/${artwalkId}/points`;
    let data = { point: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
