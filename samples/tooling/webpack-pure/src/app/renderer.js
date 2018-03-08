
import Handlebars from 'handlebars/dist/handlebars';

const compileHelper = (tpl, ctx) => {
    const template = Handlebars.compile(tpl);
    const html    = template(ctx);
    return html;
};

class Renderer {

    greeting(city) {

        const tplSrc = 'Welcome {{city}}!';
        const context = { city };
        return compileHelper(tplSrc, context);
    }
}

export default Renderer;
