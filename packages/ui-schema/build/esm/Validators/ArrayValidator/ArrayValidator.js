import { List, Map } from 'immutable';
import { validateSchema } from '@ui-schema/ui-schema/validateSchema';
import { createValidatorErrors } from '@ui-schema/ui-schema/ValidatorErrors';
import { ERROR_WRONG_TYPE } from '@ui-schema/ui-schema/Validators/TypeValidator';
export const ERROR_DUPLICATE_ITEMS = 'duplicate-items';
export const ERROR_NOT_FOUND_CONTAINS = 'not-found-contains';
export const ERROR_MIN_CONTAINS = 'min-contains';
export const ERROR_MAX_CONTAINS = 'max-contains';
export const ERROR_ADDITIONAL_ITEMS = 'additional-items';
const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index);
export const validateArrayContent = (itemsSchema, value, additionalItems = true) => {
  let err = createValidatorErrors();
  let found = 0;
  if (List.isList(itemsSchema) || Array.isArray(itemsSchema)) {
    if (List.isList(value) || Array.isArray(value)) {
      if (!validateAdditionalItems(additionalItems, value, itemsSchema)) {
        err = err.addError(ERROR_ADDITIONAL_ITEMS, Map({}));
        found++;
      }
    } else {
      err = err.addError(ERROR_WRONG_TYPE, Map({
        actual: typeof value,
        arrayTupleValidation: true
      }));
      found++;
    }
  } else if (Array.isArray(value) || List.isList(value)) {
    for (let val of value) {
      let tmpErr = createValidatorErrors();
      let tmpErr2 = validateSchema(itemsSchema, val);
      if (tmpErr2.hasError()) {
        tmpErr = tmpErr.addErrors(tmpErr2);
      }
      if (tmpErr.errCount === 0) {
        found++;
      } else {
        err = err.addErrors(tmpErr);
      }
    }
  }
  return {
    err,
    found
  };
};
export const validateAdditionalItems = (additionalItems, value, schema) => {
  return additionalItems === true || additionalItems === false && (List.isList(value) && value.size <= schema.size || Array.isArray(value) && value.length <= schema.size);
};
export const validateItems = (schema, value) => {
  let items = schema.get('items');
  if (items && value) {
    let item_err = validateArrayContent(items, value, schema.get('additionalItems'));
    return item_err.err;
  }
  return createValidatorErrors();
};
export const validateContains = (schema, value) => {
  let errors = createValidatorErrors();
  if (!(Array.isArray(value) || List.isList(value))) return errors;
  const contains = schema.get('contains');
  if (!contains) return errors;
  let contains_type = contains.get('type');
  if (!contains_type) return errors;
  let minContains = schema.get('minContains');
  let maxContains = schema.get('maxContains');
  let item_err = validateArrayContent(contains, value, undefined);
  if (item_err.found < 1 && typeof minContains === 'undefined' && typeof maxContains === 'undefined' || typeof minContains === 'number' && minContains > item_err.found || typeof maxContains === 'number' && maxContains < item_err.found) {
    if (item_err.err.errCount !== 0) {
      errors = errors.addErrors(item_err.err);
    }
  }
  if (typeof minContains === 'number' && minContains > item_err.found) {
    errors = errors.addError(ERROR_MIN_CONTAINS, Map({
      minContains
    }));
  }
  if (typeof maxContains === 'number' && maxContains < item_err.found) {
    errors = errors.addError(ERROR_MAX_CONTAINS, Map({
      maxContains
    }));
  }
  if (minContains !== 0 && (Array.isArray(value) && value.length === 0 || List.isList(value) && value.size === 0)) {
    errors = errors.addError(ERROR_NOT_FOUND_CONTAINS);
  }
  return errors;
};
export const validateUniqueItems = (schema, value) => {
  let uniqueItems = schema.get('uniqueItems');
  if (uniqueItems && (List.isList(value) || Array.isArray(value))) {
    let duplicates = findDuplicates(value);
    if (Array.isArray(duplicates)) {
      return duplicates.length === 0;
    } else if (List.isList(duplicates)) {
      return duplicates.size === 0;
    }
  }
  return true;
};
export const arrayValidator = {
  should: ({
    value
  }) => {
    return List.isList(value) || Array.isArray(value);
  },
  handle: ({
    schema,
    value,
    errors,
    valid
  }) => {
    let uniqueItems = schema.get('uniqueItems');
    if (uniqueItems && value) {
      if (!validateUniqueItems(schema, value)) {
        valid = false;
        errors = errors.addError(ERROR_DUPLICATE_ITEMS);
      }
    }
    let items = schema.get('items');
    if (items && value) {
      let items_err = validateItems(schema, value);
      if (items_err.hasError()) {
        valid = false;
        errors = errors.addErrorsToChild(items_err);
      }
    }
    let contains = schema.get('contains');
    if (contains && value) {
      const containsError = validateContains(schema, value);
      if (containsError.hasError()) {
        valid = false;
        errors = errors.addErrors(containsError);
      }
    }
    return {
      errors,
      valid
    };
  }
};