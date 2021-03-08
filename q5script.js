export const rectangle = (w, h) => {
    return w*h;
}


export const circle =(r) => {
    return  Math.PI * (Math.pow(r, 2));
}



export const cylinder = (R, H) => {
    return 2 * (Math.PI) * R * (H + R);
}

