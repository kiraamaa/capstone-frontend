// import ApplicationAdapter from 'ga-wdi-boston.ember-resources/application/adapter';
import ApplicationAdapter from 'capstone-frontend/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    let api = this.get('host');
    let serialized = this.serialize(record, { includeId: true});
    let favoriteId = serialized.favorite_id;
    let url = `${api}/favorites/${favoriteId}/walks`;
    let data = { walk: serialized };

    return this.ajax(url, 'POST', { data });
  },
});
