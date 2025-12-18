import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DPuNHMCF.mjs';
import 'piccolore';
import './chunks/astro/server_BaK1mv8C.mjs';
import 'clsx';
import { d as defineMiddleware, s as sequence } from './chunks/index_Bn06en8x.mjs';
import { v as validateForm } from './chunks/module_CP3BRzEX.mjs';

const formContentTypes = [
    "application/x-www-form-urlencoded",
    "multipart/form-data",
];
function isFormRequest(request) {
    return (request.method === "POST" &&
        formContentTypes.some((t) => request.headers.get("content-type")?.startsWith(t)));
}
const onRequest$1 = defineMiddleware(({ request, locals }, next) => {
    locals.form = {
        async getData(form) {
            if (!isFormRequest(request))
                return undefined;
            // TODO: hoist exceptions as `formErrors`
            const formData = await request.clone().formData();
            return validateForm({ formData, validator: form.validator });
        },
        async getDataByName(name, form) {
            if (!isFormRequest(request))
                return undefined;
            // TODO: hoist exceptions as `formErrors`
            const formData = await request.clone().formData();
            if (formData.get("_formName") === name) {
                formData.delete("_formName");
                return validateForm({ formData, validator: form.validator });
            }
            return undefined;
        },
    };
    return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
