import mapValues from 'just-map-values';
import { z } from 'zod';

const formNameInputProps = {
    type: "hidden",
    name: "_formName",
};
function getInitialFormState({ validator, fieldErrors, }) {
    return {
        hasFieldErrors: false,
        submitStatus: "idle",
        isSubmitPending: false,
        fields: mapValues(validator, (validator, name) => {
            const fieldError = fieldErrors?.[name];
            return {
                hasErroredOnce: !!fieldError?.length,
                validationErrors: fieldError,
                isValidating: false,
                validator,
            };
        }),
    };
}
function toSetFieldState(setFormState) {
    return (key, getValue) => {
        setFormState((formState) => {
            const fieldState = formState.fields[key];
            if (!fieldState)
                return formState;
            const fields = { ...formState.fields, [key]: getValue(fieldState) };
            const hasFieldErrors = Object.values(fields).some((f) => f.validationErrors?.length);
            return { ...formState, hasFieldErrors, fields };
        });
    };
}
function toTrackAstroSubmitStatus(setFormState) {
    return () => {
        setFormState((value) => ({
            ...value,
            isSubmitPending: true,
            submitStatus: "submitting",
        }));
        document.addEventListener("astro:after-preparation", () => setFormState((value) => ({
            ...value,
            isSubmitPending: false,
            submitStatus: "idle",
        })), {
            once: true,
        });
    };
}
function toValidateField(setFormState) {
    const setFieldState = toSetFieldState(setFormState);
    return async (fieldName, inputValue, validator) => {
        setFieldState(fieldName, (fieldState) => ({
            ...fieldState,
            isValidating: true,
        }));
        const parsed = await validator.safeParseAsync(inputValue);
        if (parsed.success === false) {
            return setFieldState(fieldName, (fieldState) => ({
                ...fieldState,
                hasErroredOnce: true,
                isValidating: false,
                validationErrors: parsed.error.errors.map((e) => e.message),
            }));
        }
        setFieldState(fieldName, (fieldState) => ({
            ...fieldState,
            isValidating: false,
            validationErrors: undefined,
        }));
    };
}
function toSetValidationErrors(setFormState) {
    const setFieldState = toSetFieldState(setFormState);
    return (fieldErrors) => {
        setFormState((formState) => ({
            ...formState,
            hasFieldErrors: false,
            submitStatus: "idle",
        }));
        for (const [key, validationErrors] of Object.entries(fieldErrors)) {
            setFieldState(key, (fieldState) => ({
                ...fieldState,
                hasErroredOnce: true,
                validationErrors,
            }));
        }
    };
}
async function validateForm({ formData, validator, }) {
    const result = await z
        .preprocess((formData) => {
        if (!(formData instanceof FormData))
            return formData;
        return mapValues(Object.fromEntries(formData), (value, key) => {
            const all = formData.getAll(String(key));
            return all.length > 1 ? all : value;
        });
    }, z.object(validator))
        .safeParseAsync(formData);
    if (result.success) {
        return { data: result.data, fieldErrors: undefined };
    }
    return {
        data: undefined,
        fieldErrors: result.error.formErrors.fieldErrors,
    };
}

export { toValidateField as a, toSetValidationErrors as b, formNameInputProps as f, getInitialFormState as g, toTrackAstroSubmitStatus as t, validateForm as v };
