import { List } from 'immutable'
import { validateSchema } from '@ui-schema/json-schema/validateSchema'
import { createValidatorErrors } from '@ui-schema/system/ValidatorErrors'
import { SchemaPlugin } from '@ui-schema/react/SchemaPluginsAdapter'
import { UISchemaMap } from '@ui-schema/json-schema/Definitions'

export const ERROR_ONE_OF_INVALID = 'one-of-is-invalid'

export const validateOneOf = (oneOfSchemas: UISchemaMap, value: any) => {
    let errors = createValidatorErrors()
    let errorCount = 0
    if (
        (List.isList(oneOfSchemas) || Array.isArray(oneOfSchemas))
    ) {
        const schemas = List.isList(oneOfSchemas) ? oneOfSchemas.toArray() : oneOfSchemas
        for (const schema of schemas) {
            const tmpErr = validateSchema(schema as unknown as UISchemaMap, value)
            if (tmpErr.hasError()) {
                errors = errors.addErrors(tmpErr)
                errorCount++
            } else {
                errors = createValidatorErrors()
                errorCount = 0
                break
            }
        }
    }

    return {
        errors,
        errorCount,
    }
}

export const oneOfValidator: SchemaPlugin = {
    should: ({schema}) => {
        return List.isList(schema?.get('oneOf'))
    },
    handle: ({schema, value, errors, valid}) => {
        // @ts-ignore
        const tmpErrors = validateOneOf(schema?.get('oneOf'), value)
        if (tmpErrors.errorCount > 0) {
            valid = false
            errors = errors?.addChildErrors(tmpErrors.errors)
            errors = errors?.addError(ERROR_ONE_OF_INVALID, schema)
        }
        return {errors, valid}
    },
}
