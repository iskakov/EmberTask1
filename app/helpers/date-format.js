import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
  let dateFormat = params.get(0).toLocaleDateString();
  return dateFormat;
}

export default Ember.Helper.helper(dateFormat);
