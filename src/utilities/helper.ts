import slugify from "slugify";

export const parseURL = (text: string) => {
    const parsedText = slugify(text, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
        trim: true,
        locale: 'en-US',
    });

    return parsedText;
};