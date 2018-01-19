import DS from 'ember-data';

export default DS.Model.extend({
  state: DS.attr('string'),
  receptionDate: DS.attr('string'),
  confirmDate: DS.attr('string'),
  orderNumber: DS.attr('string'),
  asin: DS.attr('string'),
  localTrackingNumber: DS.attr('string'),
  internationalTrackingNumber: DS.attr('string'),
  customerResponse: DS.attr('string'),
  user: DS.belongsTo('user'),
});
